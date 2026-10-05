import { LoginData } from '@readyreact/login/model/Login';
import { LoginService } from '@readyreact/login/service/Login';

describe('TestLogin', () => {
    // teste une connexion reussie
    it('Test_Connexion_Reussie', () => {
        const login_service = new LoginService();
        const login_data = new LoginData();
        login_data.m_username = 'admin';
        login_data.m_password = '1234';
        expect(login_service.isLogin(login_data)).toBe(true);
    });

    // teste une connexion echouee
    it('Test_Connexion_Echouee', () => {
        const login_service = new LoginService();
        const login_data = new LoginData();
        login_data.m_username = 'user';
        login_data.m_password = 'wrong';
        expect(login_service.isLogin(login_data)).toBe(false);
    });
});
