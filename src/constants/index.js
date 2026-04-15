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
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
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
        "Improved Navigation and Mobility in Digital Twin using Cuopts and AI Pathfinding .",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
        "Integrated Backend with Node js and Firebse Deployed apps on AWS and Google Cloud Platform.",
        "OPtimized the WebGL and deployed it on server which is used by 10000+ people",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Unity Developer",
      company_name: "XROS by META @ Who VR",
      icon: xros,
      iconBg: "#FFFFFF",
      date: "March 2023 - June 2023",
      points: [
        "Employed ARFoundation to implement augmented reality features in the application. using Unity ",
        "Collaborated on the project's User Interface Design using Figma.",
        "Contributed to improving the application's user experience, making it cleaner and more effective.",
        "Utilized JSON for cloud integration to enhance data handling and storage.",
      ],
    },
    {
      title: "Unity VR Developer",
      company_name: "IIT Guwahati",
      icon: iitg,
      iconBg: "#FFFFFF",
      date: "June 2023 - July 2023",
      points: [
        "Made Jewellery Store in Virtual reality.",
        "Utilized Blender for making 3D models and animations.",
        "Worked on XR All in one SDK by Meta quest 2 and Unity 3D and reduced the VR Sickness.",
        "Conducted user research by 20+ people and improved the VR experience.",
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

  export { services, technologies, experiences, projects, certifications };