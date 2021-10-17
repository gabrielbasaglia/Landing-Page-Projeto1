import { screen } from '@testing-library/dom';
import Home from '.';
import { renderTheme } from '../../../styles/render-theme';
import { theme } from '../../../styles/theme';

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', { name: 'Ola Mundo' }).parentElement;
  expect(headingContainer).toHaveStyle({
    backgorund: theme.colors.secondaryBg,
  });
});
