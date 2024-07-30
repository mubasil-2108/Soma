import { useState, useEffect, useCallback } from 'react';
import { BackHandler } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';
import { navigate, goBack } from '../../../../navigation/rootNavigation';
import { appImages, routes } from '../../../../services';
import firestore from '@react-native-firebase/firestore';

export function useHooks() {

    const [modalLogoutVisible, setModalLogoutVisible] = useState(false);
    const [search, setSearch] = useState('');
    const [modalHomeVisible, setModalHomeVisible] = useState(false);
    const [clickedItems, setClickedItems] = useState({});
    const [clickedProductItems, setClickedProductsItems] = useState({});
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const predefinedOrder = ['Cardiologie', 'Oncologie', 'Vasculaire', 'Hernie', 'Reanimation', 'Orl'];
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => {
            backHandler.remove();
        };
    }, []);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const snapshot = await firestore().collection('Categories').get();
                let categoriesList = snapshot.docs.map(doc => doc.data().name);

                // Add "ALL" to categories list
                categoriesList = ['ALL', ...categoriesList];

                // Sort categories according to predefined order
                categoriesList.sort((a, b) => predefinedOrder.indexOf(a) - predefinedOrder.indexOf(b));

                setCategories(categoriesList);
            } catch (error) {
                console.error('Error fetching categories: ', error);
            }
        };
    
        fetchCategories();
      }, []);
    const handleBackPress = () => {
        navigate(routes.auth);
        return true;
    };

    useEffect(() => {
        const fetchData = async () => {
          try {
            // setLoading(true);
            const categoriesSnapshot = await firestore().collection('Categories').get();
            
            const categories = {};
            for (const categoryDoc of categoriesSnapshot.docs) {
              const categoryId = categoryDoc.id;
              const categoryData = categoryDoc.data();
              
              const subCategoriesSnapshot = await firestore().collection('Categories').doc(categoryId).collection('Subcategories').get();
              const subCategories = {};
              
              for (const subCategoryDoc of subCategoriesSnapshot.docs) {
                const subCategoryId = subCategoryDoc.id;
                const subCategoryData = subCategoryDoc.data();
                
                const optionalSubCategoriesSnapshot = await firestore().collection('Categories').doc(categoryId).collection('Subcategories').doc(subCategoryId).collection('Subcategories').get();
                const optionalSubCategories = {};
                
                for (const optionalSubCategoryDoc of optionalSubCategoriesSnapshot.docs) {
                  const optionalSubCategoryId = optionalSubCategoryDoc.id;
                  const optionalSubCategoryData = optionalSubCategoryDoc.data();
                  
                  const productsSnapshot = await firestore().collection('Categories').doc(categoryId).collection('Subcategories').doc(subCategoryId).collection('Subcategories').doc(optionalSubCategoryId).collection('Products').get();
                  const products = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                  
                  optionalSubCategories[optionalSubCategoryId] = {
                    ...optionalSubCategoryData,
                    products
                  };
                }
                
                const productsSnapshot = await firestore().collection('Categories').doc(categoryId).collection('Subcategories').doc(subCategoryId).collection('Products').get();
                const products = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                
                subCategories[subCategoryId] = {
                  ...subCategoryData,
                  optionalSubCategories,
                  products
                };
              }
              
              categories[categoryId] = {
                ...categoryData,
                subCategories
              };
            }
            
            setData(categories);
          } catch (err) {
            console.error('Error fetching data: ', err);
            setError(err);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);


    const modalHomeVisibility = () => {
        setModalHomeVisible(!modalHomeVisible);
    };
    const modalLogoutVisibility = () => {
        setModalLogoutVisible(!modalLogoutVisible);
    };

    const handlePressItem = (item) => {
        setSelectedCategory(item.name);
        setClickedItems(prevClickedItems => {
            const updatedItems = {};
            if (item.name === 'ALL') {
                updatedItems[item.name] = true;
                navigate(routes.dummyScreen);
            } else {
                updatedItems[item.name] = true;
            }
            return updatedItems;
        });
    };

    const handleProductPressItem = (item, index) => {
        // Check if the item is already clicked
        // if (!clickedItems[item.id]) {
        // Toggle the clicked state of the notification item
        setClickedProductsItems(prevClickedItems => ({
            // ...prevClickedItems,
            [item.id]: true // Set to true to indicate it's clicked
        }));
        // }
    };

    return {
        modalHomeVisible,
        modalHomeVisibility,
        data,
        goBack,
        modalLogoutVisibility,
        modalLogoutVisible,
        handlePressItem,
        clickedItems,
        search,
        setSearch,
        handleProductPressItem,
        clickedProductItems,
        categories,
        selectedCategory
    }
}