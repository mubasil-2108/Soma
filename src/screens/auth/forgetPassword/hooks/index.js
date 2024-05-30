import { navigate, goBack } from "../../../../navigation/rootNavigation"
import { routes } from "../../../../services"
import { useState, useEffect } from 'react';
import { BackHandler } from 'react-native';

export function useHooks() {

    const [email, setEmail] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const modalVisibility = () => {
        setModalVisible(!modalVisible);
    };

    return {
       setEmail,
        email,
        goBack,
        modalVisible,
        modalVisibility
    }
}