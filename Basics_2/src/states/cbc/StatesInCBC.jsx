import { Component } from "react";

class StatesInCBC extends Component{
    state={count:0};//initialize the state

    increment = () => {
        this.setState({ count: this.state.count+1});
    }

    decrement = () => {
        if(this.state.count>0)
         this.setState({count: this.state.count-1});
    }

    reset = () => {
        this.setState({count:0});
    }

    render(){
        return(
            <div>
                <h1>States in Class based Component</h1>
                {/* niche yha we will access the value of count  */}
                <h2>Counter {this.state.count}</h2>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default StatesInCBC;