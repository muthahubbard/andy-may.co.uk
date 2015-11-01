import CvActions from '../actions/cv-actions';

var skillsData = [
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
  { id: 14, name: 'Jekyl', level: 2}
];

const CvSource = {

  fetchData: {
    remote(state) {
      return new Promise(function (resolve,reject) {
        setTimeout( () => {
          resolve(skillsData);  
        }, 25);  
      }); 
    },

    success: CvActions.dataLoaded,
    error: CvActions.dataLoadError
  }
  
}

export default CvSource;