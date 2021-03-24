// const srcs = [
//   'images/tech_react.png',
//   'images/redux.png',
//   'images/js-logo.png',
//   'images/c__.png',
//   'images/python.jpg',
//   'images/java.png',
//   'images/c.png',
//   'images/android-studio.png',
//   'images/android-icon.png',
//   'images/qt.jpg',
//   'images/qml.png',
//   'images/postgresql.png',
//   'images/flask.png',
//   'images/flask-sqlalchemy-logo.png',
//   'images/aws.png',
//   'images/docker.png',
//   'images/heroku.svg',
//   'images/node-js-icon-8.jpg',
//   'images/websocket.jpeg',
//   'images/Sequelize-icon.png',
//   'images/expressjs.png',
//   'images/npm.png',
//   'images/pipenv.png',
//   'images/css3.png',
//   'images/html.png',
//   'images/ubuntu.png',
//   'images/arduino.png',
//   'images/raspberrypi.png',
//   'images/autoinventor.png',
//   'images/ros.png',
//   'images/opencv.webp'
// ];

// const alts = [
//   'React',
//   'Redux',
//   'JavaScript',
//   'C++',
//   'Python',
//   'Java',
//   'C',
//   'Android Studio XML',
//   'Android Developer',
//   'Qt QtCreator',
//   'QML',
//   'PostgreSQL',
//   'Flask',
//   'SqlAlchemy',
//   'AWS S3',
//   'Docker',
//   'Heroku',
//   'Node.js Node NodeJS',
//   'Websocket',
//   'Sequelize',
//   'ExpressJS Express',
//   'NPM',
//   'PipEnv',
//   'CSS CSS3',
//   'HTML HTML5',
//   'Ubuntu Linux',
//   'Arduino',
//   'Raspberry Pi single board computer SBC',
//   'AutoDesk Inventor 3D',
//   'ROS Robot Operating System',
//   'OpenCV'];

// const skillObjs = [];
// srcs.forEach((el, i) => skillObjs.push({ src: el, alt: alts[i], name: alts[i].replaceAll(' ', '_') }));

