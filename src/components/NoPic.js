import React, { Component } from 'react';

class NoPic extends Component {
    state = {
        counter: 5
    }

    setCounter() {
        if (this.state.counter > 0) {
            this.setState(prevState => ({
                counter: prevState.counter - 1
            }))
        } else {
            this.props.deleteCollection(this.props.id);
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(() => this.setCounter(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render() {
        return (
            <span className="pics__none">No pictures found matching inquiry <em>(This collection will self-delete in {this.state.counter} seconds)</em></span>
        );
    }
}

export default NoPic;