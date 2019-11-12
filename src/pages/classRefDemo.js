import React from 'react';
import DomRefDemo  from './domRefDemo';

class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      <DomRefDemo ref={this.textInput} />
    );
  }
}

export default AutoFocusTextInput 