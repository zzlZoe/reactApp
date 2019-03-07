import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import Nav1 from './components/Nav1'
import Nav2 from './components/Nav2'
import Nav3 from './components/Nav3'
import Nav4 from './components/Nav4'
import Nav5 from './components/Nav5'
import Nav6 from './components/Nav6'
import Nav7 from './components/Nav7'
import Nav8 from './components/Nav8'

import TabSelect from './components/TabSelect/index'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {
    constructor (props) {
        super (props)
    }
    render () {
        return (
            <Router>
                <div className="App">
                    <Layout>
                    <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px', textAlign: 'center'}}
                    >
                        <Menu.Item>影视明星</Menu.Item>
                    </Menu>
                    </Header>
                    <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        >
                        <SubMenu key="sub1" title={<span><Icon type="user" />明星女</span>}>
                            <Menu.Item key="1"><Link to="/Nav1">赵丽颖</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/TabSelect">杨幂</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/Nav3">迪丽热巴</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/Nav4">刘诗诗</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="laptop" />明星男</span>}>
                            <Menu.Item key="5"><Link to="/Nav5">邓伦</Link></Menu.Item>
                            <Menu.Item key="6"><Link to="/Nav6">肖战</Link></Menu.Item>
                            <Menu.Item key="7"><Link to="/Nav7">徐正溪</Link></Menu.Item>
                            <Menu.Item key="8"><Link to="/Nav8">杨洋</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="notification" />电视剧</span>}>
                            <Menu.Item key="9"><Link to="/Nav9">楚乔传</Link></Menu.Item>
                            <Menu.Item key="10"><Link to="/Nav10">扶摇</Link></Menu.Item>
                            <Menu.Item key="11"><Link to="/Nav11">一千零一夜</Link></Menu.Item>
                            <Menu.Item key="12"><Link to="/Nav12">独孤天下</Link></Menu.Item>
                        </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            <Route path="/nav1" component={ Nav1 }></Route>
                            <Route path="/nav2" component={ Nav2 }></Route>
                            <Route path="/nav3" component={ Nav3 }></Route>
                            <Route path="/nav4" component={ Nav4 }></Route>
                            <Route path="/nav5" component={ Nav5 }></Route>
                            <Route path="/nav6" component={ Nav6 }></Route>
                            <Route path="/nav7" component={ Nav7 }></Route>
                            <Route path="/nav8" component={ Nav8 }></Route>
                            <Route path="/TabSelect" component={ TabSelect }></Route>

                        </Content>
                    </Layout>
                    </Layout>
                </Layout>,
                </div>
            </Router>
        )
    }
}
export default App

