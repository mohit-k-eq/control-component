import React, { Component } from 'react'

export default class App extends Component {
    state = {
        value : "vishu"
    };
    handleChange =  (e)=> {
        console.log(e.target.value)
    }; 
    render() {
        return (
            <div>
                <form>
                    <h2>Controlled by React</h2>
                    <input type="text" value={this.state.value} 
                     onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

//text area

import React, { Component } from 'react'

export default class App extends Component {
    state ={
        value : "hello there, this is text some text"
    };
    handleChange = e => {
        this.setState({ value: e.target.value.substr(0,30) });
    };
    render() {
        return (
            <div>
                <form>
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}


// multiple input element
 import React, { Component } from 'react'

export default class App extends Component {
    state = {
     name : "",
     password : " "
    };
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };
    handleSubmit = e =>{
        console.log(e);
    };
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <lable>
                        name: <input type="text"name="name"   value={this.state.name} 
                        onChange={this.handleChange} />
                    </lable>
                    <br />
                    <br />
                    <lable>
                        password : <input type="text" name="password" value={this.state.password} 
                        onChange={this.handleChange} />
                    </lable> <br /><br />
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}


// uncontroll component REF

import React, { Component } from 'react'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state =  {
            value : ""
        }
        // creating ref
        this.textInput = React.createRef();
    }
    
    handleSubmit = e => {
       e.preventDefault();
       this.setState({value: this.textInput.current.value})
    };
    render() {
        return (
          <React.Fragment>
              <h2>You typed: {this.state.value}</h2>
              <form onSubmit={this.handleSubmit}>
                  Input: <input type="text" ref={this.textInput} />
                  <input type="submit" value="Submit" />
              </form>
          </React.Fragment>
        );
    }
}


// call back ref

import React, { Component } from 'react'

export default class App extends Component {
    constructor (){
        super();
        this.backRef = null;
        this.setbackRef = element =>{
            this.backRef = element;
        };
    }
    componentDidMount = () => {
        if(this.backRef){
            this.backRef.focus();
        }
        
    };
    

    render() {
        return <form>
            Name: <input type="text" />
            <br />
            <br />
            password: <input type="text" ref={this.setbackRef} />
            <br />
            <br />
            Adress: <input type="text" />
        </form>
    }
}



// lifting state up

import React, { Component } from 'react'
import User from "./User";
import Geust from "./Geust";
export default class App extends Component {
    state ={
        name:'mohit',
        Age: 26
    };
    render() {
        return <div>
            <User name={this.state.name} />
            <Geust Age={this.state.Age} />
          </div>
        
    }
 }

// Context API
import React, { Component } from 'react'
import User from "./User";
export default class App extends Component {
    state={
        name:"rahul"
    };
    render() {
        return  <User name={this.state.name}/>;
    }
}

import React, { Component } from 'react'
import User from "./User";
export const MyContext = React.createContext();
export default class App extends Component {
    state={
        name:"mohit",
        value: 10
    };
    handleClickContext = () =>{
        this.setState({value: this.state.value + 10})
    } 
    render() {
        const contextvalue = {
            data: this.state,
            handleClick:this.handleClickContext
        };
        return (
            <MyContext.Provider value={contextvalue}>
                <User />
            </MyContext.Provider>
        )
    }
}
