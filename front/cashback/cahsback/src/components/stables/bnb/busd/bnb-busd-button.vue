<template>
<div class="bnb-busd-button">
  <q-btn
    label="BUSD"
    :disable="dbWallet && dbWallet.bnb_busd_approved"
    :color="dbWallet && dbWallet.bnb_busd_approved ? 'positive' : ''"
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
import { mapState } from 'vuex'

export default {
  name: 'bnb-busd-button',
  computed: {
    ...mapState('wallet', ['dbWallet'])
  },
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
