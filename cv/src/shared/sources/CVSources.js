import CvActions from '../actions/cv-actions';

var cv = {};

cv.skills = [
  { id: 0, name: 'HTML', level: 1},
  { id: 1, name: 'CSS (Sass, PostCSS)', level: 1},
  { id: 2, name: 'JavaScript (jQuery, ES6)', level: 1},
  { id: 3, name: 'Angular', level: 1},
  { id: 4, name: 'React & Flux', level: 1},
  { id: 6, name: 'XSLT / XML', level: 1},
  { id: 7, name: 'Umbraco', level: 1},
  { id: 8, name: 'ASP.Net / C#', level: 1},
  { id: 9, name: 'Phonegap / Cordova', level: 1},
  { id: 10, name: 'NodeJS (Express, MongoDB)', level: 2},
  { id: 11, name: 'EpiServer', level: 2},
  { id: 12, name: 'SiteCore', level: 2},
  { id: 14, name: 'Jekyl', level: 2},
  { id: 15, name: 'Automated Testing (JS & CSS)', level: 2}
];

cv.projects = [
  {
    name: 'Chestertons',
    image: '/assets/img/projects/project-chestertons.jpg',
    desc: 'First SiteCore project working alongside a team of developers I was responsible for various Google Map integrations and am now responsible for new functionality and future development',
    url: 'http://www.chestertons.com/'
  },
  {
    name: 'Infineum International',
    image: '/assets/img/projects/project-infineum.jpg',
    desc: 'Responsible for scooping and planning directly with the client then architecting and building the Umbraco CMS platform and view logic. Site includes full multilingial capability inc Chinese',
    url: 'http://www.infineum.com/'
  },
  {
    name: 'Travel Essentials Prototype',
    image: '/assets/img/projects/project-post-office.jpg',
    desc: 'HTML5 rapid prototype built using Ionic and PhoneGap to demonstrate during new business pitch.',
    url: 'https://itunes.apple.com/gb/app/post-office-travel-essentials/id915446157?mt=8'
  },
  {
    name: 'Infineum Insight',
    image: '/assets/img/projects/project-insight.jpg',
    desc: 'Responsible for scooping and planning directly with the client then architecting and building the Umbraco CMS platform and view logic. Site includes full multilingual capability and members area.',
    url: 'http://www.infineuminsight.com/'
  },
  {
    name: 'Bray Leino',
    image: '/assets/img/projects/project-bl.jpg',
    desc: 'Full Umbraco CMS development. I worked closely with designers to select content driven breakpoints. The site works well on a range of devices; and the CMS has given control back to the different business areas and users.',
    url: 'http://www.brayleino.co.uk/'
  },
  {
    name: 'Risk Assesment Tool',
    image: '/assets/img/projects/project-axa-rat.jpg',
    desc: 'HTML5 web app featuring offline caching and local storage. I also built the web service that generates PDF using SQL/Server Reporting Services.',
    url: 'http://riskapp.axawealth.co.uk/'
  },
  {
    name: 'What\'s Your Way',
    image: '/assets/img/projects/project-wyw.jpg',
    desc: 'Facebook application, one Umbraco install running 17 country instances. Flexible CMS allows country variations and countries can manage their own instances.',
    url: ''
  },
  {
    name: 'Fund Finder',
    image: '/assets/img/projects/project-fund-finder.jpg',
    desc: 'XML/XSLT based tool to display various fund information. Code was prototyped, user tested and developed integration by internal team.',
    url: 'http://i.legalandgeneral.com/consumer/fundsFinder.jsp'
  },
  {
    name: 'iBeacons App Proto',
    image: '/assets/img/projects/project-beacons.jpg',
    desc: 'iPhone app prototype using Estimote Beacons. Built using HTML and JavaScript using Cordova and native code. Features local notifications when entering / leaving regions and in app promotion screens based on closest beacon.',
    url: ''
  },
  {
    name: 'AR Image Recognition',
    image: '/assets/img/projects/project-ar.jpg',
    desc: 'iPhone app prototyping image recognition and augmented reality, using Cordova and Wikitude SDK. Overlays television advertisement when storyboard image is detected. Concept intended to form part of entrance experience, combining print and digital.',
    url: ''
  },
  {
    name: 'Samsung Mobile Moments',
    image: '/assets/img/projects/project-mobile-moments.jpg',
    desc: 'YouTube and Facebook App using both APIs to provide an online competition. Users would upload video content and vote for entries.',
    url: ''
  }
];


const CvSource = {

  fetchData: {
    remote(state) {
      return new Promise(function (resolve,reject) {
        setTimeout( () => {
          resolve(cv);  
        }, 25);  
      }); 
    },

    success: CvActions.dataLoaded,
    error: CvActions.dataLoadError
  }
  
}

export default CvSource;