import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import IvaraTheMerchantPage from './pages/ivaraTheMerchant';
import CanadaLivePage from './pages/canadaLive';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/project/IvaraTheMerchant" component={IvaraTheMerchantPage} />
            <Route exact path="/project/CanadaLive" component={CanadaLivePage} />
        </div>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
