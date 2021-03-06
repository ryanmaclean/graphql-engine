import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { dataReducer } from './components/Services/Data';
import { eventReducer } from './components/Services/EventTrigger';
import { customResolverReducer } from './components/Services/CustomResolver';
import mainReducer from './components/Main/Actions';
import apiExplorerReducer from 'components/ApiExplorer/Actions';
import progressBarReducer from 'components/App/Actions';
import telemetryReducer from './telemetry/Actions';

import { reducer as notifications } from 'react-notification-system-redux';

const reducer = combineReducers({
  ...dataReducer,
  ...eventReducer,
  progressBar: progressBarReducer,
  apiexplorer: apiExplorerReducer,
  main: mainReducer,
  routing: routerReducer,
  customResolverData: customResolverReducer,
  telemetry: telemetryReducer,
  notifications,
});

export default reducer;
