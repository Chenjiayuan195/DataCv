import React, { Component } from 'react';
import './homePage.less'
import { Layout, Menu } from 'antd';

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

interface HomePageValue {
  [propName: string]: any
}
export default class HomePage extends Component<HomePageValue, {}> {
  state = {

  }
  componentDidMount() {
    console.log('did')
  }
  render() {
    return <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <span>Navigation One</span>
                </span>
              }
            >
              <Menu.ItemGroup key="g1" title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="g2" title="Item 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  }
}