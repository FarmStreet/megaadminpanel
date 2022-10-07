import { classNames } from 'helpers/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div className={classNames(cls.LangSwitcher, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR}
                onClick={toggle}
            >
                {t('сменить язык')}
            </Button>
        </div>
    );
};

export default LangSwitcher;
