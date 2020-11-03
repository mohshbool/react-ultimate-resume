import React, { memo } from 'react';

import cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { Tooltip } from '@welovedevs/ui';
import { useMediaQuery } from '@material-ui/core';

import { ShareLinks } from './share_links/share_links';

import { ReactComponent as GithubLogo } from '../../assets/icons/brands/github.svg';
import { ReactComponent as Template } from '../../assets/icons/template.svg';

import { styles } from './footer_styles';

const useStyles = createUseStyles(styles);

const FooterComponent = () => {
    const classes = useStyles();
    const { screenSizes } = useTheme();

    const useSmallLayout = useMediaQuery(
        `(max-width: ${screenSizes.medium - (screenSizes.medium - screenSizes.small) / 2}px)`,
        { defaultMatches: true }
    );

    if (useSmallLayout) {
        return (
            <div className={cn(classes.container, useSmallLayout && classes.smallLayoutContainer)}>
                <ShareLinks useSmallLayout />
                <div className={classes.wldLogoGithubLogoContainer}>
                    <Tooltip
                        title={
                            <FormattedMessage
                                id="Footer.github.tooltip.left"
                                defaultMessage="Visit this page on GitHub"
                            />
                        }
                    >
                        <a
                            className={classes.githubLink}
                            href="https://github.com/mohshbool/react-ultimate-resume/tree/shbool"
                            target="_bank"
                            rel="noreferer noopener"
                        >
                            <GithubLogo className={classes.githubLogo} />
                        </a>
                    </Tooltip>
                    <Tooltip
                        title={
                            <FormattedMessage
                                id="Footer.github.tooltip.right"
                                defaultMessage="Create your own developer profile!"
                            />
                        }
                    >
                        <a
                            className={classes.githubLink}
                            href="https://github.com/welovedevs/developer-profile"
                            target="_bank"
                            rel="noreferer noopener"
                        >
                            <Template className={classes.githubLogo} />
                        </a>
                    </Tooltip>
                </div>
            </div>
        );
    }

    return (
        <div className={classes.container}>
            <Tooltip
                title={<FormattedMessage id="Footer.github.tooltip.left" defaultMessage="Visit this page on GitHub" />}
            >
                <a
                    className={classes.githubLink}
                    href="https://github.com/mohshbool/react-ultimate-resume/tree/shbool"
                    target="_bank"
                    rel="noreferer noopener"
                >
                    <GithubLogo className={classes.githubLogo} />
                </a>
            </Tooltip>
            <ShareLinks />
            <Tooltip
                title={
                    <FormattedMessage
                        id="Footer.github.tooltip.right"
                        defaultMessage="Create your own developer profile!"
                    />
                }
            >
                <a
                    className={classes.githubLink}
                    href="https://github.com/welovedevs/developer-profile"
                    target="_bank"
                    rel="noreferer noopener"
                >
                    <Template className={classes.githubLogo} />
                </a>
            </Tooltip>
        </div>
    );
};

export const Footer = memo(FooterComponent);
