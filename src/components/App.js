import React, {useContext, useState} from 'react';
import ChildComponent from './childcomponent';

export const ThemeContext = React.createContext();

export default function App() {
    const [theme, setTheme] = useState('dark');

    const changeTheme = () => setTheme('light');

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <ChildComponent />
        </ThemeContext.Provider>
    );
}


