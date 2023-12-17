// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkFumen from 'remark-fumen';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Tetraminoes',
    tagline: 'A tetris wiki',
    favicon: 'img/favicon.ico',
    
    // Set the production url of your site here
    url: 'https://your-docusaurus-site.example.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',
    
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    
    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    editUrl: 'https://github.com/tetraminoes/tetramino-wiki/edit/main/',
                    // remarkPlugins: [remarkFumen],
                    path: './docs'
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],
    
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // the embed image that will be disp[layed on the social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'Tetraminoes',
                logo: {
                    alt: 'Tetraminoes wiki Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        position: 'left',
                        label: 'Wiki',
                        docId: 'intro',
                    },
                    {
                        href: 'https://github.com/facebook/docusaurus',
                        className: 'header-github-link',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                   /* {
                        title: 'wiki',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/docusaurus',
                            },
                        ],
                    },*/
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/tetraminoes-wiki/tetraminoes',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            },
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: false,
                respectPrefersColorScheme: true,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
    
    scripts: [
        {
            src: '/js/renderMinoFont.js',
            async: true,
        },
    ],
};

export default config;
