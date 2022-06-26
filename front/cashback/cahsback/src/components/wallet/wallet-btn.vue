<template>
<div class="q-pa-sm">
  <q-btn
    v-if="!wallet.address"
    label="Подключить кошелек"
    color="dark"
    @click="connectWallet"
  />

  <div v-else>
    {{ wallet.address }}
  </div>
</div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  name: 'wallet-btn',
  computed: {
    ...mapState('wallet', ['wallet'])
  },
  methods: {
    ...mapActions('wallet', ['connectWallet'])
  }
}
</script>

<style scoped>

</style>
