import React, {useContext, useState} from 'react';

export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext);
}

export function ThemePovider({children}) {
    const [theme, setTheme] = useState('dark');

    const changeTheme = () => setTheme('light');

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeUpdateContext.Provider value={changeTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );

}