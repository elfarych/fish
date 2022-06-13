<template>
<div class="absolute-top-right text-center">
  <div v-if="wallet.address" class="top-wallet-info">
    <small class="block">{{ wallet.chainName }}</small>
    <small class="block ellipsis">{{ wallet.address }}</small>
  </div>

</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'top-wallet-info',
  computed: {
    ...mapState('wallet', ['wallet'])
  }
}
</script>

<style lang="sass">
.top-wallet-info
  width: 200px
  border: 1px solid $primary
  border-radius: 8px
  padding: 5px
  margin: 5px
</style>