export const skillObjs = [
  {
    src: 'images/tech_react.png',
    alt: 'React',
    name: 'React',
    type: 'Library',
    links: ['Tripcamp', 'Dronest', 'Instavibes'],
  },
  {
    src: 'images/redux.png',
    alt: 'Redux',
    name: 'Redux',
    type: 'Library',
    links: ['Tripcamp', 'Dronest', 'Instavibes'],
  },
  {
    src: 'images/js-logo.png',
    alt: 'JavaScript',
    name: 'JavaScript',
    type: 'Language',
    links: ['Tripcamp', 'Dronest', 'Instavibes', 'Forget Me Notes', 'VuIR_Zoom'],
  },
  {
    src: 'images/c__.png',
    alt: 'C++',
    name: 'C++',
    type: 'Language',
    links: ['VuIRHD1', 'VuIR_Zoom', 'Research Articles', 'Others'],
  },
  {
    src: 'images/python.jpg',
    alt: 'Python',
    name: 'Python',
    type: 'Language',
    links: ['VuIRHD1', 'VuIR_Zoom', 'Dronest', 'Instavibes'],
  },
  {
    src: 'images/java.png',
    alt: 'Java',
    name: 'Java',
    type: 'Language',
    links: ['VuIRHD1', 'VuIR_Zoom', 'Tripcamp'],
  },
  {
    src: 'images/c.png',
    alt: 'C',
    name: 'C',
    type: 'Language',
    links: ['VuIRHD1', 'Research Articles'],
  },
  {
    src: 'images/android-studio.png',
    alt: 'Android Studio XML',
    name: 'Android Studio',
    type: 'IDE',
    links: ['VuIRHD1', 'VuIR_Zoom', 'Tripcamp'],
  },
  {
    src: 'images/android-icon.png',
    alt: 'Android Developer',
    name: 'Android Developer',
    type: 'IDE',
    links: ['VuIRHD1', 'VuIR_Zoom', 'Tripcamp'],
  },
  {
    src: 'images/qt.jpg',
    alt: 'Qt QtCreator',
    name: 'Qt/QtCreator',
    type: 'IDE',
    links: ['VuIRHD1', 'VuIR_Zoom', 'Others'],
  },
  {
    src: 'images/qml.png',
    alt: 'QML',
    name: 'QML',
    type: 'Language',
    links: ['VuIRHD1', 'VuIR_Zoom', 'Others'],
  },
  {
    src: 'images/postgresql.png',
    alt: 'PostgreSQL',
    name: 'PostgreSQL',
    type: 'Framework',
    links: ['Tripcamp', 'Dronest', 'Instavibes', 'Forget Me Notes'],
  },
  {
    src: 'images/flask.png',
    alt: 'Flask',
    name: 'Flask',
    type: 'Framework',
    links: ['Dronest', 'Instavibes'],
  },
  {
    src: 'images/flask-sqlalchemy-logo.png',
    alt: 'SqlAlchemy',
    name: 'SqlAlchemy',
    type: 'Library',
    links: ['Dronest', 'Instavibes'],
  },
  {
    src: 'images/aws.png',
    alt: 'AWS S3',
    name: 'AWS_S3',
    type: 'Service',
    links: ['Tripcamp', 'Dronest', 'Instavibes'],
  },
  {
    src: 'images/docker.png',
    alt: 'Docker',
    name: 'Docker',
    type: 'Framework',
    links: ['Dronest', 'Instavibes'],
  },
  {
    src: 'images/heroku.svg',
    alt: 'Heroku',
    name: 'Heroku',
    type: 'Service',
    links: ['Tripcamp', 'Dronest', 'Instavibes', 'Forget Me Notes', 'Dronest Messenger Server'],
  },
  {
    src: 'images/node-js-icon-8.jpg',
    alt: 'Node.js Node NodeJS',
    name: 'NodeJS',
    type: 'Framework',
    links: ['Tripcamp', 'Dronest', 'Instavibes', 'Forget Me Notes', 'Dronest Messenger Server'],
  },
  {
    src: 'images/websocket.jpeg',
    alt: 'Websocket',
    name: 'Websocket',
    type: 'Framework',
    links: ['Dronest', 'Dronest Messenger Server'],
  },
  {
    src: 'images/Sequelize-icon.png',
    alt: 'Sequelize',
    name: 'Sequelize',
    type: 'Library',
    links: ['Tripcamp', 'Dronest', 'Forget Me Notes', 'Dronest Messenger Server'],
  },
  {
    src: 'images/expressjs.png',
    alt: 'ExpressJS Express',
    name: 'Express',
    type: 'Library',
    links: ['Tripcamp', 'Dronest', 'Forget Me Notes', 'Dronest Messenger Server'],
  },
  {
    src: 'images/npm.png',
    alt: 'NPM',
    name: 'NPM',
    type: 'Framework',
    links: ['Tripcamp', 'Dronest', 'Instavibes', 'Forget Me Notes', 'Dronest Messenger Server'],
  },
  {
    src: 'images/pipenv.png',
    alt: 'PipEnv',
    name: 'PipEnv',
    type: 'Framework',
    links: ['Dronest', 'Instavibes'],
  },
  {
    src: 'images/css3.png',
    alt: 'CSS CSS3',
    name: 'CSS/CSS3',
    type: 'Language',
    links: ['Tripcamp', 'Dronest', 'Instavibes', 'Forget Me Notes', 'TonyNgo.me'],
  },
  {
    src: 'images/html.png',
    alt: 'HTML HTML5',
    name: 'HTML/HTML5',
    type: 'Language',
    links: ['Tripcamp', 'Dronest', 'Instavibes', 'Forget Me Notes', 'TonyNgo.me'],
  },
  {
    src: 'images/ubuntu.png',
    alt: 'Ubuntu Linux',
    name: 'Ubuntu/Linux',
    type: "OS",
    links: ['Tripcamp', 'Dronest', 'Instavibes', 'Forget Me Notes', 'VuIR_Zoom', 'VuIRHD1', 'TonyNgo.me', 'Research Articles'],
  },
  {
    src: 'images/github3.png',
    alt: 'Github',
    name: 'Github',
    type: "Service",
    links: ['Tripcamp', 'Dronest', 'Instavibes', 'Forget Me Notes', 'VuIR_Zoom', 'VuIRHD1', 'TonyNgo.me', 'Research Articles'],
  },
  {
    src: 'images/linux.png',
    alt: 'Linux',
    name: 'Linux',
    type: "OS",
    links: ['Tripcamp', 'Dronest', 'Instavibes', 'Forget Me Notes', 'VuIR_Zoom', 'VuIRHD1', 'TonyNgo.me', 'Research Articles', "Others"],
  },
  {
    src: 'images/vscode.jpg',
    alt: 'Visual Studio Code',
    name: 'Visual Studio Code',
    type: "IDE",
    links: ['Tripcamp', 'Dronest', 'Instavibes', 'Forget Me Notes', 'TonyNgo.me'],
  },
  {
    src: 'images/arduino.png',
    alt: 'Arduino',
    name: 'Arduino',
    type: 'Hardware',
    links: ['VuIR_Zoom', 'VuIRHD1', 'Others'],
  },
  {
    src: 'images/raspberrypi.png',
    alt: 'Raspberry Pi single board computer SBC',
    name: 'Raspberry Pi/SBC',
    type: 'Hardware',
    links: ['VuIR_Zoom', 'VuIRHD1', 'Others'],
  },
  {
    src: 'images/autoinventor.png',
    alt: 'AutoDesk Inventor 3D',
    name: 'AutoDesk Inventor/CAD',
    type: 'IDE',
    links: ['VuIR_Zoom', 'VuIRHD1', 'Others'],
  },
  {
    src: 'images/ros.png',
    alt: 'ROS Robot Operating System',
    name: 'ROS Robot Operating System',
    type: 'OS',
    links: ['VuIRHD1', 'Others'],
  },
  {
    src: 'images/opencv.webp',
    alt: 'OpenCV',
    name: 'OpenCV',
    type: 'Library',
    links: ['VuIR_Zoom', 'VuIRHD1', 'Others'],
  },
  {
    src: 'images/mochatest.jpg',
    alt: 'Mocha Test',
    name: 'Mocha Test',
    type: 'Library',
    links: ['Others'],
  },
  {
    src: 'images/chaitest.png',
    alt: 'Chai Test',
    name: 'Chai Test',
    type: 'Library',
    links: ['Others'],
  },
];

