import { LoginData } from '../model/Login';

export class LoginService {
    isLogin(p_login_data: LoginData): boolean {
        let is_login = true;
        is_login &&= p_login_data.m_username === 'admin';
        is_login &&= p_login_data.m_password === '1234';
        return is_login;
    }
}
