<template>
  <div class="weather-card" id="weather-card">
    <span class="city-name">臺南市</span>
    <span class="weather-status">多雲時晴</span>
    <span class="temperature">25 &#8451;</span>
    <span class="humidity">50 %</span>
  </div>
  <div class="weather-card" id="weather-card">
    <span class="city-name">臺南市</span>
    <span class="weather-status">多雲時晴</span>
    <span class="temperature">25 &#8451;</span>
    <span class="humidity">50 %</span>
  </div>
  <div class="weather-card" id="weather-card">
    <span class="city-name">臺南市</span>
    <span class="weather-status">多雲時晴</span>
    <span class="temperature">25 &#8451;</span>
    <span class="humidity">50 %</span>
  </div>
  <div class="weather-card" id="weather-card">
    <span class="city-name">臺南市</span>
    <span class="weather-status">多雲時晴</span>
    <span class="temperature">25 &#8451;</span>
    <span class="humidity">50 %</span>
  </div>
  <div class="weather-card" id="weather-card">
    <span class="city-name">臺南市</span>
    <span class="weather-status">多雲時晴</span>
    <span class="temperature">25 &#8451;</span>
    <span class="humidity">50 %</span>
  </div>
  <div class="weather-card" id="weather-card">
    <span class="city-name">臺南市</span>
    <span class="weather-status">多雲時晴</span>
    <span class="temperature">25 &#8451;</span>
    <span class="humidity">50 %</span>
  </div>
  <div class="weather-card" id="weather-card">
    <span class="city-name">臺南市</span>
    <span class="weather-status">多雲時晴</span>
    <span class="temperature">25 &#8451;</span>
    <span class="humidity">50 %</span>
  </div>
  <div class="weather-card" id="weather-card">
    <span class="city-name">臺南市</span>
    <span class="weather-status">多雲時晴</span>
    <span class="temperature">25 &#8451;</span>
    <span class="humidity">50 %</span>
  </div>
  <div class="weather-card" id="weather-card">
    <span class="city-name">臺南市</span>
    <span class="weather-status">多雲時晴</span>
    <span class="temperature">25 &#8451;</span>
    <span class="humidity">50 %</span>
  </div>
  <div class="weather-card" id="weather-card">
    <span class="city-name">臺南市</span>
    <span class="weather-status">多雲時晴</span>
    <span class="temperature">25 &#8451;</span>
    <span class="humidity">50 %</span>
  </div>
</template>

<style lang="scss" scoped>
.weather-card {
  width: 90%;
  height: 150px;
  border-radius: 5px;
  background-color: rgba($color: antiquewhite, $alpha: 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

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