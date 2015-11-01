import alt from '../../alt';
import {createStore, bind} from 'alt/utils/decorators'; 
import CvActions from '../actions/cv-actions';
import CvSource from '../sources/CVSources';

@createStore(alt)
class CvStore {
  constructor() {
    this.name = 'asjoajsoa';
    this.skills = [];
    this.registerAsync(CvSource);
  }
  
  @bind(CvActions.getData)
  getData(name) {
    this.name = name;
    this.getInstance().fetchData();
  }

  @bind(CvActions.dataLoaded)
  dataLoaded(data) {
    this.skills = data;
  }

}

export default CvStore;
