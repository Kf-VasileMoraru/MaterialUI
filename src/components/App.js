import React from 'react';
import ChildComponent from './childcomponent';
import {ThemePovider} from './ThemeProvider';


export default function App() {


    return (
        <ThemePovider>
            <ChildComponent/>
        </ThemePovider>
    );
}


