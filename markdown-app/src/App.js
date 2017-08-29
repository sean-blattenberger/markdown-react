import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import marked from 'marked';

class Preview extends React.Component {
  render() {
    return (
      <div className='inner-container' id='preview'>
        <span className='title'></span><span id='output' dangerouslySetInnerHTML={{ __html: marked(this.props.input) }}></span>
      </div>
    );
  }

}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { markdownInput: 'Preview Markdown Here' }
  }
  updateInput(event) {
    this.setState({ markdownInput: event.target.value || '*Enter* **your** text ~~here~~...' });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="outer-container">
            <div className="inner-container">
              <textarea rows="22" id='input' spellCheck='false' placeholder='*Enter* **your** text ~~here~~...' onChange={this.updateInput.bind(this)} />
            </div>
            <Preview input={this.state.markdownInput} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
