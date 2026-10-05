import { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { LoginData } from '../model/Login';
import { LoginService } from '../service/Login';

export default function Login() {
    const login_service = new LoginService();
    const [login_data, setLoginData] = useState(new LoginData());

    const onLogin = () => {
        if (login_service.isLogin(login_data)) {
            router.replace('/admin');
        } else {
            Alert.alert('Erreur', 'Identifiants incorrects');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Utilisateur"
                value={login_data.m_username}
                onChangeText={(text) => setLoginData({ ...login_data, m_username: text })}
                style={styles.input}
            />

            <TextInput
                placeholder="Mot de passe"
                secureTextEntry
                value={login_data.m_password}
                onChangeText={(text) => setLoginData({ ...login_data, m_password: text })}
                style={styles.input}
            />

            <Button title="Connexion" onPress={onLogin} />
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
