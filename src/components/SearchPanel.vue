<template>
  <div class="search-panel" id="search-panel">
    <label for="city">城市:</label>
    <select name="city" id="city" v-model="selectedCity" @change="selectTheCity">
      <option value="請選擇">請選擇</option>
      <option v-for="city in cityList" :key="city">{{ city }}</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
#search-panel {
  width: 80%;
  border-radius: 5px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba($color: lightblue, $alpha: 0.6);
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

  label,
  select {
    margin: 5px
  }
}

@media screen and (min-width: 768px) {
  #search-panel {
    width: 30%;
    justify-content: space-evenly;
  }
}

@media screen and (min-width: 1024px) {
  #search-panel {
    width: 20%;
    font-size: 20px;
  }
}
</style>

<script setup>
import { storeToRefs } from 'pinia'
import { useWeatherDataStore } from '../stores/WeatherDataStore'
import { ref } from 'vue'

const weatherDataStore = useWeatherDataStore()
const { cityList } = storeToRefs(weatherDataStore)
console.log(cityList)

const selectedCity = ref('請選擇')
const emits = defineEmits(['sendSelectedCity'])
const selectTheCity = () => {
  emits('sendSelectedCity', selectedCity.value)
  console.log('selectedCity', selectedCity.value)
}
</script>