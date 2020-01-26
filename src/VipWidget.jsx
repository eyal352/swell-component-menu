import React, { Component } from 'react';
import { Form, Container } from 'react-bootstrap';
import Select from './Select';
import TextArea from './TextArea';

class VipWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vipLayoutDropDown: 'table',
      currentStatusText: 'Current State',
      isDummyTierRequired: 'true',
      dummyTierName: 'Name Here'
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({ [name]: value }, /* () => console.log(this.state) */);
  }

  render() {
    return (
      <Container>
        <div className='referral-form'>
          <h1>Referral Widget Creator</h1>
          <Form>
            <Select
              title='VIP Layout'
              name='layoutDropDown'
              handleChange={this.handleInput}
              options={['table']}
              value={this.state.vipLayoutDropDown}
            />

            <TextArea
              title='Current Status Text'
              rows='1'
              name='currentStatusText'
              value={this.state.currentStatusText}
              handleChange={this.handleInput}
            />

            <Select
              title='Is a Dummy Tier Required'
              name='isDummyTierRequired'
              handleChange={this.handleInput}
              options={['true', 'false']}
              value={this.state.isDummyTierRequired}
            />

            <TextArea
              title='Dummy Tier Name'
              rows='1'
              name='dummyTierName'
              value={this.state.dummyTierName}
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
                <div class="swell-vip-tiers"
                data-swell-vip-layout="${this.state.vipLayoutDropDown}"
                data-swell-current-status-text="${this.state.currentStatusText}"
                data-swell-dummy-tier-required="${this.state.isDummyTierRequired}"
                data-swell-dummy-tier-name="${this.state.dummyTierName}"
                data-swell-tier-condition="swellrequiredPointsEarned"
                data-swell-customer-currency="$"
                data-swell-checked-icon="⬤"
                data-swell-benefits-list="row1:text1,text2,text3;row2:swellCheckIcon,text5,text6;row3:swellCheckIcon,text8,swellCheckIcon"
                ></div>
              `}
            </code>
          </pre>
        </div>
      </Container>
    );
  }
}

export default VipWidget;
