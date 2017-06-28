import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import HelloMessage from './hello';

ReactDOM.render(<HelloMessage name="Gene" />, document.getElementById('root'));
registerServiceWorker();
