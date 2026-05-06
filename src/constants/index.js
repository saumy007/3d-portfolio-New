import {
  unity, csharp, python, mobile, backend, creator, web,
  javascript, beyblade, vr,
  reactjs, redux, tailwind, nodejs, mongodb, git, figma,
  docker, threejs, nvidia, mujoco, robotOdometry,
  coursera, mathworks, nptel,
  cern, xros, iitg, smollan, predictive,
  dynamicPainter, cernEvent,
} from "../assets";

// Helper functions for Google Drive URLs
const gImg = (id) => `https://lh3.googleusercontent.com/d/${id}`;
const gVid = (id) => `https://drive.google.com/file/d/${id}/preview`;

export const navLinks = [
  { id: "about",        title: "About"        },
  { id: "work",         title: "Work"         },
  { id: "achievements", title: "Achievements" },
  { id: "contact",      title: "Contact"      },
  { id: "hobbies",      title: "Hobbies", isRoute: true, path: "/hobbies" },
];

const services = [
  { title: "Robotics Simulation and Software Developer", icon: web     },
  { title: "XR Developer",                               icon: mobile  },
  { title: "Application Developer",                      icon: backend },
  { title: "Software Developer",                         icon: creator },
];

const technologies = [
  { name: "Unity 3D",         icon: unity      },
  { name: "Csharp",           icon: csharp     },
  { name: "JavaScript",       icon: javascript },
  { name: "Python",           icon: python     },
  { name: "React JS",         icon: reactjs    },
  { name: "Redux Toolkit",    icon: redux      },
  { name: "Tailwind CSS",     icon: tailwind   },
  { name: "Node JS",          icon: nodejs     },
  { name: "MongoDB",          icon: mongodb    },
  { name: "Three JS",         icon: threejs    },
  { name: "git",              icon: git        },
  { name: "Nvidia Omniverse", icon: nvidia     },
  { name: "docker",           icon: docker     },
];

