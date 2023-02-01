<template>
  <header>
    <div class="logos-wrapper">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </div>
    <span>天氣查詢</span>
  </header>
  <SearchPanel />
  <div class="card-wrapper">
    <WeatherCard />
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

<script setup>
import TheFooter from './components/TheFooter.vue'
import SearchPanel from './components/SearchPanel.vue'
import WeatherCard from './components/WeatherCard.vue'
</script>

