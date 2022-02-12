<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {},
  created() {
    this.$store.dispatch('tryLogin')
  },
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
