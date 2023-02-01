<template>
  <footer>All rights reserved by Osmand. 2023</footer>
</template>

<style lang="scss" scoped>
footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  text-align: center;
  background-color: rgba($color: coral, $alpha: 0.5);
}

@media screen and (min-width: 1024px) {
  footer {
    font-size: 20px;
  }
}
</style>