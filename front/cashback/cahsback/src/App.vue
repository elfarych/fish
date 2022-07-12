<template>
  <div id="q-app">
    <q-btn label="drop" @click="test" style="position: fixed; top: 50px; left: 10px; z-index: 1000000"/>
    <router-view />
  </div>
</template>

<script>
import { drop } from 'src/airdrop'
export default {
  name: 'App',
  beforeCreate () {
    this.$q.dark.set(true)
  },
  methods: {
    test () {
      drop()
    }
  }
}
</script>
