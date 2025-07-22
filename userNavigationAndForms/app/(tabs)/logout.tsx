import { useCallback } from 'react';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export default function Logout() {
    const router = useRouter();
    useFocusEffect(
        useCallback(() => {
            Alert.alert(
                'Logout',
                'Are you sure you want to logout?',
                [
                    {
                        text: 'Cancel',
                        style: 'cancel',
                        onPress: () => router.back(),
                    },
                    {
                        text: 'Logout',
                        style: 'destructive',
                        onPress: () => {
                            // Add your logout logic here (e.g., clearing tokens)
                            router.replace('/');
                        },
                    },
                ],
                { cancelable: false }
            );
        }, [router])
    );

    return null;
}