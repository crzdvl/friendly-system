import React from 'react';
import propTypes, { string } from 'prop-types';
import { useTranslation } from 'react-i18next';

import styles from './AboutMe.module.css';
import * as accountService from '../../services/account-service';

import Album from '../../components/Album/Album';
import Button from '../../components/Button/Button';
import Subtitle from '../../components/Subtitle/Subtitle';
import Headline from '../../components/Headline/Headline';
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';

const AboutMeView = ({headlineText, subtitleText, photos, }) => {
    const [ t ] = useTranslation();

    return (
        <div className={styles.container}>
            <Headline text={headlineText} />
            <Subtitle text={subtitleText} />
            {photos.length ? <Album photos={photos}/> : <Subtitle text={t('loading')} />}
            <Button name={t('nameOfButtonLogout')} handleClick={accountService.logout} />
            <ThemeSwitcher />
            <LanguageSwitcher />
        </div>
    );
}

AboutMeView.propTypes = {
    headlineText: propTypes.string.isRequired,
    subtitleText: propTypes.string.isRequired,
    photos: propTypes.arrayOf(string).isRequired,
};

export default AboutMeView;
