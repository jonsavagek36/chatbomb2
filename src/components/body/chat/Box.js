import React, { Component } from 'react';

import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import LiveText from './LiveText';
import SendText from './SendText';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let live = false;
    if (this.props.live_messages.indexOf(this.props.selectedFriend.id) > -1) {
      live = true;
    }
    return (
      <div className='chatbox'>
        <ChatHeader
          selectedFriend={this.props.selectedFriend}
          removeLiveMessage={this.props.removeLiveMessage}
          live={live}
          updateTimer={this.props.updateTimer}
          timer={this.props.timer}
          extendTimer={this.props.extendTimer}
          nukeChat={this.props.nukeChat}
            />
        <ChatBody
          conversationView={this.props.conversationView}
            />
        <LiveText
          liveChat={this.props.liveChat}
            />
        <SendText
          sendMessage={this.props.sendMessage}
          sendLive={this.props.sendLive}
            />
      </div>
    );
  }
}

export default Box;