const distinctColors = [
  '#800000',
  '#469990',
  '#9A6324',
  '#000075',
  '#e6194B',
  '#f58231',
  '#3cb44b',
  '#42d4f4',
  '#4363d8',
  '#f032e6',
  '#aaffc3',
  '#fabed4',
  '#dcbeff',
  '#000000',
]

export const projectObjs = [
  {
    src: 'images/tripcamp_logo.png',
    alt: 'Tripcamp',
    name: 'Tripcamp',
    type: 'Project',
    skills: [],
  },
  {
    src: 'images/dronest_logo.png',
    alt: 'Dronest',
    name: 'Dronest',
    type: 'Project',
    skills: [],
  },
  {
    src: 'images/dronestms_logo.png',
    alt: 'Dronest Messenger Server',
    name: 'Dronest Messenger Server',
    type: 'Project',
    skills: [],
  },
  {
    src: 'images/instavibes_logo.png',
    alt: 'Instavibes',
    name: 'Instavibes',
    type: 'Project',
    skills: [],
  },
  {
    src: 'images/vuirhd1_logo.png',
    alt: 'VuIR HD',
    name: 'VuIRHD1',
    type: 'Project',
    skills: [],
  },
  {
    src: 'images/forgetmenotes_logo.png',
    alt: 'Forget Me Notes',
    name: 'Forget Me Notes',
    type: 'Project',
    skills: [],
  },
  {
    src: 'images/VuIRZoom_logo.png',
    alt: 'VuIR_Zoom',
    name: 'VuIR_Zoom',
    type: 'Project',
    skills: [],
  },
  {
    src: 'images/tonyngo_me_logo.png',
    alt: 'TonyNgo.me',
    name: 'TonyNgo.me',
    type: 'Project',
    skills: [],
  },
  {
    src: 'images/scientificarticle.png',
    alt: 'Research Articles',
    name: 'Research Articles',
    type: 'Project',
    skills: [],
  },
  {
    src: 'images/others.png',
    alt: 'Others',
    name: 'Others',
    type: 'Project',
    skills: [],
  },
];

