import React, { Component } from 'react';

class FirstComponent extends Component {
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}


FirstComponent.defaultProps = { 
  name: 'no-name'
}

export default FirstComponent;