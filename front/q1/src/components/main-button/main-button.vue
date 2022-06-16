<template>
<div>

  <q-btn
    :label="btnLabel"
    :loading="loading"
    color="accent"
    style="border-radius: 8px"
    :style="btnStyle"
    icon-right="redeem"
    class="main-button q-pa-sm shadow-10"
    @click="btnHandler"
  />

  <q-dialog v-model="dialog" persistent>
    <game-card  />
  </q-dialog>
</div>
</template>

<script>
import methodsMixin from './methods'
import { mapState } from 'vuex'
import GameCard from 'components/game-card'

export default {
  name: 'main-button',
  components: { GameCard },
  mixins: [methodsMixin],
  computed: {
    ...mapState('wallet', ['wallet', 'appStage']),
    btnLabel () {
      if (this.wallet.address) return 'Open box'

      return 'Get your cryptobox'
    }
  },
  data () {
    return {
      loading: false,
      dialog: false,
      btnStyle: { opacity: 0, transition: '0.5s all' }
    }
  },
  methods: {

  },
  created () {
    setTimeout(() => {
      this.btnStyle.opacity = 1
    }, 2500)
  }
}
</script>

<style lang="sass">
.main-button
  position: fixed
  top: 82px
  left: 37px
  z-index: 10000

@media screen and (max-width: 700px)
  .main-button
    position: fixed
    top: 90px
    left: 25px
    z-index: 10000
</style>
