<template>
  <v-container>
        <v-btn
          @click="model = null"
          small 
        >CLEAR</v-btn>

        <v-autocomplete
          v-model="model"
          :items="items"
          :loading="isLoading"
          :search-input.sync="search"
          color="white"
          hide-no-data
          hide-selected
          item-text="Description"
          item-value="API"
          placeholder="Start typing to Search"
          prepend-icon="mdi-database-search"
          return-object
        ></v-autocomplete>

      <v-expand-transition>
        <v-list v-if="model" class="red lighten-3">
          <v-list-tile
            v-for="(field, i) in fields"
            :key="i"
          >
            <v-list-tile-content>
              <v-list-tile-title v-text="field.value"></v-list-tile-title>
              <v-list-tile-sub-title v-text="field.key"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-expand-transition>
        <v-spacer></v-spacer>
        
          

  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  name: 'hello',
  data () {
    return {
    descriptionLimit: 60,
    entries: [],
    isLoading: false,
    model: null,
    search: null
    }
  },
  computed: {
    fields () {
      if (!this.model) return []

      return Object.keys(this.model).map(key => {
        return {
          key: key,
          value: this.model[key] || 'n/a'
        }
      })
    },
    items () {
      return this.entries.map(entry => {
        const Description = entry.Description.length > this.descriptionLimit
          ? entry.Description.slice(0, this.descriptionLimit) + '...'
          : entry.Description

        return Object.assign({}, entry, { Description })
      })
    }
  },

  watch: {
    search (val) {
      // Items have already been loaded
      if (this.items.length > 0) return

      this.isLoading = true

      // Lazily load input items
      axios.get('https://api.publicapis.org/entries')
        .then(res => {
          const { count, entries } = res.data
          this.count = count
          this.entries = entries
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => (this.isLoading = false))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>