import React, { Suspense } from 'react';
import './styles/index.scss';
import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "helpers/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import ThemeSwitcher from "shared/ui/ThemeSwitcher/ui/ThemeSwitcher";


const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <ThemeSwitcher/>
            <Suspense fallback={<div>Loading...</div>}>
                <AppRouter/>
            </Suspense>
        </div>
    );
};

export default App;