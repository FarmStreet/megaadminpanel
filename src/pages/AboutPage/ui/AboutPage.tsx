import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('Тут информация о сайте')}
        </div>
    );
};

export default AboutPage;
