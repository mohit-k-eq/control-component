import React, { Component } from 'react'

export default class Geust extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.Age}</h1>
            </div>
        )
    }
}

//Context api

import React, { Component } from 'react'

export default class Geust extends Component {
    render() {
        return (
            <div>
                <h3>Guest Commponent</h3>
        <h4>{this.props.nm}   </h4>
            </div>
        )
    }
}

import React, { Component } from 'react'
import {MyContext} from './App'
export default class Geust extends Component {
    render() {
        return (
            <div>
                <h3>Guest Component</h3>
                <MyContext.Consumer>
        {({data, handleClick}) => (
            <div>
                <h4>
                     Name: {data.name} Value: {data.value}
                     
                </h4>
                <button onClick={handleClick}>Change Value</button>
                </div>
                )}
                </MyContext.Consumer>
            </div>
        )
    }
}

