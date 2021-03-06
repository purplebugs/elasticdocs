module.exports = {
  title: "Learn how to use the Elastic Stack with small, simple examples",
  tagline: "Elasticsearch documentation for total beginners, at any age!",
  url: "https://www.fantasticelastic.dev/",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "purplebugs", // Usually your GitHub org/user name.
  projectName: "fantasticelastic", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Fantastic Elastic",
      logo: {
        alt: "roller skate icon",
        src: "img/skate.png",
      },
      items: [
        {
          to: "/",
          activeBasePath: "docs",
          label: "Elasticsearch Quickstart",
          position: "left",
        },
        { label: "About", to: "/about" },
        {
          href: "https://ko-fi.com/anitalipsky",
          label: "Buy me a cuppa tea ☕️",
          position: "right",
        },
        {
          href: "https://github.com/purplebugs/fantasticelastic",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Elasticsearch Quickstart",
              to: "/",
            },
            {
              label: "Kibana",
              to: "kib1",
            },
          ],
        },
        {
          title: "About",
          items: [
            {
              label: "About This Site",
              to: "/about",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              href: "https://ko-fi.com/anitalipsky",
              label: "Buy me a cuppa tea ☕️",
            },
            {
              label: "GitHub",
              href: "https://github.com/purplebugs/fantasticelastic",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} purplebugs, Built with Docusaurus.`,
    },
    gtag: {
      trackingID: "G-62388ZZQNS",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/purplebugs/fantasticelastic",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/purplebugs/fantasticelastic/edit/source/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
