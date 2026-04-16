import {
    unity,
    csharp,
    python,
    mobile,
    backend,
    creator,
    web,
    javascript,
    beyblade,
    vr,

    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    nvidia,
    mujoco,
    robotOdometry,
    coursera,
    mathworks,
    nptel,

    alma,
    crud,

    cern,
    xros,
    iitg,
    smollan,
    predictive


  } from "../assets";

  
  export const navLinks = [
    { id: "about",   title: "About"   },
    { id: "work",    title: "Work"    },
    { id: "contact", title: "Contact" },
    { id: "hobbies", title: "Hobbies", isRoute: true, path: "/hobbies" },
  ];
  
  const services = [
    {
      title: "Robotics Simulation and Software Developer",
      icon: web,
    },
    {
      title: "XR Developer",
      icon: mobile,
    },
    {
      title: "Application Developer",
      icon: backend,
    },
    {
      title: "Software Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Unity 3D",
      icon: unity,
    },
    {
      name: "Csharp",
      icon: csharp,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Nvidia Omniverse",
      icon: nvidia,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Robotics Software Developer",
      company_name: "Jio Reality Labs (Reliance Industries), Mumbai",
      icon: nvidia,
      iconBg: "#000000",
      date: "May 2025 - Present",
      points: [
        "Simulated complex hand-object interaction scenarios using Isaac Sim and ROS 2, enabling pre-deployment validation of grasping policies with a 30% improvement in simulation-to-reality transfer.",
        "Designed and tested AI-driven control strategies to enhance robot dexterity, optimizing hand pose estimation and joint coordination across 6+ DoF, improving object manipulation success rate by 45%",
        "Developed mobility behaviors by integrating sensor-driven locomotion models, enabling stable walking and turning on uneven terrain with a 25% reduction in fall incidents during trials.",
        "Calibrated and fine-tuned mass, inertia, and joint damping parameters in simulation for 20+ limb segments, ensuring physics-consistent behavior of hands and legs across tasks.",
        "Worked on Deployment of GrootN1.5 Model on Humanoid Robot Simulation using ISAAC SIM ROS Nodes and achieved 80% accuracy.",
        "Unity to ROS2 MQTT protocol Deployment for Odometry deployment for Realsense Camera using Meta Quest 3.",
      ],
      media: [
        { type: "image", src: "https://picsum.photos/seed/jio-sim/600/400",    caption: "Isaac Sim Humanoid Simulation" },
        { type: "image", src: "https://picsum.photos/seed/jio-ros/600/400",    caption: "ROS2 ↔ Unity MQTT Bridge" },
        { type: "image", src: "https://picsum.photos/seed/jio-hand/600/400",   caption: "Hand Dexterity Training Pipeline" },
      ],
    },
    {
      title: "Nvidia Omniverse Developer",
      company_name: "CERN, Geneva Switzerland",
      icon: cern,
      iconBg: "#1E59AE",
      date: "July 2024 - September 2024",
      points: [
        "Worked on Nvidia OmniVerse using USD files to create a virtual environment for the LHCb experiment.",
        "Developed various Extension in Python for Digital Twin of the LHCb experiment.",
        "Improved Navigation and Mobility in Digital Twin using Cuopts and AI Pathfinding.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
      media: [
        { type: "image", src: "https://picsum.photos/seed/cern-twin/600/400",  caption: "LHCb Digital Twin in Omniverse" },
        { type: "image", src: "https://picsum.photos/seed/cern-nav/600/400",   caption: "AI Pathfinding Navigation Extension" },
      ],
    },
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
        { type: "image", src: "https://picsum.photos/seed/smol-apps/600/400", caption: "Google Apps Dashboard" },
        { type: "image", src: "https://picsum.photos/seed/smol-webgl/600/400", caption: "WebGL Deployment — 10k+ Users" },
      ],
    },
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
        { type: "image", src: "https://picsum.photos/seed/xros-ar/600/400",   caption: "AR Foundation Experience" },
        { type: "image", src: "https://picsum.photos/seed/xros-ui/600/400",   caption: "UI/UX Design — Figma Prototype" },
      ],
    },
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
        { type: "image", src: "https://picsum.photos/seed/iitg-vr/600/400",   caption: "VR Jewellery Store — Meta Quest 2" },
        { type: "image", src: "https://picsum.photos/seed/iitg-blend/600/400", caption: "3D Models Built in Blender" },
      ],
    },
  ];
  
  
  const projects = [
    // Robotics Projects
    {
      name: "Unity MQTT Odometry Package",
      description:
        "A comprehensive robotics package enabling Unity to ROS2 MQTT protocol deployment for odometry data collection from Realsense cameras. Integrated with Meta Quest 3 for real-time sensor data streaming and robot control.",
      category: "Robotics",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "ROS2",
          color: "green-text-gradient",
        },
        {
          name: "MQTT",
          color: "pink-text-gradient",
        },
      ],
      image: robotOdometry,
      source_code_link: "https://github.com/saumy007/Unity-MQTT-Odometry-Package.git",
    },
    {
      name: "Reinforcement Learning Robot Policies",
      description:
        "Training data and logs from a humanoid robot simulated in MoJoCo, focusing on learning a stable standing posture. The training process optimizes the robot's gait control system to maintain balance and remain stationary under simulation dynamics.",
      category: "Robotics",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "MuJoCo",
          color: "green-text-gradient",
        },
        {
          name: "RL",
          color: "pink-text-gradient",
        },
      ],
      image: mujoco,
      source_code_link: "https://github.com/saumy007/Robotics_RL.git",
    },
    // AR VR Projects
    {
      name: "Digital Twin VR",
      description:
        "A VR based Application that utilizes XR Interaction Toolkit and Shows the future of Digital Twin made in Unity using C# can also be played with VR Headset with VR simulator of Meta All in one SDK .",
      category: "AR VR",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "XR Interaction Toolkit",
          color: "green-text-gradient",
        },
        {
          name: "Quest",
          color: "pink-text-gradient",
        },
      ],
      image: vr,
      source_code_link: "https://github.com/saumy007/VR-Factory",
    },
    {
      name: "Beyblade AR",
      description:
        "Multiplayer Beyblade Game made in Unity using C# and PUN(Photon Unity Network) also added functionalty for Augmented Reality to to play with people on same level.",
      category: "AR VR",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "ARCore",
          color: "green-text-gradient",
        },
        {
          name: "C#",
          color: "pink-text-gradient",
        },
      ],
      image: beyblade,
      source_code_link: "",
    },
    // ML AI LLM Projects
    {
      name: "Predictive Maintenance and Monitoring using Machine Learning",
      description:
        "Built a system to predict equipment failures and optimize maintenance using machine learning models. Analyzed sensor data, achieved 20-30% cost reduction, and deployed the solution on AWS. Tools: Python, Scikit-learn.",
      category: "ML AI LLM",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Scikit-learn",
          color: "green-text-gradient",
        },
        {
          name: "numpy",
          color: "pink-text-gradient",
        },
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
      logo: coursera
    },
    {
      title: "Reinforcement Learning",
      issuer: "Mathworks",
      date: "2024",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/UVDXRLWTUXF6",
      skills: ["Reinforcement Learning", "RL Algorithms", "Control Systems", "Optimization"],
      logo: mathworks
    },
    {
      title: "Industrial Robotics: Theories of Implementation",
      issuer: "NPTEL",
      date: "2025",
      credentialUrl: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/112/noc25-me161/Course/NPTEL25ME161S126520042810830747.pdf",
      skills: ["Industrial Robotics", "Robotic Systems", "Implementation", "Theory"],
      logo: nptel
    },
  ];

  // ── Articles ──────────────────────────────────────────────────────────────
  export const articles = [
    {
      id: 1,
      title: "ROS2 to Unity MQTT Connection for Robotic Simulation",
      description:
        "A hands-on walkthrough of bridging ROS2 and Unity via MQTT — covering message setup, real-time odometry streaming from a Realsense Camera, and deployment with Meta Quest 3.",
      thumbnail: "https://picsum.photos/seed/article-ros2/600/380",
      url: "https://medium.com/@saumysharma007/ros2-to-unity-mqtt-connection-for-robotic-simulation-432286549c89",
      platform: "Medium",
      date: "2024",
      readTime: "6 min read",
    },
    {
      id: 2,
      title: "Robots Learning from YouTube – What People Get Wrong",
      description:
        "Unpacking the myths around imitation learning from video data — what current research actually shows, the real challenges of generalisation, and why it's harder than it looks.",
      thumbnail: "https://picsum.photos/seed/article-robots-yt/600/380",
      url: "https://medium.com/@saumysharma007/robots-learning-from-youtube-heres-what-people-get-wrong-d3c64aa2c9c5",
      platform: "Medium",
      date: "2024",
      readTime: "5 min read",
    },
  ];

  // ── Posts ─────────────────────────────────────────────────────────────────
  export const posts = [
    {
      id: 1,
      description:
        "Sharing my latest work on ROS2 ↔ Unity MQTT integration for robotic odometry at Jio Reality Labs. Real-time sensor data streaming with Meta Quest 3 — the future of robot-digital twin pipelines!",
      thumbnail: "https://picsum.photos/seed/post-mqtt/600/380",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7432498353059500032/",
      platform: "LinkedIn",
      date: "2025",
    },
    {
      id: 2,
      description:
        "Building in public — sharing my AR/VR development journey, lessons from working on XR projects with Meta Quest, Unity, and ARFoundation. #BuildInPublic #AR #VR",
      thumbnail: "https://picsum.photos/seed/post-arvr/600/380",
      url: "https://www.linkedin.com/posts/saumy-sharma_buildinpublic-ar-vr-activity-7298640291509452801-3et0",
      platform: "LinkedIn",
      date: "2025",
    },
    {
      id: 3,
      description:
        "Proud to share my Certificate of Completion! Continuing to grow in robotics, simulation, and AI-driven systems. Every cert is one more tool in the toolbox 🚀",
      thumbnail: "https://picsum.photos/seed/post-cert/600/380",
      url: "https://www.linkedin.com/posts/saumy-sharma_certificate-of-completion-activity-7343279124259426305-jVjl",
      platform: "LinkedIn",
      date: "2025",
    },
  ];

  // ── Hobbies Page Data ─────────────────────────────────────────────────────
  export const hobbiesData = {
    personalStory: [
      "From taking apart gadgets as a kid to deploying humanoid robots in simulation — my journey has always been driven by one constant: curiosity. I was the student who asked \"but how does it actually work?\" and then went and built it.",
      "Today I bridge the physical and digital worlds — building systems where robots perceive their environment and XR experiences blur the line between real and virtual. When I'm not deep in a simulation, you'll find me at the gym, on a game server, or writing about the tech I'm obsessed with.",
    ],
    education: [
      {
        degree: "B.Tech — Computer Science & Engineering",
        institution: "Amity University",
        location: "Noida, India",
        duration: "2021 – 2025",
        description:
          "Specialized in AI/ML, Robotics, and Extended Reality development. Core coursework covered Computer Vision, Deep Learning, Embedded Systems, and Game Development.",
        highlights: ["Robotics Club", "AR/VR Research", "Multiple Hackathons"],
      },
      {
        degree: "Higher Secondary — Science (PCM + CS)",
        institution: "Delhi Public School",
        location: "India",
        duration: "2019 – 2021",
        description:
          "Physics, Chemistry, Mathematics with Computer Science. Strong foundation in algorithmic thinking and problem solving.",
        highlights: ["School Technical Head", "Science Exhibition"],
      },
    ],
    interests: [
      { icon: "🤖", title: "Robotics",    description: "Humanoid robots, motion planning & simulation" },
      { icon: "🥽", title: "AR / VR",     description: "Spatial computing & immersive experiences" },
      { icon: "🎮", title: "Gaming",      description: "Competitive FPS & indie game development" },
      { icon: "🏋️", title: "Fitness",    description: "Gym, boxing & staying disciplined" },
      { icon: "📖", title: "Reading",     description: "Sci-fi novels, research papers & tech blogs" },
      { icon: "🎵", title: "Music",       description: "Lo-fi while coding, synthwave on weekends" },
    ],
    aboutMe:
      "I'm Saumy Sharma — a software engineer who loves making things move, whether that's a robot arm, an AR overlay, or a game character. I get excited about the intersection of simulation, AI, and immersive tech. Always open to a good conversation about robots, games, or the next big idea.",
  };

  export { services, technologies, experiences, projects, certifications };