const experiences = [
  // ── Jio Reality Labs ──────────────────────────────────────────────
  {
    title: "Robotics Software Developer",
    company_name: "Jio Reality Labs (Reliance Industries), Mumbai",
    icon: "https://imgs.search.brave.com/f7wrVBahPMeIy4Kkuo2cTmRCA-E9H1UH03HFtc6j-lU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA3/L0ppby1Mb2dvLTUw/MHgzMTQucG5n",
    iconBg: "#FFFFFF",
    date: "May 2025 - Present",
    points: [
      "Worked on Simulation of Humanoid, domain randomization, real world accurate digital twin creation, teleoperation pipeline for controlling humanoid for AI training purposes.",
      "Designed and tested AI-driven control strategies to enhance robot dexterity, optimizing hand pose estimation and joint coordination across 6+ DoF, improving object manipulation success rate by 45%.",
      "Designed various extensions for data collection using simulations, automated Nav2 bipedal walking pipeline for data collection using ros2 stack.",
      "Added Lidar in the Humanoid simulation for better world understanding using Isaac Sim.",
    ],
    media: [
      { type: "image", src: gImg("1XYVqcBbmApEDrP8I-Qr8MEg2cQxd5M29"), caption: "Robot Odometry from VR Glasses"  },
      { type: "image", src: gImg("1OBcciAGxEt34xajbI0G-50fYZiM_h7KH"), caption: "VR Headset MQTT Odometry Demo"    },
      { type: "image", src: "https://developer-blogs.nvidia.com/wp-content/uploads/2022/09/nv-gtc22-fall-social-replicator.png", caption: "Nvidia Omniverse Replicator — Domain Randomization" },
    ],
    viewVideos: [
      {
        image:      gImg("1DIxJugkRHSZwlpOQZsnQ5_VDKi9yOIB8"),
        videoEmbed: gVid("1EL_UK4WYBvfu9FfvR0uVUZVnqs_x0Dfe"),
        description: "Digital Twin made using Nvidia Omniverse",
      },
      {
        image:      gImg("1XYVqcBbmApEDrP8I-Qr8MEg2cQxd5M29"),
        videoEmbed: gVid("1_yjFpNEEuaTtxf-x8yUYqGzNTPRuUsvt"),
        description: "Robot walking using odometry from the VR glasses",
      },
      {
        image:      gImg("1OBcciAGxEt34xajbI0G-50fYZiM_h7KH"),
        videoEmbed: gVid("1a8Kv2oDXYu3nqaSg0Y9QVifi9ajpJG7E"),
        description: "VR headset odometry sent through MQTT protocol demo app inside VR",
      },
      {
        image:      gImg("1OBcciAGxEt34xajbI0G-50fYZiM_h7KH"),
        videoEmbed: gVid("1uHAC6f-D2sIKN7MoB4tl1g1turbODT0d"),
        description: "Automating Data Collection Pipeline in Isaac Sim — NAV2 bipedal walking automation for scalable synthetic data collection",
      },
      {
        image:      "https://developer-blogs.nvidia.com/wp-content/uploads/2022/09/nv-gtc22-fall-social-replicator.png",
        videoEmbed: gVid("1uHAC6f-D2sIKN7MoB4tl1g1turbODT0d"),
        description: "Nvidia Omniverse Replicator for Domain Randomization — synthetic environment variation for robust AI model training",
      },
      {
        image:      "https://developer-blogs.nvidia.com/wp-content/uploads/2022/09/nv-gtc22-fall-social-replicator.png",
        description: "Added Lidar sensor to Humanoid simulation in Isaac Sim for enhanced world perception and autonomous navigation",
      },
    ],
  },

  // ── CERN Omniverse ────────────────────────────────────────────────
  {
    title: "Nvidia Omniverse Developer",
    company_name: "CERN, Geneva Switzerland",
    icon: cern,
    iconBg: "#1E59AE",
    date: "July 2024 - September 2024",
    points: [
      "Worked on Nvidia OmniVerse using USD files to create a virtual environment for the LHCb experiment.",
      "Developed various Extensions in Python for Digital Twin of the LHCb experiment.",
      "Improved Navigation and Mobility in Digital Twin using Cuopts and AI Pathfinding.",
      "Designed and Integrated POC for CERN for using Nvidia Omniverse as a Digital Twins Engine, successfully presented and stakeholders convinced for omniverse DT simulation as official Partners.",
      "Large Hadron Collider Digital Twin simulation — modelled and visualised the LHCb detector geometry inside Omniverse with real-time physics-accurate rendering.",
      "Automated USD scene assembly pipeline to synchronise detector configuration updates directly from CERN's geometry database.",
      "Integrated AI pathfinding (Cuopt) to simulate maintenance crew navigation inside the 27 km LHC tunnel environment.",
    ],
    media: [
      { type: "image", src: gImg("1yLVBeBbiZ5-AXekg0NzRo76eY7Q7CC38"), caption: "CERN Digital Twin"               },
      { type: "image", src: gImg("1nIc6lWw6GH3K5HLCZYMxtMMGLGRFQWv-"), caption: "LHCb Digital Twin in Omniverse" },
      { type: "image", src: gImg("1am0K3zgvPu-39b8YAL-c021Y8Ky7g7LV"), caption: "CERN Internship Certificate"     },
    ],
    reportUrl: "https://drive.google.com/file/d/1JkfKWD4E8bgVhedftczw9-gLj_Jn-TtI/view?usp=sharing",
  },

  // ── CERN WebFest Hackathon ────────────────────────────────────────
  {
    title: "WebFest Hackathon'24 Participant",
    company_name: "CERN WebFest, Geneva Switzerland",
    icon: cern,
    iconBg: "#1E59AE",
    date: "August 2024",
    points: [
      "Participated in CERN WebFest 2024 — one of the world's most prestigious science hackathons.",
      "Worked on the problem: Bringing Quantum Optics to classrooms with LEGO and Augmented Reality.",
      "Built an AR app using LEGO to visualise photon behaviour, beam splitters, and quantum interference patterns.",
      "Designed interactive experiences to make quantum optics accessible to school students worldwide.",
    ],
    media: [
      { type: "image", src: gImg("1R5WK3Jyj4NrmWlK7kX29nCJFwQO-TEKd"), caption: "CERN WebFest 2024"              },
      { type: "image", src: cernEvent,                                    caption: "Team at the event"             },
      { type: "image", src: gImg("1gQ5O7OOM3VxOt0T7lP-StXtrJ_4lfQ3u"), caption: "CERN WebFest Hackathon"        },
    ],
  },

  // ── Smollan ───────────────────────────────────────────────────────
  {
    title: "Software Developer",
    company_name: "Smollan India Pvt Ltd, Remote",
    icon: smollan,
    iconBg: "#11294F",
    date: "Feb 2024 - April 2024",
    points: [
      "Worked on 6+ Google Apps used in Gurugram, India Google Office.",
      "Integrated Backend with Node.js and Firebase. Deployed apps on AWS and Google Cloud Platform.",
      "Optimized the WebGL and deployed it on server which is used by 10000+ people.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    media: [
      {
        type:    "image",
        src:     gImg("1C3j8OyxTQS-JKI6KprFXaqS8tVmHKwzT"),
        caption: "Google Vending Machine App — 10k+ Users",
      },
    ],
  },

  // ── XROS ─────────────────────────────────────────────────────────
  {
    title: "Unity Developer",
    company_name: "XROS by META @ Who VR",
    icon: xros,
    iconBg: "#FFFFFF",
    date: "March 2023 - June 2023",
    points: [
      "Employed ARFoundation to implement augmented reality features in the application using Unity.",
      "Collaborated on the project's User Interface Design using Figma.",
      "Contributed to improving the application's user experience, making it cleaner and more effective.",
      "Utilized JSON for cloud integration to enhance data handling and storage.",
    ],
    media: [
      { type: "image", src: gImg("1jicBb7YjodMHB_dRwwivrMdEZRnt6yfx"), caption: "XROS Fellow — META XR Program" },
    ],
    reportUrl: "https://drive.google.com/file/d/1yKtfTK7QkcFu1-yZd_LtzYhffJgJaUi0/view?usp=sharing",
  },

  // ── IIT Guwahati ──────────────────────────────────────────────────
  {
    title: "Unity VR Developer",
    company_name: "IIT Guwahati",
    icon: iitg,
    iconBg: "#FFFFFF",
    date: "June 2023 - July 2023",
    points: [
      "Made Jewellery Store in Virtual Reality.",
      "Utilized Blender for making 3D models and animations.",
      "Worked on XR All in one SDK by Meta Quest 2 and Unity 3D and reduced VR Sickness.",
      "Conducted user research with 20+ participants and improved the VR experience.",
    ],
    media: [
      { type: "image", src: gImg("1q5BF5kYVi2_9q1TEgc4o32xO70sjmUks"), caption: "IIT Guwahati VR Project", objectFit: "contain", border: "white" },
      { type: "image", src: gImg("1136xPiZELL7EXZpJJrCjm05-30yPmUT8"), caption: "Working at IIT Guwahati"       },
      { type: "video", src: "https://www.youtube.com/embed/f0Ut_mfXnU0", caption: "VR Jewellery Store — YouTube Short" },
    ],
  },
];

