// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Feel free to dive into my projects and reach out if you’re interested in collaboration or just want to chat about the latest advancements in AI and machine learning. Together, we can push the boundaries of what’s possible!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "news-i-was-awarded-the-president-s-scholarship-at-china-university-of-geosciences",
          title: 'I was awarded the President’s Scholarship at China University of Geosciences.',
          description: "",
          section: "News",},{id: "news-we-ranked-national-15th-place-in-the-ccf-big-data-and-computational-intelligence-competition",
          title: 'We ranked National 15th Place in the CCF Big Data and Computational Intelligence...',
          description: "",
          section: "News",},{id: "news-we-won-the-national-first-prize-in-huawei-china-university-ict-competition-national-finals",
          title: 'We won the National First Prize in Huawei China University ICT Competition National...',
          description: "",
          section: "News",},{id: "news-we-won-the-global-first-prize-in-huawei-ict-competition-global-finals",
          title: 'We won the Global First Prize in Huawei ICT Competition Global Finals!',
          description: "",
          section: "News",},{id: "news-i-was-awarded-the-huawei-research-innovation-scholarship",
          title: 'I was awarded the Huawei Research Innovation Scholarship.',
          description: "",
          section: "News",},{id: "news-one-paper-on-3d-point-cloud-keypoints-generation-was-accepted-to-nn-24",
          title: 'One paper on 3D point cloud keypoints generation was accepted to NN’24.',
          description: "",
          section: "News",},{id: "news-started-a-research-internship-at-jd-com",
          title: 'Started a Research Internship at JD.COM.',
          description: "",
          section: "News",},{id: "news-one-paper-on-few-shot-learning-was-accepted-to-pr-25",
          title: 'One paper on few-shot learning was accepted to PR’25.',
          description: "",
          section: "News",},{id: "news-one-paper-on-advertising-image-generation-was-accepted-to-www-25",
          title: 'One paper on advertising image generation was accepted to WWW’25.',
          description: "",
          section: "News",},{id: "news-started-a-research-internship-at-tencent",
          title: 'Started a Research Internship at Tencent.',
          description: "",
          section: "News",},{id: "news-one-paper-on-few-shot-class-incremental-learning-was-accepted-to-cvpr-26",
          title: 'One paper on few-shot class-incremental learning was accepted to CVPR’26.',
          description: "",
          section: "News",},{id: "news-one-paper-on-vision-language-prompt-learning-was-accepted-to-tcsvt-26",
          title: 'One paper on vision-language prompt learning was accepted to TCSVT’26.',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%68%65%6E%78%69%6E%67%79%65@%68%75%73%74.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=4vrufuAAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
