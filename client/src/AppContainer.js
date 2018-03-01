import { connect } from 'react-redux';
import App from "./App.js"
import {  
  activateGeod,
  closeGeod,
} from './redux';

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({  
  geod: state.geod,
});

const mapDispatchToProps = {  
  activateGeod,
  closeGeod,
};

const AppContainer = connect(  
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer; 