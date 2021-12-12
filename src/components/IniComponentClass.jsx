import { Component } from "react";

export default class IniComponenClass extends Component {
    state = {
        count: 0
    }

    handleOnClick = () => {
        const { count } = this.state

        this.setState({ count: count + 1})
    }

    render() {
    return (
        <>
        <p>Total klik <strong>{this.state.count}</strong></p>
        <button onClick={this.handleOnClick}>Klik</button>
        </>
    )
    }
}

//state adalah data yang hanya ada di class yang di asign