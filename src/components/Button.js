import React,{Component} from 'react'

class Button extends Component{

  render() {

    return (<button className='location-button'>{this.props.location || 'All location'}</button>)
  }

}

export default Button;