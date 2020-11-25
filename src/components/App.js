import React, {useState} from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router';

import Header from './ui/Header';
import theme from './ui/Theme';
import Footer from './ui/Footer';
import LandingPage from './LandingPage';
import Contact from './Contact';


function App() {
    const [value, setValue] = useState(0);
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header value={value} setValue={setValue}/>
                <Switch>
                    <Route exact path='/' component={LandingPage}/>
                    <Route exact path='/services' component={() => <div>services</div>}/>
                    <Route exact path='/customsoft' component={() => <div>customsoft</div>}/>
                    <Route exact path='/mobile' component={() => <div>mobile</div>}/>
                    <Route exact path='/web' component={() => <div>web</div>}/>
                    <Route exact path='/revolution' component={() => <div>revolutin</div>}/>
                    <Route exact path='/about' component={() => <div>about</div>}/>
                    <Route exact path='/contact' component={Contact}/>
                    <Route exact path='/estimate ' component={() => <div>estimate</div>}/>
                </Switch>
                <Footer value={value} setValue={setValue}/>
            </BrowserRouter>

        </ThemeProvider>


    );
}

export default App;
