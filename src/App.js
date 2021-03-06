import React, { Component } from 'react';
import Button from 'antd/lib/button';
import FirstComponent from './components/study/FirstComponent';
import logo from './logo.svg';
import './App.css';
import Counter from './components/study/Counter';
import LeftMenu from './components/study/LeftMenu';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header className="App-header">
            <img src={logo} alt={"logo"} className="App-logo"/> 
          </Header>
          <Layout>
            <Sider width="100" className="Left-sider">
              <LeftMenu/>
            </Sider>
            <Content className="Content-main">
              <Counter/>
            </Content>
            <Sider className="Right-sider">Sider</Sider>
          </Layout>
          <Footer className="App-footer">Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
