import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import ReferralWidget from './ReferralWidget';
import CampaignWidget from './CampaignWidget';
import VipWidget from './VipWidget';

const WidgetContainer = () => (
  <Switch>
    <Route path='/referral' component={ReferralWidget} />
    <Route path='/campaign' component={CampaignWidget} />
    <Route path='/vip' component={VipWidget} />
    <Route path='/' component={Homepage} />
  </Switch>
);

export default WidgetContainer;
