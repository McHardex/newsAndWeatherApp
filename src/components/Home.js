import withAuthorization from './withAuthorization';
import React, { Component } from 'react';
import '../homePageComponents/homePage.css';
import Titles from '../homePageComponents/Titles'
import Form from '../homePageComponents/Form'
import Weather from '../homePageComponents/Weather'
import SportNews from '../homePageComponents/SportNews'
import TechnologyNews from '../homePageComponents/TechnologyNews'
import EntertainmentNews from '../homePageComponents/EntertainmentNews'
import GeneralNews from '../homePageComponents/GeneralNews'

// import * as routes from '../constants/routes';
// import { Link } from 'react-router-dom';

const API_KEY = 'dc73505b300fa3c78d926fcebf4bf8cd';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'general',
      isOpen: false,
      temperature: "",
      city: "",
      country: "",
      humidity: "",
      description: "",
      error: ""
    }
    this.getWeather = this.getWeather.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.gotoPage = this.gotoPage.bind(this);
  }

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  getWeather(e) {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`, {
    })
      .then((result) => {
        return result.json();
      }).then((data) => {
        if (city && country) {
          this.setState({
            isOpen: true,
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
          })
        } else {
          this.setState({
            temperature: "",
            city: "",
            country: "",
            humidity: "",
            description: "",
            error: "Please enter your City and Country"
          })
        }
      })
  }

  gotoPage(event) {
    this.setState({ page: event.target.id })
  }

  render() {
    return (
      <div className='app'>
        {/* <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </div> */}
        <div className='newsDivs'>
          <button className='gen-btn' id='general'  onClick={this.gotoPage}>General</button>
          <button className='sports-btn' id='sports' onClick={this.gotoPage}>Sports</button>
          <button className='ent-btn' id='entertainment' onClick={this.gotoPage}>Entertainment</button>
          <button className='tech-btn' id='technology' onClick={this.gotoPage}>Technology</button>
        </div>
        <div className='splitNews-weather'>
          <div className='weather-position'>
            <button className='weatherTogggle' onClick={this.toggleOpen}>{this.state.isOpen ? 'Hide' : 'Show'} Weather</button>
            {this.state.isOpen && <div className='title-Form'>
              <Titles />
              <div className='weather-content'>
                <Form getWeather={this.getWeather} />
                <Weather city={this.state.city}
                  country={this.state.country}
                  temperature={this.state.temperature}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error} />
              </div>
            </div>}
          </div>

          <div className='newsDiv'>
            {this.state.page === 'sports' && <SportNews />}
            {this.state.page === 'general' && <GeneralNews />}
            {this.state.page === 'technology' && <TechnologyNews />}
            {this.state.page === 'entertainment' && <EntertainmentNews />}
          </div>
        </div>
      </div>

    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);