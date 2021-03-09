const srcs = [
  'images/tech_react.png',
  'images/redux.png',
  'images/js-logo.png',
  'images/c__.png',
  'images/python.jpg',
  'images/java.png',
  'images/c.png',
  'images/android-studio.png',
  'images/android-icon.png',
  'images/qt.jpg',
  'images/qml.png',
  'images/postgresql.png',
  'images/flask.png',
  'images/flask-sqlalchemy-logo.png',
  'images/aws.png',
  'images/docker.png',
  'images/heroku.svg',
  'images/node-js-icon-8.jpg',
  'images/websocket.jpeg',
  'images/Sequelize-icon.png',
  'images/expressjs.png',
  'images/npm.png',
  'images/pipenv.png',
  'images/css3.png',
  'images/html.png',
  'images/ubuntu.png',
  'images/arduino.png',
  'images/raspberrypi.png',
  'images/autoinventor.png',
  'images/ros.png',
  'images/opencv.webp'
];

const alts = [
  'React',
  'Redux',
  'JavaScript',
  'C++',
  'Python',
  'Java',
  'C',
  'Android Studio XML',
  'Android Developer',
  'Qt QtCreator',
  'QML',
  'PostgreSQL',
  'Flask',
  'SqlAlchemy',
  'AWS S3',
  'Docker',
  'Heroku',
  'Node.js Node NodeJS',
  'Websocket',
  'Sequelize',
  'ExpressJS Express',
  'NPM',
  'PipEnv',
  'CSS CSS3',
  'HTML HTML5',
  'Ubuntu Linux',
  'Arduino',
  'Raspberry Pi single board computer SBC',
  'AutoDesk Inventor 3D',
  'ROS Robot Operating System',
  'OpenCV'];

const skillObjs = [];
srcs.forEach((el, i) => skillObjs.push({ src: el, alt: alts[i], name: alts[i].replaceAll(' ', '_') }));

const skillObjs2 = [
  {
    src: 'images/tech_react.png',
    alt: 'React',
    name: 'React'
  },
  {
    src: 'images/redux.png',
    alt: 'Redux',
    name: 'Redux'
  },
  {
    src: 'images/js-logo.png',
    alt: 'JavaScript',
    name: 'JavaScript'
  },
  {
    src: 'images/c__.png',
    alt: 'C++',
    name: 'C++'
  },
  {
    src: 'images/python.jpg',
    alt: 'Python',
    name: 'Python'
  },
  {
    src: 'images/java.png',
    alt: 'Java',
    name: 'Java'
  },
  {
    src: 'images/c.png',
    alt: 'C',
    name: 'C'
  },
  {
    src: 'images/android-studio.png',
    alt: 'Android Studio XML',
    name: 'Android_Studio_XML'
  },
  {
    src: 'images/android-icon.png',
    alt: 'Android Developer',
    name: 'Android_Developer'
  },
  {
    src: 'images/qt.jpg',
    alt: 'Qt QtCreator',
    name: 'Qt_QtCreator'
  },
  {
    src: 'images/qml.png',
    alt: 'QML',
    name: 'QML'
  },
  {
    src: 'images/postgresql.png',
    alt: 'PostgreSQL',
    name: 'PostgreSQL'
  },
  {
    src: 'images/flask.png',
    alt: 'Flask',
    name: 'Flask'
  },
  {
    src: 'images/flask-sqlalchemy-logo.png',
    alt: 'SqlAlchemy',
    name: 'SqlAlchemy'
  },
  {
    src: 'images/aws.png',
    alt: 'AWS S3',
    name: 'AWS_S3'
  },
  {
    src: 'images/docker.png',
    alt: 'Docker',
    name: 'Docker'
  },
  {
    src: 'images/heroku.svg',
    alt: 'Heroku',
    name: 'Heroku'
  },
  {
    src: 'images/node-js-icon-8.jpg',
    alt: 'Node.js Node NodeJS',
    name: 'Node.js_Node_NodeJS'
  },
  {
    src: 'images/websocket.jpeg',
    alt: 'Websocket',
    name: 'Websocket'
  },
  {
    src: 'images/Sequelize-icon.png',
    alt: 'Sequelize',
    name: 'Sequelize'
  },
  {
    src: 'images/expressjs.png',
    alt: 'ExpressJS Express',
    name: 'ExpressJS_Express'
  },
  {
    src: 'images/npm.png',
    alt: 'NPM',
    name: 'NPM'
  },
  {
    src: 'images/pipenv.png',
    alt: 'PipEnv',
    name: 'PipEnv'
  },
  {
    src: 'images/css3.png',
    alt: 'CSS CSS3',
    name: 'CSS_CSS3'
  },
  {
    src: 'images/html.png',
    alt: 'HTML HTML5',
    name: 'HTML_HTML5'
  },
  {
    src: 'images/ubuntu.png',
    alt: 'Ubuntu Linux',
    name: 'Ubuntu_Linux'
  },
  {
    src: 'images/arduino.png',
    alt: 'Arduino',
    name: 'Arduino'
  },
  {
    src: 'images/raspberrypi.png',
    alt: 'Raspberry Pi single board computer SBC',
    name: 'Raspberry_Pi_single_board_computer_SBC'
  },
  {
    src: 'images/autoinventor.png',
    alt: 'AutoDesk Inventor 3D',
    name: 'AutoDesk_Inventor_3D'
  },
  {
    src: 'images/ros.png',
    alt: 'ROS Robot Operating System',
    name: 'ROS_Robot_Operating_System'
  },
  {
    src: 'images/opencv.webp',
    alt: 'OpenCV',
    name: 'OpenCV'
  }
]

console.log(skillObjs2);