const memo = {};

export function addSkillsToProjects() {
  projectObjs.forEach(proj => proj.skills = []);
  skillObjs.forEach(skill => skill.links.forEach(projName => {
    const project = projectObjs.find(prj => prj.name === projName);
    if(project) project.skills.push(skill);
  }));
}

export function getProjectNodes(data) {
  return data.nodes.filter(node => node.group === 'Project').map(node => node.id);
}

export function make_data_nodes(type) {
  if (memo[type]) {
    return memo[type];
  }

  let skillObjsCopy = [...skillObjs];
  let sizes = [35, 70];
  if (type !== 'all') {
    skillObjsCopy = skillObjsCopy.filter(el => el.type === type);
    sizes = [80, 60];
  }

  let nodes = [];
  let edges = [];
  skillObjsCopy.forEach(el => el.links.forEach(e => {
    let i = projectObjs.findIndex(obj => obj.name === e);
    edges.push({
      from: e,
      to: el.name,
      normal: {
        stroke: {
          color: distinctColors[i],
          thickness: "0",
          dash: "5 2",
          lineJoin: "round"
        }
      },
      hovered: {
        stroke: {
          color: distinctColors[i],
          thickness: "2",
          dash: "8 5",
          lineJoin: "round"
        }
      },
      selected: { stroke: `1 ${distinctColors[i]}` }
    })
  }));

  let connectedNodes = new Set();
  edges.forEach(el => {
    connectedNodes.add(el.from);
    connectedNodes.add(el.to);
  });

  const numberOfSkills = skillObjsCopy.length;
  const width = 500, projectWidth = width + 100;
  const height = 200, projectHeight = height + 400;
  const columns = 8, projectColumns = 5;
  const rows = Math.ceil(numberOfSkills / columns);
  const projectRows = Math.ceil(projectObjs.length / projectColumns)
  nodes = skillObjsCopy.map((el, i) => ({
    id: el.name,
    height: sizes[0],
    fill: {
      src: el.src,
    },
    x: Math.floor(width / columns) * (i % columns),
    y: Math.floor(height / rows) * Math.floor(i / columns),
    group: 'Skill',
  }));
  nodes = nodes.concat(
    projectObjs.filter(el => connectedNodes.has(el.name))
      .map((el, i) => ({
        id: el.name,
        height: sizes[1],
        fill: {
          src: el.src,
        },
        x: Math.floor(projectWidth / projectColumns) * (i % projectColumns) - 20,
        y: Math.floor(projectHeight / projectRows) * Math.floor(i / projectColumns) - 80,
        group: 'Project',
      }))
  )

  memo[type] = { nodes, edges };
  return { nodes, edges };
}
export function make_data_nodes_JSON() {
  return JSON.stringify(make_data_nodes());
}
