import React from 'react'
import { thisExpression } from '@babel/types';

class Container extends React.Component {


    data = [
        { id: 1, text: "text1", number: 1 },
        { id: 2, text: "text2", number: 2 },
        { id: 3, text: "text3", number: 3 },
        { id: 4, text: "text4", number: 4 },
        { id: 5, text: "text5", number: 5 },
        { id: 6, text: "text6", number: 6 }
    ]

    constructor(props) {
        super(props);
        this.state = {
            name: "value"
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log("handleclick", event)
    }

    render() {
        return (
            <div>
                <h3>{this.state.name}</h3>
                <form onSubmit={this.handleClick}>
                    <label> Name</label>
                    <input id="name" onChange={this.handleChange} text="text" />
                    <button type="submit" > Submit</button>
                </form>
            </div>
        )
    }
}

export default Container;