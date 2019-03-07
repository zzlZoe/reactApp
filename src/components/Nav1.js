import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;


class Nav1 extends Component {
    constructor (props) {
        super (props)
        this.state = {
            tablist: [
                {
                    name: "个人介绍", 
                    intructor: "的好时机客服和维护"
                },
                {
                    name: "影视介绍", 
                    intructor: "看见的所发生的计划"
                },
                {
                    name: "主要事迹",
                    intructor: "ID舒服ID"
                }
            ]
        }
    }
    render () {
        return (
            <div>
                <Tabs defaultActiveKey="1">
                    {
                        this.state.tablist.map((item,index) => {
                            return (
                                <TabPane tab={item.name} key={index}>{item.intructor}</TabPane>
                            )
                        })
                    }
                </Tabs>
            </div>
        )
    }
}

export default Nav1

