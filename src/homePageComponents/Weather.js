import React from 'react'

class Weather extends React.Component {
  render(props) {
    return (
      <div className='weather'>
        {this.props.city && this.props.country && <p className='location'> <span>Location</span><br/> {this.props.city}, {this.props.country} </p>}
        {this.props.temperature && <p className='temperature'> <span>Temperature</span><br/> {this.props.temperature}˚C </p>}
        {this.props.humidity && <p className='humidity'> <span>Humidity</span><br/> {this.props.humidity} </p>}
        {this.props.description && <p className='condition'> <span>Condition</span><br/> {this.props.description} </p>}
        {this.props.error && <p className='error'>  {this.props.error} </p>}
      </div >
    )
  }
}

export default Weather