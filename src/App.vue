<template>
  <v-app id="app" dark>
    <v-container fluid grid-list-sm>
      <v-layout row>
        <v-layout column>
          <v-flex d-flex xs6 sm6 md6>
          <v-card>
            <router-view class="view one" name="StopWatch"></router-view>
          </v-card>
          </v-flex>

          <v-flex d-flex xs6 sm6 md6>
          <v-card>
             <router-view class="view two" name="Vocab"></router-view>
          </v-card>
          </v-flex>
        </v-layout>

          <v-flex d-flex xs6 sm6 md6>
          <v-card>
             <router-view class="view three" name="Note"></router-view>
          </v-card>
          </v-flex>

      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
