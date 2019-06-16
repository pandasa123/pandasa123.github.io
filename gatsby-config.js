module.exports = {
  siteMetadata: {
    title: "Sanket Panda",
    description: "Sanket Panda Portfolio",
    author: "@pandasa123"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Sanket Panda Portfolio",
        short_name: "Sanket Panda",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#4dc0b5",
        display: "minimal-ui",
        icon: "src/images/tailwind-icon.png"
      }
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    }
  ]
};