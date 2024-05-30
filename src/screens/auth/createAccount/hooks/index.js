import { useState, useEffect } from "react"
import { BackHandler } from 'react-native'
import { navigate, goBack } from "../../../../navigation/rootNavigation"
import { routes } from "../../../../services";


export function useHooks() {

    const [accepted, setAccepted] = useState(false)

    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmShowPassword(!showConfirmPassword);
    };


    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    const isEmailValid = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };
    const isPasswordValid = (password) => {
        return password.length >= 8;
    };

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => {
            backHandler.remove();
        };
    }, []);
    const handleBackPress = () => {
            goBack();
            return true;
    };

    const handleProfileSetupPress = async () => {
        if (!isEmailValid(email)) {
            if (email.trim() === '') {
                Toast.show('Enter email first', Toast.SHORT, Toast.TOP);
            } else {
                Toast.show('Enter valid email', Toast.SHORT, Toast.TOP);
                return;
            }
        } else if (!isPasswordValid(password)) {
            if (password.trim() === '') {
                Toast.show('Enter password first', Toast.SHORT, Toast.TOP);
            } else {
                Toast.show('Password length less than 6', Toast.SHORT, Toast.TOP);
                return;
            }
        } else {
            try {
                if (isChecked) {
                    setLoading(true);
                    await auth().createUserWithEmailAndPassword(email, password).then(() => {
                        console.log('User added');
                        setLoading(false);
                        navigate(routes.app);
                    })


                } else {
                    Toast.show('Please check the circle', Toast.SHORT, Toast.TOP);
                }
            } catch (error) {
                setLoading(false);
                if (error.code === 'auth/email-already-in-use') {
                    Toast.show('Email already exists', Toast.SHORT, Toast.TOP);
                    console.log('Email already exists');
                    setPassword('');
                    setEmail('');
                } else {
                    console.error('Registration error:', error);
                }
            }
        }
    };

    return {
        accepted,
        setAccepted,
        toggleCheckbox,
        togglePasswordVisibility,
        toggleConfirmPasswordVisibility,
        setEmail,
        email,
        setName,
        name,
        showPassword,
        showConfirmPassword,
        setPassword,
        setConfirmPassword,
        confirmPassword,
        password,
        isChecked,
        goBack
    }
}