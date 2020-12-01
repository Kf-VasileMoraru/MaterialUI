import React, {useContext} from 'react';
import {ThemeContext, ThemeUpdateContext, useTheme, useThemeUpdate} from './ThemeProvider';


function GrandChildComponent() {
    // eslint-disable-next-line no-undef
    const  theme  = useContext(ThemeContext);
    const  changeTheme  = useContext(ThemeUpdateContext);

    return (
        <>
            <div>The theme is {theme}</div>
            <button onClick={changeTheme}>
                Change To Light Theme
            </button>
        </>
    );
}


function ChildComponent() {
    return <GrandChildComponent />;
}
export default  ChildComponent;
