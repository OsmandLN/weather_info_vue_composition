import { defineStore } from "pinia"
import axios from "axios"

export const useWeatherDataStore = defineStore('WeatherDataStore', {
  state: () => {
    return {
      locations: [],
      cityList: [],
    }
  },
  getters: {

  },
  actions: {

    fetchWeatherData() {
      const base_URL = 'opendata.cwb.gov.tw/api'
      const authorizationCode = 'CWB-61431FA0-9546-4DA7-A3FF-68D879357C6A'

      axios.get(`https://${base_URL}/v1/rest/datastore/F-C0032-001?Authorization=${authorizationCode}`)
        .then((response) => {
          console.log('locationRecords', response.data.records.location)
          const allLocationData = response.data.records.location
          const citiesData = []
          allLocationData.forEach((location) => {
            citiesData.push(location)
          })
          console.log('citiesData', citiesData)
          this.locations = citiesData

          const cities = citiesData.map(locationData => Object.values(locationData)[0])
          console.log('cities', cities)
          this.cityList = cities
        })
        .catch((error) => {
          console.log('error', error)
        })
    }
  }
})