import React, { Component } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import Map from '../components/Map'
import mapChooser from '../mapChooser'

class StoreLocator extends Component {

  constructor (props) {
    super(props)

    this.state = {
      currentMap: 'none.png',
    }

    this.shops = [
      {
        'location': 'portland',
        'address': '123 Stress',
      }, {
        'location': 'astoria',
        'address': '123 Astoria',
      }, {
        'location': '',
        'address': '',
      }]
  }

  chooseMap = (e) => {

    this.setState({
      currentMap: mapChooser(e.target.value)
    })

  }

  render () {
    let storeButton = this.shops.map((shop, index) => {

      return (<Button handleClick={this.chooseMap} key={index} location={shop.location}/>)

    })

    return (
      <div>
        <Header/>
        {storeButton}
        <Map imagename={this.state.currentMap} location={this.props.location}/>
      </div>
    )
  }

}

export default StoreLocator
