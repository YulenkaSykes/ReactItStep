import React from 'react';

export default class Resut extends React.Component {
    constructor(props){
        super(props);
        this.state = {active: false}
        this.handleClick=this.handleClick.bind(this)
    }
    
    handleClick(){
        this.setState({active: !this.state.active})
    }

    render(){
        const{active} = this.state;
        const {n1, n2, opr} = this.props;
        const res = { 
        "+": n1 + n2,
        "-": n1 - n2,
        "/": n1 / n2,
        "*": n1 * n2
    }
    if(!active){
        return(
            <div className="wrapp">
                <h1>{n1} {opr} {n2} = {res[opr]}</h1>
                <button  onClick={this.handleClick}>Click</button>
            </div>
        )
    } else {
        let el = [];
        for (let i in res) {
            el.push(<h1>{n1} {i} {n2} = {Math.floor(res[i])}</h1>)
        }
        return(
            <div className="wrapp">
                <h1>{n1} {opr} {n2} = {res[opr]}</h1>
                {el}
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
        
    }
    
}
