const CONFIG = {
  // profile setting (required)
  profile: {
    name: "hyuko",
    image: "/cat.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "backend developer",
    bio: `🌐 Industrial IoT Developer | 🚀 Tech Enthusiast
Crafting middleware and web apps with expertise in MQTT, RabbitMQ, and Kubernetes.
Skilled in InfluxDB, Grafana, and CI/CD with GitOps, GitHub Actions, and ArgoCD.
🌱 Learning: Spring Boot, React, AWS, MySQL | 🏙️ Based in Yangsan, Korea`,
    email: "gogur7419@gmail.com",
    linkedin: "",
    github: "hyuk12",
    instagram: "",
  },
  projects: [
    {
      name: `hyuko-log`,
      href: "https://github.com/hyuk12/hyuko-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "hyuko-log",
    description: "welcome to hyuko-log!",
    scheme: "system", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://hyukolog.vercel.app/",
  since: 2024, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 1, // revalidate time for [slug], index
}

module.exports = { CONFIG }
