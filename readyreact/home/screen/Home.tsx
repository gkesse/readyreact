import { router } from 'expo-router';
import { View, Button, StyleSheet } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Button title="Accéder au Login" onPress={() => router.push('/login')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
