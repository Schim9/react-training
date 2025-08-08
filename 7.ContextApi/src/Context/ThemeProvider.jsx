import {createContext, useState} from 'react';

export const ThemeContext = createContext ();

export default function ThemeProvider(props) {
  // On définit un state par défaut
  const [theme, setTheme] = useState ('spring');

  // On définit une fonction qui sera exportée
  const toggleTheme = () => {
    setTheme (prevTheme => (prevTheme === 'spring' ? 'winter' : 'spring'));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
}


