import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './App.jsx';
// import {store} from './store/store.js';
// import {store} from './store/storeWithLogger.js';
import {store} from './store/storeWithCustom.js';


createRoot (document.getElementById ('root')).render (
  <Provider store={store}>
    <App />
  </Provider>
);



