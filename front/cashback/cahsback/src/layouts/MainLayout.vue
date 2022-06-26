<template>
  <q-layout view="lHh Lpr lFf">

    <q-header class="bg-dark" id="header">
      <div class="text-right">
        <wallet-btn />
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>

import WalletBtn from 'components/wallet/wallet-btn'
export default {
  name: 'MainLayout',
  components: {
    WalletBtn
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">
#header
  height: 50px !important
</style>
