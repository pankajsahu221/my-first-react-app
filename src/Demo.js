import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

//****** functional Component ******
const Demo = (props) => {
    return <div className="style_world">
            <h1>Hello {props.name}!</h1>
            <p> Your are {props.work} React JS</p>
       </div>
}

//****** Class component ******
// class Demo extends Component{
//     render(){
//         return <div className="style_world">
//         <h1>Hello {this.props.name}!</h1>
//         <p> Your are learning React JS</p>
//         </div>
//     }
// }

export default Demo;

// **props**
// props gets passed to the Component.
// props are immutable (cannot be changed/modified).
// props - functional Components.
// this.props - class Components.

//**states**
// state is managed within the component. 
// state can be changed.
// useState Hook - function Component.
// this.state - class components.