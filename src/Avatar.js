import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Avatar.css'
import Avatarlist from './Avatarlist';

class Avatar extends Component{

    constructor(){
        super();
        this.state = {
            name: "Welcome to Avatar World" 
        }
    }
    nameChange(){
        this.setState({
            name: "You Just Clicked the button!"
        })
    }

    render(){
            // making an array to store the data
        const Avatarlistarray = [
            {
                id : 1,
                name : "Pankaj Sahu",
                work : "Web Developer"  
            },
            {
                id : 2,
                name : "Ramu Kaka",
                work : "CEO"  
            },
            {
                id : 3,
                name : "Gabbar",
                work : "Frontend"  
            },
            {
                id : 4,
                name : "Hrithik",
                work : "Backend"  
            }
        ]

        const Avatarcards = Avatarlistarray.map( (avatarcards, index) =>{
            return <Avatarlist key={index} id={Avatarlistarray[index].id} 
                                name={Avatarlistarray[index].name}
                                work={Avatarlistarray[index].work}/>
        })

        return ( 
            <div className="mainpage">
                <h1> { this.state.name } </h1>
                <div>{Avatarcards}</div>
                <button onClick= {()=> this.nameChange() } > Do it !</button>
            </div>
            )
    }
}

export default Avatar;