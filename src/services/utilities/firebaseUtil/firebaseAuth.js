import auth from '@react-native-firebase/auth'
import Toast from 'react-native-simple-toast'
import { routes } from '../../constants';
import { navigate, goBack } from "../../../navigation/rootNavigation"

export const Signup = async (email,password, setEmail, setPassword, isChecked) => {
    const isEmailValid = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };
    const isPasswordValid = (password) => {
        return password.length >= 8;
    };

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
                // setLoading(true);
                await auth().createUserWithEmailAndPassword(email, password).then(() => {
                    console.log('User added');
                    // setLoading(false);
                    navigate(routes.app);
                })


            } else {
                Toast.show('Please check the circle', Toast.SHORT, Toast.TOP);
            }
        } catch (error) {
            // setLoading(false);
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

export const Signin = async (email,password) => {
    const isEmailValid = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };
    const isPasswordValid = (password) => {
        return password.length >= 6;
    };

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
            // setLoading(true);
            await auth().signInWithEmailAndPassword(email, password);
            console.log('User signed in');
            navigate(routes.app);
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                Toast.show('User not found', Toast.SHORT, Toast.TOP);
                console.log('User not found');
            } else if (error.code === 'auth/wrong-password') {
                Toast.show('Incorrect password', Toast.SHORT, Toast.TOP);
                console.log('Incorrect password');
            } else {
                console.error('Sign-in error:', error);
                Toast.show('Sign-in error', Toast.SHORT, Toast.TOP);
            }
        }
    }

};