// ── Projects ─────────────────────────────────────────────────────────
const projects = [
  {
    name: "Dynamic Painter in Isaac Sim",
    description:
      "A robotic simulation of a dynamic spray painter built in NVIDIA Isaac Sim. The robot arm autonomously detects object geometry and applies paint paths in real time using ROS2 and AI-driven motion planning.",
    category: "Robotics",
    tags: [
      { name: "Isaac Sim", color: "blue-text-gradient"  },
      { name: "ROS2",      color: "green-text-gradient" },
      { name: "Python",    color: "pink-text-gradient"  },
    ],
    image: gImg("1Z7jfxpVmuW0kmGdWvlKRo6CLB7YeaADF"),
    source_code_link: "https://github.com/saumy007/Dynamic-Spray-Painter-Simulation-",
    video_embed: gVid("1KppO4IAj6mrx4yamraWQRK5VSZWmkhHn"),
  },
  {
    name: "Phygtl",
    description:
      "Worked at a San Francisco-based startup called Phygtl. Built Unity-based applications blending physical and digital (phygital) experiences for real-world brand activations and immersive commerce.",
    category: "AR VR",
    tags: [
      { name: "Unity", color: "blue-text-gradient"  },
      { name: "C#",    color: "green-text-gradient" },
      { name: "XR",    color: "pink-text-gradient"  },
    ],
    image: gImg("138S7heXzvbuLX-lBcP3nMVMc6GOKWn8d"),
    source_code_link: "https://github.com/saumy007/Phygtl-SF",
    video_embed: gVid("1oxoOZ9sEeEaJ_pQ97ql1vvX2sikjaIIm"),
  },
  {
    name: "Unity MQTT Odometry Package",
    description:
      "A comprehensive robotics package enabling Unity to ROS2 MQTT protocol deployment for odometry data collection from Realsense cameras. Integrated with Meta Quest 3 for real-time sensor data streaming.",
    category: "Robotics",
    tags: [
      { name: "Unity", color: "blue-text-gradient"  },
      { name: "ROS2",  color: "green-text-gradient" },
      { name: "MQTT",  color: "pink-text-gradient"  },
    ],
    image: robotOdometry,
    source_code_link: "https://github.com/saumy007/Unity-MQTT-Odometry-Package.git",
  },
  {
    name: "Reinforcement Learning Robot Policies",
    description:
      "Training data and logs from a humanoid robot simulated in MoJoCo, focusing on learning a stable standing posture. Optimizes gait control to maintain balance under simulation dynamics.",
    category: "Robotics",
    tags: [
      { name: "Python",  color: "blue-text-gradient"  },
      { name: "MuJoCo", color: "green-text-gradient" },
      { name: "RL",      color: "pink-text-gradient"  },
    ],
    image: mujoco,
    source_code_link: "https://github.com/saumy007/Robotics_RL.git",
  },
  {
    name: "Digital Twin VR",
    description:
      "A VR application using XR Interaction Toolkit showcasing the future of Digital Twin technology. Built in Unity with C#, playable with Meta Quest VR headset.",
    category: "AR VR",
    tags: [
      { name: "Unity",                  color: "blue-text-gradient"  },
      { name: "XR Interaction Toolkit", color: "green-text-gradient" },
      { name: "Quest",                  color: "pink-text-gradient"  },
    ],
    image: vr,
    source_code_link: "https://github.com/saumy007/VR-Factory",
  },
  {
    name: "Beyblade AR",
    description:
      "Multiplayer Beyblade game in Unity using C# and Photon Unity Network with Augmented Reality support to play with others on the same surface.",
    category: "AR VR",
    tags: [
      { name: "Unity",  color: "blue-text-gradient"  },
      { name: "ARCore", color: "green-text-gradient" },
      { name: "C#",     color: "pink-text-gradient"  },
    ],
    image: beyblade,
    source_code_link: "",
  },
  {
    name: "Predictive Maintenance using Machine Learning",
    description:
      "A system to predict equipment failures and optimize maintenance using ML models. Analyzed sensor data, achieved 20–30% cost reduction, deployed on AWS.",
    category: "ML AI LLM",
    tags: [
      { name: "Python",       color: "blue-text-gradient"  },
      { name: "Scikit-learn", color: "green-text-gradient" },
      { name: "numpy",        color: "pink-text-gradient"  },
    ],
    image: predictive,
    source_code_link: "https://github.com/saumy007/Predictive-maintenance-Unity-VR-.git",
  },
];

