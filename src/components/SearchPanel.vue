<template>
  <div class="search-panel" id="search-panel">
    <label for="city">城市:</label>
    <select name="city" id="city">
      <option value="請選擇">請選擇</option>
      <option value="臺南市">臺南市</option>
      <option value="臺中市">臺中市</option>
      <option value="臺北市">臺北市</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
#search-panel {
  width: 80%;
  position: relative;
  top: 120px;
  border-radius: 5px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba($color: antiquewhite, $alpha: 0.7);

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