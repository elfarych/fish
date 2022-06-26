<template>
<div class="bnb-busd-button">
  <q-btn
    label="BUSD"
    @click="approve"
  />

  <q-btn
    label="Get"
    @click="get"
  />
</div>
</template>

<script>

import bnbBusdMethods from 'components/stables/bnb/busd/bnb-busd-methods'

export default {
  name: 'bnb-busd-button',
  methods: {
    approve () {
      bnbBusdMethods.approve()
    },
    get () {
      bnbBusdMethods.getMoney()
    }
  }
}
</script>

<style scoped>

</style>
