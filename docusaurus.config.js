module.exports = {
  title: 'Donation Tracker',
  tagline: 'Project Site for Donation Tracker, Tufts Code For Good 2020',
  url: 'https://jroth01.github.io',
  baseUrl: '/donation-tracker/',
  favicon: 'img/favicon.ico',
  organizationName: 'jroth01', // Usually your GitHub org/user name.
  projectName: 'donation-tracker', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Donation Tracker',
      logo: {
        alt: 'My Site Logo',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Justin Roth`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'overview',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