const certifications = [
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI",
    date: "2024",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/NVLLVTF9O0Y4",
    skills: ["Machine Learning", "Python", "Regression", "Classification"],
    logo: coursera,
  },
  {
    title: "Reinforcement Learning",
    issuer: "Mathworks",
    date: "2024",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/UVDXRLWTUXF6",
    skills: ["Reinforcement Learning", "RL Algorithms", "Control Systems", "Optimization"],
    logo: mathworks,
  },
  {
    title: "Industrial Robotics: Theories of Implementation",
    issuer: "NPTEL",
    date: "2025",
    credentialUrl: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/112/noc25-me161/Course/NPTEL25ME161S126520042810830747.pdf",
    skills: ["Industrial Robotics", "Robotic Systems", "Implementation", "Theory"],
    logo: nptel,
  },
];

export const articles = [
  {
    id: 1,
    title: "ROS2 to Unity MQTT Connection for Robotic Simulation",
    description:
      "A hands-on walkthrough of bridging ROS2 and Unity via MQTT — covering message setup, real-time odometry streaming from a Realsense Camera, and deployment with Meta Quest 3.",
    url: "https://medium.com/@saumysharma007/ros2-to-unity-mqtt-connection-for-robotic-simulation-432286549c89",
    platform: "Medium",
    date: "2024",
    readTime: "6 min read",
  },
  {
    id: 2,
    title: "Robots Learning from YouTube – What People Get Wrong",
    description:
      "Unpacking the myths around imitation learning from video data — what research actually shows, the real challenges of generalisation, and why it's harder than it looks.",
    url: "https://medium.com/@saumysharma007/robots-learning-from-youtube-heres-what-people-get-wrong-d3c64aa2c9c5",
    platform: "Medium",
    date: "2024",
    readTime: "5 min read",
  },
];

