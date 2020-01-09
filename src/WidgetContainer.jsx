import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Referral from './Referral'

const Campaign = () => <div>This is the campaign page</div>;

const VIP = () => <div>This is the VIP section page</div>;

//const Referral = () => <div>This is the Referral section page</div>;

const WidgetContainer = () => (
  <Switch>
    <Route path='/referral' component={Referral} />
    <Route path='/campaign' component={Campaign} />
    <Route path='/vip' component={VIP} />
    <Route path='/' component={Homepage} />
  </Switch>
);

export default WidgetContainer;
