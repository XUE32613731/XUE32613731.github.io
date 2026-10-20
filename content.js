// 编辑文案：同一内容的 zh（中文）、en（英文）、fr（法文）放在一起。
// 保留字段名与标点；icons 对应 assets/icons/ 中的真实图标文件。
const pageCopy = {
  "about": {
    "zh": "关于我",
    "en": "About",
    "fr": "À propos"
  },
  "experience": {
    "zh": "经历",
    "en": "Experience",
    "fr": "Parcours"
  },
  "knowledge": {
    "zh": "学习资料库",
    "en": "Knowledge",
    "fr": "Ressources"
  },
  "cv": {
    "zh": "个人履历",
    "en": "CV",
    "fr": "CV"
  },
  "contact": {
    "zh": "联系方式",
    "en": "Contact",
    "fr": "Contact"
  },
  "settings": {
    "zh": "设置",
    "en": "Settings",
    "fr": "Réglages"
  },
  "style": {
    "zh": "风格",
    "en": "Appearance",
    "fr": "Apparence"
  },
  "dark": {
    "zh": "深色",
    "en": "Dark",
    "fr": "Sombre"
  },
  "light": {
    "zh": "浅色",
    "en": "Light",
    "fr": "Clair"
  },
  "welcome": {
    "zh": "欢迎来到",
    "en": "Welcome to",
    "fr": "Bienvenue dans"
  },
  "world": {
    "zh": "我的世界",
    "en": "MY WORLD",
    "fr": "MON MONDE"
  },
  "scroll": {
    "zh": "关于我的一点介绍",
    "en": "A LITTLE ABOUT ME",
    "fr": "QUELQUES MOTS SUR MOI"
  },
  "introLabel": {
    "zh": "PROFILE",
    "en": "PROFILE",
    "fr": "PROFIL"
  },
  "profileName": {
    "zh": "薛润韬",
    "en": "Runtao XUE",
    "fr": "Runtao XUE"
  },
  "intro": {
    "zh": "目前就读于巴黎大学数学工程与生物统计学硕士项目，本科毕业于数学与计算机科学双专业（Bi-licence）。",
    "en": "I am currently pursuing a master’s degree in Mathematical Engineering and Biostatistics at Université Paris Cité, following a dual bachelor’s degree (Bi-licence) in Mathematics and Computer Science.",
    "fr": "Je poursuis actuellement un master en ingénierie mathématique et biostatistique à Université Paris Cité, après une bi-licence en mathématiques et informatique."
  },
  "introApproach": {
    "zh": "得益于跨学科的学术训练，我具备扎实的数学与计算机科学基础，注重逻辑推理、空间思维与抽象建模，善于从不同角度分析复杂问题并探索解决方案。在学习、研究与项目实践中，我始终秉持严谨、系统且有条理的工作方式，既能够独立开展研究与开发工作，也具备团队协作、项目组织与协调的经验。",
    "en": "My interdisciplinary academic training has given me a solid foundation in mathematics and computer science. I place particular emphasis on logical reasoning, spatial thinking and abstract modelling, approaching complex problems from different perspectives to explore possible solutions. In my studies, research and project work, I take a rigorous, systematic and organised approach. I am comfortable conducting research and development independently and also have experience in teamwork, project organisation and coordination.",
    "fr": "Ma formation interdisciplinaire m’a apporté de solides bases en mathématiques et en informatique. J’accorde une place importante au raisonnement logique, à la pensée spatiale et à la modélisation abstraite, en abordant les problèmes complexes sous différents angles pour en explorer les solutions. Dans mes études, mes recherches et mes projets, j’adopte une démarche rigoureuse, systématique et structurée. Je peux mener des travaux de recherche et de développement en autonomie et possède également une expérience du travail en équipe, de l’organisation et de la coordination de projets."
  },
  "introInterests": {
    "zh": "我的研究兴趣与实践经历涉及多个交叉领域，包括生物医学数据分析、软件工程、具身智能、人工智能模型训练及 AI 影像创作等。我乐于探索不同学科与技术之间的联系，并尝试将理论知识转化为具有实际价值的研究成果与创新作品。",
    "en": "My research interests and practical experience span several interdisciplinary fields, including biomedical data analysis, software engineering, embodied AI, AI model training and AI-powered visual creation. I enjoy exploring connections between disciplines and technologies, and seek to turn theoretical knowledge into research outcomes and creative work with practical value.",
    "fr": "Mes intérêts de recherche et mes expériences pratiques couvrent plusieurs domaines interdisciplinaires, notamment l’analyse de données biomédicales, le génie logiciel, l’intelligence artificielle incarnée, l’entraînement de modèles d’IA et la création visuelle par l’IA. J’aime explorer les liens entre disciplines et technologies, et chercher à transformer les connaissances théoriques en résultats de recherche et en créations innovantes ayant une valeur concrète."
  },
  "more": {
    "zh": "进一步了解我",
    "en": "More about me",
    "fr": "En savoir plus"
  },
  "back": {
    "zh": "返回",
    "en": "Back",
    "fr": "Retour"
  },
  "emailLabel": { "zh": "邮箱", "en": "Email", "fr": "E-mail" },
  "wechatLabel": { "zh": "微信", "en": "WeChat", "fr": "WeChat" },
  "pendingUpdate": {
    "zh": "等待更新",
    "en": "Coming soon",
    "fr": "À venir"
  },
  "updated": {
    "zh": "于2026年10月20日更新",
    "en": "Updated on October 20, 2026",
    "fr": "Mis à jour le 20 octobre 2026"
  }
};

