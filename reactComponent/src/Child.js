
import React from 'react'
class Child extends React.Component {
    render() {
      return (
        <div>
          <h5>{this.props.hello}, ➠  左邊顯示 Child 用 props 接收Father傳遞過來的 hello</h5> 
        </div>
      );
    }
  }
  
  export default Child;