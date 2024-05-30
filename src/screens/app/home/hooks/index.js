import { useState, useEffect, useCallback } from 'react';
import { BackHandler } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';
import { navigate, goBack } from '../../../../navigation/rootNavigation';
import { routes } from '../../../../services';

export function useHooks() {

    const [modalLogoutVisible, setModalLogoutVisible] = useState(false);
    const [modalHomeVisible, setModalHomeVisible] = useState(false);
    const [value, setValue] = useState(null);

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

    const [messages, setMessages] = useState([])

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages),
        )
    }, [])


    return {
        modalHomeVisible,
        modalHomeVisibility,
        data,
        value,
        setValue,
        goBack,
        modalLogoutVisibility,
        modalLogoutVisible,
        messages,
        setMessages,
        onSend,
    }
}