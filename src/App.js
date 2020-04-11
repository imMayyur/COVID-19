import React, { Component, Fragment } from 'react';

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'

import coronaImage from './images/image.png'
import { Toolbar, AppBar, IconButton, Typography, Button, MenuItem, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



class App extends Component{

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData
    })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    this.setState({
      data: fetchedData,
      country: country
    })
  }

  render() {

    const { data, country } = this.state
    return(
      <Fragment>
      <AppBar position="sticky">
        <Toolbar>
          <img className={styles.image} alt="COVID-19" src={coronaImage} />
        </Toolbar>
      </AppBar>
        <div className={styles.container}>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Cards data={data} />
          <Chart data={data} country={country}/>
        </div>
      </Fragment>
    )
  }
  
}

export default App;
