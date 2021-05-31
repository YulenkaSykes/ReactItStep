import React, { Component } from 'react';
import Result from './Result';

class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            calculated: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleClick(){
            console.table(this.state);
            this.setState({calculated: true})
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        const {calculated, n1, n2, opr} = this.state;
    
        return (
            <div>
            <div class="wrapper">
                <input onChange={this.handleChange} type="number" name="n1"/>
                <input onChange={this.handleChange} name="opr"/>
                <input onChange={this.handleChange} type="number" name="n2"/>
                <button onClick={this.handleClick}>Click</button>
            </div>
            {calculated && <Result n1={+n1} n2={+n2} opr={opr}/>}
            </div>
        );
    }
}

export default Calculator;