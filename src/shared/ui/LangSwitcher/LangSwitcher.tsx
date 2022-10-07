import { classNames } from 'helpers/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div className={classNames('', {}, [className])}>
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
