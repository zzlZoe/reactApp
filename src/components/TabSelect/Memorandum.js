import React, { Component } from 'react'
import './inputBox.css'

export default class Memorandum extends Component {
    constructor () {
        super()
        this.state = { value: '', arr: []};
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this)      
        this.modify = this.modify.bind(this)        
    }
    handleChange (event) {
        this.setState({value: event.target.value})
    }
    onSubmit (e) {
        let num = this.state.arr.length + 1;
        this.props.onSubmit({num})

        
        var val = this.state.value;
        this.setState({
            arr: [val, ...this.state.arr],
            value: ''
        })
    }
    deletBtn (index) {
        let arr = [...this.state.arr];
        arr.splice(index, 1)
        this.setState({
            arr
        })
    }

    // 修改input
    modify (index, e) {
        var arrList = this.state.arr;
        arrList[index] = e.target.value;
        this.setState({
            arr: [...arrList]
        })
    }
    render () {
        const arrList = this.state.arr;
        return (
            <div className="InputBox">
                <input className="inputKuang" placeholder="What needs to be done?" type="text" value={this.state.value} onChange={this.handleChange}/>
                <button onClick={this.onSubmit}>点击</button>
                <ul className="selectBox">
                    {
                        arrList.map((item, index) => {
                            return (
                                <li key={index} className="listClass">
                                    <input className="checkBox" type="checkbox"/>
                                    <input className="simpleInput" value={item} onChange={this.modify.bind(this, index)}/>
                                    <span className="deletBtn" onClick={this.deletBtn.bind(this, index)}>X</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}