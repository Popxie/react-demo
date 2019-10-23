import React from 'react';
import WelcomeForm  from './form';

class NumberList extends React.Component { 
  render() {
    const numbers = this.props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    )
  }
}

class View extends React.Component {
  state = {
    email: '',
    name: '',
  }
  handleClick = async (email, name) => {
    this.setState({ email })
    this.setState({ name })
  }
  
  render() {
    const numbers = [1, 2, 3, 4, 5];
    return (
      <div>
        <WelcomeForm handleClick={this.handleClick} />
        <NumberList numbers={numbers}/>
      </div>
    )
  }
}

export { View }
