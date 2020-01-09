import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import Select from './Select';
import TextArea from './TextArea';
import CheckBox  from './CheckBox';
import { Container } from 'react-bootstrap';

class Referral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleInput: 'Swell Widgets Rule',
      layoutDropDown: 'single_row',
      additionalText: 'Swell Rules. Everyone loves it. duh',
      submitText: 'Submit',
      existingUserSubmitText: 'Submit',
      selectedSocialShareOptions: ['facebook'],
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSocialCheckbox = this.handleSocialCheckbox.bind(this);
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      { [name]: value }
      //() => console.log(this.state)
    );
  }

  handleSocialCheckbox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.selectedSocialShareOptions.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.selectedSocialShareOptions.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.selectedSocialShareOptions, newSelection];
    }

    this.setState({selectedSocialShareOptions: newSelectionArray}
     // () => console.log(this.state)
      );
  }

  copyToClipboard = e => {
    this.textArea.select();
    document.execCommand('copy');
    e.target.focus();
    this.setState({ copySuccess: 'Copied!' });
  };

  render() {
    return (
      <Container>
        <div className='referral-form'>
          <h1>Referral Widget Creator</h1>
          <Form>
            <Select
              title='Email Input and Submit Button Layout'
              name='layoutDropDown'
              handleChange={this.handleInput}
              options={['single_row', 'double_row']}
            />

            <TextArea
              title='Form Title'
              rows='1'
              name='titleInput'
              value={this.state.titleInput}
              handleChange={this.handleInput}
            />

            <TextArea
              title='Form Additional Text'
              rows='3'
              name='additionalText'
              value={this.state.additionalText}
              handleChange={this.handleInput}
            />

            <TextArea
              title='Submit Button Text'
              rows='1'
              name='submitText'
              value={this.state.submitText}
              handleChange={this.handleInput}
            />

            <TextArea
              title='Existing User Submit Button Text'
              rows='1'
              name='existingUserSubmitText'
              value={this.state.existingUserSubmitText}
              handleChange={this.handleInput}
            />

            <CheckBox
              title='Social Share Links'
              name='socialShareOptions'
              handleChange={this.handleSocialCheckbox}
              options={['facebook', 'twitter', 'sms', 'copylink', 'message']}
              selectedOptions={this.state.selectedSocialShareOptions}
            />
          </Form>

          <hr />

          <p style={{ textAlign: 'center' }}>
            <b>Copy your referral widget code below:</b>
          </p>
          <pre>
            <code>
              {`       
       <div class='swell-referral'
            data-swell-referral-form-layout='${this.state.layoutDropDown}'
            data-swell-referral-title="${this.state.titleInput}"
            data-swell-referral-new-usertitle="${this.state.additionalText}"
            data-swell-referral-new-user-placeholder=""
            data-swell-referral-new-user-submit="${this.state.submitText}"
            data-swell-referral-share-links='${this.state.selectedSocialShareOptions}'
            data-swell-referral-exist-user-submit="${this.state.existingUserSubmitText}"
            data-swell-referral-exist-user-placeholder=""
            data-swell-referral-exist-user-title=""
            data-swell-referral-share-links-title=""
            data-swell-referral-popup-copy-link-text=""
            data-swell-referral-popup-thank-title=""
            data-swell-referral-popup-thank-text=""
            data-swell-referral-pre-header=""
            data-swell-referral-desc=""
          ></div>
        `}
            </code>
          </pre>
        </div>
      </Container>
    );
  }
}

export default Referral;