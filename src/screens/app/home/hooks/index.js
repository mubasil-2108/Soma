import { useState, useEffect, useCallback } from 'react';
import { BackHandler } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';
import { navigate, goBack } from '../../../../navigation/rootNavigation';
import { appImages, routes } from '../../../../services';

export function useHooks() {

    const [modalLogoutVisible, setModalLogoutVisible] = useState(false);
    const [search, setSearch] = useState('');
    const [modalHomeVisible, setModalHomeVisible] = useState(false);
    const [clickedItems, setClickedItems] = useState({});
    const [clickedProductItems, setClickedProductsItems] = useState({});

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => {
            backHandler.remove();
        };
    }, []);
    const handleBackPress = () => {
        navigate(routes.auth);
        return true;
    };


    const modalHomeVisibility = () => {
        setModalHomeVisible(!modalHomeVisible);
    };
    const modalLogoutVisibility = () => {
        setModalLogoutVisible(!modalLogoutVisible);
    };

    const data = [
        { label: 'Large', value: '1' },
        { label: 'Medium', value: '2' },
        { label: 'Small', value: '3' },
    ];

    const handlePressItem = (item, index) => {
        // Check if the item is already clicked
        // if (!clickedItems[item.id]) {
        // Toggle the clicked state of the notification item
        setClickedItems(prevClickedItems => ({
            // ...prevClickedItems,
            [item.id]: true // Set to true to indicate it's clicked
        }));
        // }
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
    const dummyProductData = [
        {
            id: '1',
            userName: 'cardiologie',
            subCategory: [
                {
                    subName: 'Rythmologie',
                    products: [
                        {
                            productName: 'Bandage',
                            productImage: appImages.product1,
                            productPrice: 9.99,
                            productCapacity: '75ml',
                            productTablets: '100 tablets'
                        },
                        {
                            productName: 'Stethoscope',
                            productImage: appImages.product2,
                            productPrice: 19.99,
                            productCapacity: 'N/A',
                            productTablets: 'N/A'
                        }
                    ]
                }
            ]
        },
        {
            id: '2',
            userName: 'oncologie',
            subCategory: [
                {
                    subName: 'Chemotherapy',
                    products: [
                        {
                            productName: 'Chemo Drug',
                            productImage: appImages.product3,
                            productPrice: 199.99,
                            productCapacity: '50ml',
                            productTablets: '200 tablets'
                        }
                    ]
                }
            ]
        }
    ];
    
    const dummyData = [
        {
            id: '1',
            userName: 'cardiologie',
        },
        {
            id: '2',
            userName: 'oncologie',
        },
        {
            id: '3',
            userName: 'Vasculaire',
        },
        {
            id: '4',
            userName: 'David Wilson',
        },
        {
            id: '5',
            userName: 'Eva Green',
        },
    ];



    return {
        modalHomeVisible,
        modalHomeVisibility,
        data,
        goBack,
        modalLogoutVisibility,
        modalLogoutVisible,
        handlePressItem,
        dummyData,
        clickedItems,
        search,
        setSearch,
        handleProductPressItem,
        clickedProductItems,
        dummyProductData
    }
}