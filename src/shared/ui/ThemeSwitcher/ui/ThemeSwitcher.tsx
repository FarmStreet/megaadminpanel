import { classNames } from 'helpers/classNames';
import React from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import ThemeDark from 'shared/assets/icons/theme-dark.svg';
import ThemeLight from 'shared/assets/icons/theme-light.svg';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <ThemeDark /> : <ThemeLight />}
        </Button>
    );
};

export default ThemeSwitcher;
