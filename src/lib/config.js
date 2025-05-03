/**
 * Website configuration and information
 * @type {{
 *   site: {
 *     name: string,
 *     description: string,
 *     author: string,
 *     links: {
 *       github: string,
 *       documentation: string
 *     }
 *   },
 *   navigation: {
 *     menu: Array<{
 *       label: string,
 *       path: string
 *     }>
 *   }
 * }}
 */
const websiteInfo = {
  site: {
    name: "RePlate",
    description: "A modern React application template crafted with attention to detail",
    author: "Roberto Bendinelli",
    links: {
      github: "https://github.com/robertobendi",
      documentation: "/docs"
    }
  },
  navigation: {
    menu: [
      {
        label: "Home",
        path: "/"
      },
      {
        label: "Page 1",
        path: "/page1"
      }
    ]
  }
};

// Freeze the object to prevent accidental modifications
Object.freeze(websiteInfo);
Object.freeze(websiteInfo.site);
Object.freeze(websiteInfo.site.links);
Object.freeze(websiteInfo.navigation);
Object.freeze(websiteInfo.navigation.menu);

export default websiteInfo;