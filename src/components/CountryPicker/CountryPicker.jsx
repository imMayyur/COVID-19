import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './CountryPicker.module.css'

import { fetchCountries } from '../../api'

const CountryPicker = ({ handleCountryChange }) => {

    const [ fetchedCountries, setFetchedCountires ] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountires(await fetchCountries())
        }

        fetchAPI()
    }, [setFetchedCountires]);
    return(
        
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)} fullWidth style={{color: "white"}}>
                <option value="" style={{color: "black"}}>Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country} style={{color: "black"}}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker