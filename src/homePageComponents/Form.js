import React from 'react'

class Form extends React.Component {
  render(props) {
    return (
      <div className='form'>
        <form onSubmit={this.props.getWeather} >
          <input type="text" name='city' placeholder='City...' className='city' />
          <input type="text" name='country' placeholder='Country...' className='country' />
          <button className='getWeather-btn'> Get Weather </button>
        </form>
      </div>
    )
  }
}

export default Form