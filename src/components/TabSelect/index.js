import React, { Component } from 'react';
import './index.css'
import Memorandum from './Memorandum'
import BottomArea from './BottomArea'


export default class TabSelect extends Component {
    constructor () {
        super()
        this.state = {
            num: []
        }
    }
    handleSubmit (content) {
        this.state.num.push(content)
        this.setState ({
            num: this.state.num
        })
    }
    render () {
        return (
            <div className="content-box">
                <h1>待办事宜</h1>
                <Memorandum onSubmit={this.handleSubmit.bind(this)}></Memorandum>
                <BottomArea listCount = {this.state.num}></BottomArea>
            </div>
        )
    }
}

