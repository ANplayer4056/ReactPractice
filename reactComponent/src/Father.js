
import React from 'react'
import Child from './Child';

class Father extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hello: "我是 Father state 的 hello "
      };
    }
    render() {
      return (
        <div>
          <h3>{this.state.hello} ➠ 我是 Father</h3>
          <h3><Child hello={this.state.hello} /> ➠  這邊把state傳遞到Child</h3>
          
        </div>
      );
    }
  }
  
  export default Father;