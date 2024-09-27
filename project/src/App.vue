<template>
  <div id="app">
    <router-view></router-view>  <!-- This will render the active route component -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Global Styles */
body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}
</style>
