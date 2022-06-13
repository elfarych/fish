<template>
<div>
  <q-btn
    :label="btnLabel"
    :loading="loading"
    color="primary"
    @click="btnHandler"
  />
</div>
</template>

<script>
import methodsMixin from './methods'
import { mapState } from 'vuex'

export default {
  name: 'main-button',
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
      loading: false
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