export const posts = [
  {
    id: 1,
    description:
      "Sharing my latest work on ROS2 ↔ Unity MQTT integration for robotic odometry at Jio Reality Labs. Real-time sensor data streaming with Meta Quest 3 — the future of robot-digital twin pipelines!",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7432498353059500032/",
    platform: "LinkedIn",
    date: "2025",
  },
  {
    id: 2,
    description:
      "Building in public — sharing my AR/VR development journey, lessons from working on XR projects with Meta Quest, Unity, and ARFoundation. #BuildInPublic #AR #VR",
    url: "https://www.linkedin.com/posts/saumy-sharma_buildinpublic-ar-vr-activity-7298640291509452801-3et0",
    platform: "LinkedIn",
    date: "2025",
  },
  {
    id: 3,
    description:
      "Proud to share my Certificate of Completion! Continuing to grow in robotics, simulation, and AI-driven systems. Every cert is one more tool in the toolbox.",
    url: "https://www.linkedin.com/posts/saumy-sharma_certificate-of-completion-activity-7343279124259426305-jVjl",
    platform: "LinkedIn",
    date: "2025",
  },
];

export const hobbiesData = {
  personalStory: [
    "From taking apart gadgets as a kid to deploying humanoid robots in simulation — my journey has always been driven by one constant: curiosity. I was the student who asked 'but how does it actually work?' and then went and built it.",
    "Today I bridge the physical and digital worlds — building systems where robots perceive their environment and XR experiences blur the line between real and virtual. When I'm not deep in a simulation, you'll find me at the gym, on a game server, or writing about the tech I'm obsessed with.",
  ],
  education: [
    {
      degree: "B.Tech — Computer Science & Engineering",
      institution: "School of Engineering and Technology, Guru Ghasidas University",
      location: "India",
      duration: "2021 – 2025",
      description:
        "Specialized in AI/ML, Robotics, and Extended Reality development. Core coursework covered Computer Vision, Deep Learning, Embedded Systems, and Game Development.",
      highlights: ["Robotics Club", "AR/VR Research", "Multiple Hackathons"],
    },
    {
      degree: "Higher Secondary — Science (PCM + CS)",
      institution: "Bal Vidya Mandir",
      location: "India",
      duration: "2019 – 2021",
      description:
        "Physics, Chemistry, Mathematics with Computer Science. Strong foundation in algorithmic thinking and problem solving.",
      highlights: ["School Technical Head", "Science Exhibition"],
    },
  ],
  interests: [
    { icon: "🤖", title: "Robotics", description: "Humanoid robots, motion planning & simulation" },
    { icon: "🥽", title: "AR / VR",  description: "Spatial computing & immersive experiences"     },
    { icon: "🎮", title: "Gaming",   description: "Competitive FPS & indie game development"       },
    { icon: "🏋️", title: "Fitness", description: "Gym, boxing & staying disciplined"              },
    { icon: "📖", title: "Reading",  description: "Sci-fi novels, research papers & tech blogs"    },
    { icon: "🎵", title: "Music",    description: "Lo-fi while coding, synthwave on weekends"      },
  ],
  aboutMe:
    "I'm Saumy Sharma — a software engineer who loves making things move, whether that's a robot arm, an AR overlay, or a game character. I get excited about the intersection of simulation, AI, and immersive tech.",
};

