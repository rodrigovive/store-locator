import React,{Component} from 'react'

class Button extends Component{

  render() {

    return (<button value={this.props.location} onClick={this.props.handleClick} className='location-button'>{this.props.location || 'All location'}</button>)
  }

}

export default Button;