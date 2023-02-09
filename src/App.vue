<template>
  <header>
    <div class="logos-wrapper">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </div>
    <span>縣市天氣查詢</span>
  </header>
  <SearchPanel @sendSelectedCity="getSelectedCityFromSelect" />
  <div class="card-wrapper">
    <WeatherCard v-for="info in filteredCityInfo" :key="info" :city-weather-info="info" />
  </div>
  <TheFooter />
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba($color: coral, $alpha: 0.5);
  z-index: 999;

  span {
    text-align: center;
    font-size: 36px;
  }

  .logos-wrapper {
    display: flex;
    justify-content: flex-end;


    .logo {
      height: 2em;
      padding: 1em;

      &:hover {
        transform: rotate(360deg);
        transition: 0.4s;
      }
    }
  }
}

.card-wrapper {
  width: 100%;
  position: relative;
  top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 5em;
  margin: 25px 0;
}

@media screen and (min-width: 1024px) {
  header {
    justify-content: flex-start;
  }
}
</style>

<script lang="ts" setup>
import TheFooter from './components/TheFooter.vue'
import SearchPanel from './components/SearchPanel.vue'
import WeatherCard from './components/WeatherCard.vue'
import { storeToRefs } from 'pinia'
import { useWeatherDataStore } from './stores/WeatherDataStore'
import { onMounted, ref, computed } from 'vue'

const weatherDataStore = useWeatherDataStore()

onMounted(() => {
  weatherDataStore.fetchWeatherData()
})

const theCity = ref('請選擇')
// 接收emit過來的值
const getSelectedCityFromSelect = (item) => {
  theCity.value = item
  console.log('item', item)
  console.log('cityValue', theCity.value)
  console.log(typeof theCity.value)
}

const { locations } = storeToRefs(weatherDataStore)
console.log('123', locations)
const filteredCityInfo = computed(() => {
  if (theCity.value === "請選擇") {
    return locations.value
  } else {
    return locations.value.filter((location) => { return location.locationName === theCity.value })
  }
})
</script>

