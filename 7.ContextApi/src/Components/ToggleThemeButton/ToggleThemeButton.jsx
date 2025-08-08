import {ThemeContext} from '../../Context/ThemeProvider';
import {useContext} from 'react';

export default function ToggleThemeButton () {
  // Le hook useContext permet d'accéder au contexte ThemeContext
  // et d'en extraire les valeurs theme et toggleTheme.
  const {theme, toggleTheme} = useContext (ThemeContext);
  // On utilise les valeurs du contexte pour définir la classe du bouton
  const buttonClass = `btn ${theme === 'winter' ? 'btn-warning' : 'btn-primary'} position-fixed  top-0 end-0 m-2`;

  return (
    <button onClick={toggleTheme} className={buttonClass}>
      <span>Toggle Theme to {theme === 'winter' ? '☀️' : '❄️'}</span>
    </button>
  );
}




