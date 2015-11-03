import alt from '../../alt';
import {createActions} from 'alt/utils/decorators';

@createActions(alt)
class CvActions  {
  constructor() {
    this.generateActions('getData', 'dataLoaded');
  } 
}

export default CvActions;