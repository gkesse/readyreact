import { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'admin' && password === '1234') {
            router.replace('/admin');
        } else {
            Alert.alert('Erreur', 'Identifiants incorrects');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Utilisateur"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
            />

            <TextInput
                placeholder="Mot de passe"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={styles.input}
            />

            <Button title="Connexion" onPress={handleLogin} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        padding: 10,
        borderRadius: 5
    }
});
