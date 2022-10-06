import React, { Suspense } from 'react';
import './styles/index.scss';
import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "helpers/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <button onClick={toggleTheme}>переключить</button>
            <Suspense fallback={<div>Loading...</div>}>
                <AppRouter/>
            </Suspense>
        </div>
    );
};

export default App;