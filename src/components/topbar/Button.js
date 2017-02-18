import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='topbutton' onClick={this.props.changeView}>
        {this.props.name}
      </div>
    );
  }
}

export default Button;
