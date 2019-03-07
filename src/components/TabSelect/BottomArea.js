import React, { Component } from 'react';
import './BottomArea.css'

export default class BottomArea extends Component {
    constructor () {
        super()
        this.state = {
            num: ''
        }
    }
    static defaultProps = {
        listCount: []
    }
    componentWillReceiveProps (nextProps) {
        nextProps.listCount.map((item, index) => {
            this.setState({
                num: item.num
            })
        })
    }
    render () {
        return (
            <div className="BottomArea">
                <span className="leftShop">剩下{this.state.num}件商品</span>  
                <p className="clearMessage">清除完毕</p>
            </div>
        )
    }
}

