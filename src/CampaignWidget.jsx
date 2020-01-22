import React, { Component } from 'react';
import { Form, Container } from 'react-bootstrap';
import Select from './Select';
import TextArea from './TextArea';

class CampaignWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creativeLayoutDropDown: 'icon',
      campaignGridLayoutDropDown: '1',
      lastCampaignLayoutDropDown: 'streched',
      loginPromptDropDown: 'true',
      restrictedCampaignsText: 'null'
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({ [name]: value });  
  }

  render() {
    let restrictedCampaignsArray = this.state.restrictedCampaignsText.split(' ').join(',');
    return (
      <Container>
        <div className='swell-campaigns'>
          <h1>Campaigns Widget Creator</h1>
          <Form>
            <Select
              title='Creative Layout'
              name='creativeLayoutDropDown'
              handleChange={this.handleInput}
              options={['icon', 'backgroung_image']}
              value={this.state.creativeLayoutDropDown}
            />
            <Select
              title='Campaign Grid Layout'
              name='campaignGridLayoutDropDown'
              handleChange={this.handleInput}
              options={['1', '2', '3']}
              value={this.state.campaignGridLayoutDropDown}
            />
            <Select
              title='Last Campaign Layout'
              name='lastCampaignLayoutDropDown'
              handleChange={this.handleInput}
              options={['streched', 'null']}
              value={this.state.lastCampaignLayoutDropDown}
            />
            <Select
              title='Login Prompt'
              name='loginPromptDropDown'
              handleChange={this.handleInput}
              options={['true', 'false']}
              value={this.state.loginPromptDropDown}
            />
            <TextArea
              title='Restricted Campaigns'
              rows='1'
              name='restrictedCampaignsText'
              value={this.state.restrictedCampaignsText}
              handleChange={this.handleInput}
            />
          </Form>
          <hr />

          <p style={{ textAlign: 'center' }}>
            <b>Copy your referral widget code below:</b>
          </p>

          <pre>
            <code>
              {`       
            <div class='swell-campaigns'
                data-swell-creative-layout="${this.state.creativeLayoutDropDown}"
                data-swell-campaign-grid-layout="${this.state.campaignGridLayoutDropDown}"
                data-swell-last-campaign-layout="${this.state.lastCampaignLayoutDropDown}"
                data-swell-login-prompt="${this.state.loginPromptDropDown}"
                data-swell-restricted-campaigns="${restrictedCampaignsArray}"
            ></div>
            `}
            </code>
          </pre>
        </div>
      </Container>
    );
  }
}

export default CampaignWidget;
