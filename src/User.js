import React, { Component } from 'react'

export default class user extends Component {
    render() {
    return <div>{this.props.name}</div>
    }
}

// context api
import React, { Component } from 'react'
import Guest from "./Geust";
export default class user extends Component {
    render() {
        return (
            <div>
                <h3>User Component</h3>
                <Guest nm={this.props.name} />
            </div>
        );
    }
}
import React, { Component } from 'react'
import Guest from "./Geust";
export default class user extends Component {
    render() {
        return (
            <div>
                <h3>User Component</h3>
                <Guest />
            </div>
        )
    }
}
