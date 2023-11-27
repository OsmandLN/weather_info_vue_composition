<template>
  <footer>All rights reserved by Osmand. Background image is made by Aslan Zamanloo on Toptal.</footer>
</template>

<style lang="scss" scoped>
footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: center;
  background-color: rgba($color: lightblue, $alpha: 0.4);
}

@media screen and (min-width: 1024px) {
  footer {
    font-size: 20px;
  }
}
</style>