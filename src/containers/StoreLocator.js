import React, { Component } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import Map from '../components/Map'

class StoreLocator extends Component {

  constructor (props) {
    super(props)

    this.state = {
      currentMap: 'none.png',
    }

    this.shops = [
      {
        'location': 'Prtland',
        'address': '123 Stress',
      }, {
        'location': 'Astoria',
        'address': '123 Astoria',
      }, {
        'location': '',
        'address': '',
      }]
  }

  render () {
    let storeButton = this.shops.map((shop, index) => {

      return (<Button key={index} location={shop.location}/>)

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
