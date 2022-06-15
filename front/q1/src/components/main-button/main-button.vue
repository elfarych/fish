<template>
<div>
  <q-btn
    :label="btnLabel"
    :loading="loading"
    color="primary"
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
      if (this.wallet.address) return 'Play'

      return 'Connect wallet'
    }
  },
  data () {
    return {
      loading: false,
      dialog: true
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
