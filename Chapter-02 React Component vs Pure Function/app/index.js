import React from 'react';
import ReactDOM from 'react-dom';

function  App (props){
console.log(props);
    //render(){
        return (
        <div onClick={()=>props.fnRef('I am called here!!!')}>Hello ReactJS 16.8</div>
        );

   // }
}
class App2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            someValueToTriggerEvents: false,
        }
        
    }
    changeMyVal(){
        this.setState({someValueToTriggerEvents:!this.state.someValueToTriggerEvents});
    }
    
    render() {
     const {someValueToTriggerEvents} = this.state;
     const {somePorpVal, somePorpVal2} = this.props;
        return (
        <div onClick={()=> this.changeMyVal()}>
          Hello World! {someValueToTriggerEvents ? somePorpVal : somePorpVal2}
        </div>
      )
    }
  }
let rootElement = document.getElementById('app');
ReactDOM.render(<App2 somePorpVal = 'xyz' somePorpVal2 = 'xyz2' asd="aa" fnRef={abc}/>, rootElement);
function abc(){
console.log('fdfdfdf');
}


