import React, {Component} from 'react'

class Map extends Component {

  render() {

    return (<div>
      <img src={`images/${this.props.imagename || 'none.png'}`} alt={this.props.location}/>
    </div>)

  }

}

export default Map;