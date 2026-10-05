import { render } from '@testing-library/react-native';
import Home from '@readyreact/home/screen/Home';

describe('TestHome', () => {
    // teste le rendu du composant Home
    it('Test_Rendu_Composant_Home', async () => {
        const screen = await render(<Home />);
        expect(screen.getByText('Accéder au Login')).toBeTruthy();
    });
});
