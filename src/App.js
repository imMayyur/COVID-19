import React, { Component, Fragment } from 'react';

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'

import coronaImage from './images/image.png'
import { Toolbar, AppBar, Typography } from '@material-ui/core';



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
          <Typography variant="h6">
            <img className={styles.image} alt="COVID-19" src={coronaImage} />
          </Typography>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
        </Toolbar>
      </AppBar>
        <div className={styles.container}>
          <Cards data={data} />
          <Chart data={data} country={country}/>
        </div>
      </Fragment>
    )
  }
  
}

export default App;
