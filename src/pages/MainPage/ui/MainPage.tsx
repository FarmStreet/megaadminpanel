import React from 'react';
import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Здесь расположена главная страница')}
        </div>
    );
}

export default MainPage;
