<template>
  <div id="app">
    <div class="col-md-5">
      <SportWidget/>
    </div>
  </div>
</template>

<script>
import SportWidget from './components/SportWidget.vue'

export default {
  name: 'App',
  components: {
    SportWidget,
  },
  mounted() {
    this.$store.dispatch('loadTournaments');
  },
}
</script>

<style>
</style>
