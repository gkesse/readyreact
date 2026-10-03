import { router } from 'expo-router';
import { View, Button, StyleSheet } from 'react-native';

export default function Admin() {
    return (
        <View style={styles.container}>
            <Button title="Déconnexion" onPress={() => router.push('/home')} />
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
