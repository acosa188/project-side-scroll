import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import IvaraTheMerchantPage from './pages/ivaraTheMerchant';
import CanadaLivePage from './pages/canadaLive';
import EasyGradingPage from './pages/easyGrading'
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
            <Route exact path="/"  component={App} />
            <Route exact path="/project/IvaraTheMerchant"  component={IvaraTheMerchantPage} />
            <Route exact path="/project/CanadaLive" component={CanadaLivePage} />
            <Route exact path="/project/EasyGrading" component={EasyGradingPage} />
        </div>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
