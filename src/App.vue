<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<style lang="scss">
html, #app {
  min-height:100%;
  position:relative;
  text-align: center;
  color: #373737;
  background-color: #F4F4F4;
  font-family: 'Work Sans', sans-serif;
  font-size: 16px;
}
body {
  height:100%;
}
</style>
