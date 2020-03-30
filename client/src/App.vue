<template>
<div id="app">
    <router-link to="/chat"></router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
  }),
};
</script>