const skillCatalog = [
  {
    "id": "python",
    "name": {
      "zh": "Python",
      "en": "Python",
      "fr": "Python"
    },
    "icons": [
      "python.svg"
    ],
    "type": {
      "zh": "编程语言",
      "en": "Language",
      "fr": "Langage"
    },
    "description": {
      "zh": "用于脚本编写、自动化与数据探索。常用于机器学习和数据处理（类似 R 语言的功能）。",
      "en": "Used for scripting, automation and data exploration. Widely used in machine learning and data processing, with capabilities that overlap with R.",
      "fr": "Utilisé pour les scripts, l’automatisation et l’exploration des données. Courant en machine learning et en traitement des données, avec des usages proches de ceux de R."
    }
  },
  {
    "id": "java",
    "name": {
      "zh": "Java",
      "en": "Java",
      "fr": "Java"
    },
    "icons": [
      "java.svg"
    ],
    "type": {
      "zh": "编程语言",
      "en": "Language",
      "fr": "Langage"
    },
    "description": {
      "zh": "面向对象编程与跨平台应用开发。",
      "en": "Object-oriented programming and cross-platform applications.",
      "fr": "Programmation orientée objet et applications multiplateformes."
    }
  },
  {
    "id": "c",
    "name": {
      "zh": "C",
      "en": "C",
      "fr": "C"
    },
    "icons": [
      "c.svg"
    ],
    "type": {
      "zh": "编程语言",
      "en": "Language",
      "fr": "Langage"
    },
    "description": {
      "zh": "探索系统编程、内存与软件底层基础。",
      "en": "Systems programming, memory and software fundamentals.",
      "fr": "Programmation système, mémoire et bases du logiciel."
    }
  },
  {
    "id": "mysql",
    "name": {
      "zh": "MySQL",
      "en": "MySQL",
      "fr": "MySQL"
    },
    "icons": [
      "mysql.svg"
    ],
    "type": {
      "zh": "数据库",
      "en": "Database",
      "fr": "Base de données"
    },
    "description": {
      "zh": "关系数据管理、SQL 查询与数据库设计。",
      "en": "Relational data management, SQL queries and database design.",
      "fr": "Gestion de données relationnelles, requêtes SQL et conception de bases."
    }
  },
  {
    "id": "web",
    "name": {
      "zh": "HTML + CSS + JS",
      "en": "HTML + CSS + JS",
      "fr": "HTML + CSS + JS"
    },
    "icons": [
      "html.svg",
      "css.svg",
      "javascript.svg"
    ],
    "type": {
      "zh": "网页开发",
      "en": "Web development",
      "fr": "Développement web"
    },
    "description": {
      "zh": "构建网站的基础语言。HTML 构建结构、CSS 设计样式、JavaScript 实现交互。",
      "en": "The foundational languages of the web. HTML provides structure, CSS defines styles, and JavaScript adds interactivity.",
      "fr": "Les langages fondamentaux du Web. HTML structure les pages, CSS définit leur style et JavaScript les rend interactives."
    }
  },
  {
    "id": "androidstudio",
    "name": {
      "zh": "Android Studio",
      "en": "Android Studio",
      "fr": "Android Studio"
    },
    "icons": [
      "androidstudio.svg"
    ],
    "type": {
      "zh": "应用开发",
      "en": "App development",
      "fr": "Développement mobile"
    },
    "description": {
      "zh": "Android 应用的开发、调试与界面构建。",
      "en": "Developing, debugging and building interfaces for Android apps.",
      "fr": "Développement, débogage et création d’interfaces Android."
    }
  },
  {
    "id": "rstudio",
    "name": {
      "zh": "RStudio",
      "en": "RStudio",
      "fr": "RStudio"
    },
    "icons": [
      "rstudio.svg"
    ],
    "type": {
      "zh": "数据分析",
      "en": "Data analysis",
      "fr": "Analyse de données"
    },
    "description": {
      "zh": "使用 R 进行统计计算、数据分析与可视化。",
      "en": "Statistical computing, data analysis and visualisation with R.",
      "fr": "Calcul statistique, analyse et visualisation avec R."
    }
  },
  {
    "id": "octave",
    "name": {
      "zh": "GNU Octave",
      "en": "GNU Octave",
      "fr": "GNU Octave"
    },
    "icons": [
      "octave.svg"
    ],
    "type": {
      "zh": "科学计算",
      "en": "Scientific computing",
      "fr": "Calcul scientifique"
    },
    "description": {
      "zh": "数值实验、矩阵运算与科学计算。",
      "en": "Numerical experiments, matrices and scientific computation.",
      "fr": "Expérimentation numérique, matrices et calcul scientifique."
    }
  },
  {
    "id": "openai",
    "name": {
      "zh": "GPT / Codex",
      "en": "GPT / Codex",
      "fr": "GPT / Codex"
    },
    "icons": [
      "openai.svg"
    ],
    "type": {
      "zh": "AI 工具",
      "en": "AI tools",
      "fr": "Outils d’IA"
    },
    "description": {
      "zh": "不依赖但也不可或缺的小助手。",
      "en": "A little assistant I don’t depend on, yet wouldn’t want to be without.",
      "fr": "Un petit assistant dont je ne dépends pas, mais dont je ne saurais me passer."
    }
  },
  {
    "id": "react",
    "name": {
      "zh": "React",
      "en": "React",
      "fr": "React"
    },
    "icons": [
      "react.svg"
    ],
    "type": {
      "zh": "界面开发",
      "en": "Interface development",
      "fr": "Développement d’interfaces"
    },
    "description": {
      "zh": "用于构建网页界面的 JavaScript 库，让界面开发更高效。",
      "en": "A JavaScript library for building web interfaces more efficiently.",
      "fr": "Une bibliothèque JavaScript pour créer des interfaces web plus efficacement."
    }
  },
  {
    "id": "sas",
    "name": {
      "zh": "SAS",
      "en": "SAS",
      "fr": "SAS"
    },
    "icons": [
      "sas.png"
    ],
    "type": {
      "zh": "统计分析",
      "en": "Statistical analysis",
      "fr": "Analyse statistique"
    },
    "description": {
      "zh": "数据管理、统计分析与分析结果报告。",
      "en": "Data management, statistical analysis and reporting.",
      "fr": "Gestion des données, analyse statistique et rapports."
    }
  },
  {
    "id": "wechat",
    "name": {
      "zh": "微信公众号",
      "en": "WeChat Official Account",
      "fr": "Compte officiel WeChat"
    },
    "icons": [
      "wechat.png"
    ],
    "type": {
      "zh": "内容创作",
      "en": "Content creation",
      "fr": "Création de contenu"
    },
    "description": {
      "zh": "微信公众号 1w+ 粉丝运营经验。",
      "en": "Experience running a WeChat Official Account with over 10,000 followers.",
      "fr": "Expérience de gestion d’un compte officiel WeChat suivi par plus de 10 000 personnes."
    }
  },
  {
    "id": "tapnow",
    "name": {
      "zh": "TapNow",
      "en": "TapNow",
      "fr": "TapNow"
    },
    "icons": [
      "tapnow.png"
    ],
    "type": {
      "zh": "AI 创作",
      "en": "AI creation",
      "fr": "Création avec l’IA"
    },
    "description": {
      "zh": "在可视化画布上组织创意与 AI 内容创作流程。",
      "en": "Organising ideas and AI content workflows on a visual canvas.",
      "fr": "Organiser des idées et des créations avec l’IA sur un canevas visuel."
    }
  },
  {
    "id": "figma",
    "name": {
      "zh": "Figma",
      "en": "Figma",
      "fr": "Figma"
    },
    "icons": [
      "figma.svg"
    ],
    "type": {
      "zh": "界面设计",
      "en": "Interface design",
      "fr": "Design d’interfaces"
    },
    "description": {
      "zh": "界面设计、交互原型与协作设计。",
      "en": "Interface design, interactive prototypes and collaborative design.",
      "fr": "Design d’interfaces, prototypes interactifs et collaboration."
    }
  },
  {
    "id": "github",
    "name": {
      "zh": "GitHub",
      "en": "GitHub",
      "fr": "GitHub"
    },
    "icons": [
      "github.svg"
    ],
    "type": {
      "zh": "代码协作",
      "en": "Code collaboration",
      "fr": "Collaboration sur le code"
    },
    "description": {
      "zh": "代码托管、版本管理与项目协作。",
      "en": "Code hosting, version control and project collaboration.",
      "fr": "Hébergement de code, gestion des versions et collaboration."
    }
  },
  {
    "id": "canva",
    "name": {
      "zh": "Canva",
      "en": "Canva",
      "fr": "Canva"
    },
    "icons": [
      "canva.svg"
    ],
    "type": {
      "zh": "视觉设计",
      "en": "Visual design",
      "fr": "Design visuel"
    },
    "description": {
      "zh": "演示文稿、海报与日常视觉内容制作。",
      "en": "Creating presentations, posters and everyday visual content.",
      "fr": "Création de présentations, d’affiches et de contenus visuels."
    }
  },
  {
    "id": "notion",
    "name": {
      "zh": "Notion",
      "en": "Notion",
      "fr": "Notion"
    },
    "icons": [
      "notion.svg"
    ],
    "type": {
      "zh": "知识管理",
      "en": "Knowledge management",
      "fr": "Gestion des connaissances"
    },
    "description": {
      "zh": "整理笔记、知识资料与项目任务。",
      "en": "Organising notes, knowledge resources and project tasks.",
      "fr": "Organisation des notes, des connaissances et des tâches."
    }
  },
  {
    "id": "paris-cite",
    "name": {
      "zh": "巴黎西岱大学",
      "en": "Université Paris Cité",
      "fr": "Université Paris Cité"
    },
    "icons": [
      "paris-cite.png"
    ],
    "type": {
      "zh": "在读大学",
      "en": "Current university",
      "fr": "Université actuelle"
    },
    "description": {
      "zh": "本科和研究生就读学校。数学研究覆盖基础数学、概率统计与应用数学，特别是生物医疗领域，具备深厚的数学与理论计算机研究基础。",
      "en": "My university for undergraduate and graduate studies. Its mathematics research spans pure mathematics, probability, statistics and applied mathematics, particularly applications in biology and medicine, with strong foundations in mathematics and theoretical computer science.",
      "fr": "Mon université pour mes études de licence et de master. Ses recherches couvrent les mathématiques fondamentales et appliquées, les probabilités et les statistiques, notamment dans les domaines de la biologie et de la médecine, avec de solides bases en mathématiques et en informatique théorique."
    }
  },
  {
    "id": "machine-learning",
    "name": {
      "zh": "机器学习",
      "en": "Machine Learning",
      "fr": "Apprentissage automatique"
    },
    "icons": [
      "machine-learning.svg"
    ],
    "type": {
      "zh": "学习领域",
      "en": "Learning area",
      "fr": "Domaine d’étude"
    },
    "description": {
      "zh": "人工智能的一个分支，让计算机从数据中学习规律，并据此进行预测或决策。",
      "en": "A branch of artificial intelligence in which computers learn patterns from data to make predictions or decisions.",
      "fr": "Une branche de l’intelligence artificielle qui permet aux ordinateurs d’apprendre à partir de données pour prédire ou prendre des décisions."
    }
  },
  {
    "id": "deep-learning",
    "name": {
      "zh": "深度学习",
      "en": "Deep Learning",
      "fr": "Apprentissage profond"
    },
    "icons": [
      "deep-learning.svg"
    ],
    "type": {
      "zh": "学习领域",
      "en": "Learning area",
      "fr": "Domaine d’étude"
    },
    "description": {
      "zh": "机器学习的一类方法，利用多层神经网络从数据中学习复杂的特征与规律。",
      "en": "A family of machine learning methods that use multilayer neural networks to learn complex features and patterns from data.",
      "fr": "Une famille de méthodes de machine learning utilisant des réseaux neuronaux multicouches pour apprendre des caractéristiques et des régularités complexes dans les données."
    }
  },
  {
    "id": "jianying",
    "name": {
      "zh": "剪映",
      "en": "Jianying",
      "fr": "Jianying"
    },
    "icons": [
      "jianying.ico"
    ],
    "type": {
      "zh": "视频创作",
      "en": "Video creation",
      "fr": "Création vidéo"
    },
    "description": {
      "zh": "视频剪辑、字幕制作与视听内容表达。",
      "en": "Video editing, subtitles and audiovisual storytelling.",
      "fr": "Montage vidéo, sous-titrage et narration audiovisuelle."
    }
  }
];

// 联系方式：三种语言共用。
const contactDetails = {
  email: "runtao.xue1011@gmail.com",
  wechat: "x3261373158"
};
