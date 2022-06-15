<template>
<div>
  <q-card style="width: 700px; max-width: 100%; background: #3c3c3c" class="q-pb-lg">

    <q-toolbar class="justify-end">
      <q-btn dense flat icon="close" v-close-popup/>
    </q-toolbar>

    <div class="flex justify-center" style="margin-top: -30px">
      <q-img :src="coinImage" width="250px" height="250px" img-class="shadow-3">
        <template v-slot:loading>
          <q-skeleton class="fit"/>
        </template>
      </q-img>
    </div>

    <div style="font-size: 30px; font-weight: 800; line-height: 1" class="text-center">
      You win!
    </div>

    <div v-if="winLoader" style="font-size: 50px; font-weight: 800" class="flex flex-center">
      <q-skeleton height="50px" width="150px"></q-skeleton>
    </div>

    <div v-else style="font-size: 50px; font-weight: 800; line-height: 1" class="text-center text-warning">
      0.0777<span style="font-size: 30px">BNB</span>
    </div>

    <div class="q-mt-lg text-center">
      <q-btn
        style="width: 200px; font-size: 20px"
        label="Claim"
        color="positive"
        text-color="dark"
        class="letter-3 text-bold q-py-sm rounded-borders shadow-2"
      />
    </div>

  </q-card>
</div>
</template>

<script>
import { mapState } from 'vuex'
import bnbImage from 'src/assets/bnb.png'

export default {
  name: 'game-card',
  computed: {
    ...mapState('wallet', ['wallet']),
    coinImage () {
      return bnbImage
    }
  },
  data () {
    return {
      winLoader: true
    }
  },
  created () {
    const vm = this
    setTimeout(() => {
      vm.winLoader = false
    }, 3000)
  }
}
</script>

<style scoped>

</style>
