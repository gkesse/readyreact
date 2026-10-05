import Login from '@readyreact/login/screen/Login';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { router } from 'expo-router';
import { Alert } from 'react-native';

jest.mock('expo-router', () => ({
    router: {
        replace: jest.fn(),
        push: jest.fn(),
        back: jest.fn()
    }
}));

describe('TestLogin', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    // teste le rendu du composant Login
    it('Test_Rendu_Composant_Login', async () => {
        const screen = await render(<Login />);

        expect(screen.getByPlaceholderText('Utilisateur')).toBeTruthy();
        expect(screen.getByPlaceholderText('Mot de passe')).toBeTruthy();
        expect(screen.getByText('Connexion')).toBeTruthy();
    });

    // teste la connexion reussie
    it('Test_Connexion_Reussie', async () => {
        const screen = await render(<Login />);

        const username = screen.getByPlaceholderText('Utilisateur');
        const password = screen.getByPlaceholderText('Mot de passe');
        const button = screen.getByText('Connexion');

        fireEvent.changeText(username, 'admin');

        await waitFor(() => {
            expect(username.props.value).toBe('admin');
        });

        fireEvent.changeText(password, '1234');

        await waitFor(() => {
            expect(password.props.value).toBe('1234');
        });

        fireEvent.press(button);

        await waitFor(() => {
            expect(router.replace).toHaveBeenCalledWith('/admin');
        });
    });

    // teste la connexion echouee
    it('Test_Connexion_Echouee', async () => {
        const screen = await render(<Login />);
        const alertSpy = jest.spyOn(Alert, 'alert');

        const username = screen.getByPlaceholderText('Utilisateur');
        const password = screen.getByPlaceholderText('Mot de passe');
        const button = screen.getByText('Connexion');

        fireEvent.changeText(username, 'user');

        await waitFor(() => {
            expect(username.props.value).toBe('user');
        });

        fireEvent.changeText(password, 'badpassword');

        await waitFor(() => {
            expect(password.props.value).toBe('badpassword');
        });

        fireEvent.press(button);

        await waitFor(() => {
            expect(alertSpy).toHaveBeenCalledWith('Erreur', 'Identifiants incorrects');
        });

        expect(router.replace).not.toHaveBeenCalled();
    });
});
