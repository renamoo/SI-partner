<template>
  <v-container>
    {{msg}}
  </v-container>
</template>

<script>
export default {
  name: 'note',
  data () {
    return {
      msg: 'Welcome to Your Note'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>