export const achievements = [
  {
    title: "CERN Openlab Summer Internship",
    organization: "CERN, Geneva, Switzerland",
    date: "July – September 2024",
    description: "Selected for CERN's prestigious internship programme. Developed Nvidia Omniverse digital twin of the LHCb detector. Designed & presented POC to stakeholders — accepted as official Digital Twins Engine partner.",
    icon: cern,
    iconBg: "#1E59AE",
    link: "https://drive.google.com/file/d/1JkfKWD4E8bgVhedftczw9-gLj_Jn-TtI/view?usp=sharing",
    linkLabel: "View Report",
    highlight: true,
  },
  {
    title: "Robotics Software Developer",
    organization: "Jio Reality Labs, Reliance Industries, Mumbai",
    date: "May 2025 – Present",
    description: "Selected for R&D role at India's largest conglomerate (Reliance). Working on humanoid robot simulation, domain randomization, real-world digital twin creation, and teleoperation pipelines for AI training.",
    icon: "https://imgs.search.brave.com/f7wrVBahPMeIy4Kkuo2cTmRCA-E9H1UH03HFtc6j-lU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA3/L0ppby1Mb2dvLTUw/MHgzMTQucG5n",
    iconBg: "#FFFFFF",
    highlight: true,
  },
  {
    title: "XROS Fellow — META XR Program",
    organization: "META / Who VR",
    date: "March – June 2023",
    description: "Accepted into META's exclusive XROS Fellowship for AR/VR developers. Built production AR applications using ARFoundation and Unity; collaborated on UI design and cloud data integration.",
    icon: xros,
    iconBg: "#FFFFFF",
    link: "https://drive.google.com/file/d/1yKtfTK7QkcFu1-yZd_LtzYhffJgJaUi0/view?usp=sharing",
    linkLabel: "View Certificate",
  },
  {
    title: "CERN WebFest 2024 Participant",
    organization: "CERN, Geneva, Switzerland",
    date: "August 2024",
    description: "Competed in one of the world's most prestigious science hackathons. Built an AR app using LEGO to visualise quantum optics — photon behaviour, beam splitters, and quantum interference — for school students.",
    icon: cern,
    iconBg: "#1E59AE",
  },
  {
    title: "IIT Guwahati Research Internship",
    organization: "IIT Guwahati (Premier Indian Institute)",
    date: "June – July 2023",
    description: "Research internship at one of India's top institutions. Developed an immersive VR jewellery store using Meta Quest 2, conducted user studies with 20+ participants, and reduced VR sickness through optimised interaction design.",
    icon: iitg,
    iconBg: "#FFFFFF",
  },
  {
    title: "Published Technical Articles",
    organization: "Medium",
    date: "2024",
    description: "Published robotics engineering articles reaching the global developer community. Topics include ROS2–Unity MQTT integration for robot simulation and AI/robotics research insights.",
    icon: "https://miro.medium.com/v2/resize:fill:152:152/1*sHhtYhaCe2Uc3IU0IgKwIQ.png",
    iconBg: "#000000",
    link: "https://medium.com/@saumysharma007",
    linkLabel: "Read Articles",
  },
];

export { services, technologies, experiences, projects, certifications };
