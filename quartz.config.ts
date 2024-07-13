import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "📔",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "notebook.protist.info",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fdfdfd",        // Warm white
          lightgray: "#e8e6e3",    // Light sepia
          gray: "#c4b29a",         // Sepia
          darkgray: "#3a111c",     // Dark sepia
          dark: "#3e1c33",         // Dark brown
          secondary: "#ff9932",    // Warm brown
          tertiary: "#d6bfa4",     // Pale beige
          highlight: "#ffe8bd",    // Khaki
        },
        darkMode: {
          light: "#2b2b2b",        // Dark brown
          lightgray: "#524a41",    // Dark sepia
          gray: "#857a70",         // Medium sepia
          darkgray: "#b8a899",     // Light sepia
          dark: "#e5dccd",         // Light beige
          secondary: "#ff9932",    // Warm brown
          tertiary: "#d6bfa4",     // Pale beige
          highlight: "#855e42",    // Light khaki
        },        
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
