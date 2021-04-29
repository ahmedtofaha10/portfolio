/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ahmed Ibrahim's Protfilio",
  description:
    "An aspiring programmer who loves to learn <3, gain experience , create more products and Passionate about work",
  og: {
    title: "Ahmed Ibrahim",
    type: "website",
    url: "ahmedtofaha10.github.io/portfolio",
  },
};

//Home Page
const greeting = {
  title: "Ahmed Ibrahim",
  logo_name: "AhmedIbrahim",
  nickname: "AhmedTofaha",
  subTitle:
    "An aspiring programmer who loves to learn <3, gain experience , create more products and Passionate about work",
  resumeLink:
    "https://drive.google.com/file/d/1SDRc4XAoHV7CSABEbBf3GEjPu5tZz519/view?usp=sharing",
  portfolio_repository: "https://github.com/ahmedtofaha10/portfolio",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ahmedtofaha10",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ahmed-ibrahim-a42bab1a3/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC6R3NoVUNSzp1LpdntKDXfg",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:ahmedtofaha999@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building powerfull systems using newer virsion of Laravel",
        "⚡ Developing mobile applications using Flutter",
        "⚡ Creating application backend in PHP, Laravel",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            backgroundColor: "#ffffff",
            color: "#4a4fb5",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            backgroundColor: "#ffffff",
            color: "#f93e00",
          },
        },

        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Cairo High Institute",
      subtitle: "B.Tech. in Computer science",
      logo_path: "chi-logo-dark.png",
      alt_name: "CHI",
      duration: "2017 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://chi.edu.eg/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as Backend Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Const-Tech",
          company: "All Web Sevices",
          company_url: "https://legatohealthtech.com/",
          logo_path: "cocaba.png",
          duration: "June 2020 - PRESENT",
          location: "SA, ElRiad",
          description:
            "I work on commercial products aimed at profit, some of them are similar, but the goals differ, and I also design and analyze systems and build an integrated system with a team of programmers and designers",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects are based on the design or analysis of the company, many of them were with a team of programmers, others were the only ones I was with, but their plans were under the company name only. I was the backend developer and analyzer iN.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Php , Laravel , System Designs And Database Systems",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "Right Now I don't have",
    link: "#",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Egypt ,Cairo - Nasir City / 31 AbuRahma street",
    avatar_image_path: "address_image.svg",
    location_map_link: "#",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+20 01141720344",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
