import React, { Component } from 'react';

class LiveText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='livetext' id='live'>
        {this.props.liveChat}
      </div>
    );
  }
}

export default LiveText;
