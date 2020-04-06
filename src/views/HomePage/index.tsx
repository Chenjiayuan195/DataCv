import React, { Component } from 'react';

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
    return <div>demo</div>
  }
}