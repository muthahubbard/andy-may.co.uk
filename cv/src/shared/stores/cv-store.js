import alt from '../../alt';
import {createStore, bind} from 'alt/utils/decorators'; 
import CvActions from '../actions/cv-actions';
import CvSource from '../sources/CVSources';

@createStore(alt)
class CvStore {
  constructor() {
    this.skills = [];
    this.projects = [];
    this.registerAsync(CvSource);
  }
  
  @bind(CvActions.getData)
  getData() {
    this.getInstance().fetchData();
  }

  @bind(CvActions.dataLoaded)
  dataLoaded(cvData) {
    this.skills = cvData.skills;
    this.projects = cvData.projects;
  }

}

export default CvStore;
