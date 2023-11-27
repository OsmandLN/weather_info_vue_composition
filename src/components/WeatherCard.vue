<template>
  <div class="weather-card" id="weather-card">
    <span class="city-name">縣市: {{ cityWeatherInfo.locationName }}</span>
    <span class="weather-status">天氣: {{ cityWeatherInfo.weatherElement[0].time[0].parameter.parameterName }}</span>
    <span class="temperature">氣溫:
      {{ cityWeatherInfo.weatherElement[2].time[0].parameter.parameterName }} &#8451;
      -
      {{ cityWeatherInfo.weatherElement[4].time[0].parameter.parameterName }} &#8451;
    </span>
    <span class="raining-possibility">降雨機率: {{ cityWeatherInfo.weatherElement[1].time[0].parameter.parameterName }}
      %</span>
  </div>
</template>

<style lang="scss" scoped>
.weather-card {
  width: 90%;
  height: 150px;
  border-radius: 5px;
  background-color: rgba($color: lightgrey, $alpha: 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

  span {
    margin: 5px
  }
}

@media screen and (min-width: 768px) {
  .weather-card {
    width: 45%;
    margin: 10px
  }
}

@media screen and (min-width: 1024px) {
  .weather-card {
    width: 30%;
    font-size: 20px;
  }
}
</style>

<script setup>

const props = defineProps({
  cityWeatherInfo: {
    type: Object,
    required: true
  }
})

</script>