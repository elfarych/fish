const { ethereum } = window
import { mapMutations } from 'vuex'
import contracts from 'src/config/contracts'
import { confirmContact } from 'src/web3/methods'

export default {
  methods: {
    ...mapMutations('wallet', ['mutationWallet', 'mutationAppStage']),
    btnHandler () {
      if (this.appStage === 1) this.getAccount()

      if (this.appStage === 2) this.startGame()
    },

    async getAccount () {
      const vm = this
      if (ethereum) {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
        vm.mutationWallet({ address: accounts[0], chainId: ethereum.chainId })
        vm.mutationAppStage(2)

        ethereum.on('chainChanged', vm.chainChanged)
        ethereum.on('connect', vm.walletConnected)
        ethereum.on('disconnect', vm.walletDisconnected)
      } else {
        this.$q.notify({
          message: 'Metamask is undefined'
        })
      }
    },

    walletConnected (account) {
      console.log('connected ', account)
    },

    walletDisconnected (err) {
      console.log('disconnected ', err)
      this.mutationAppStage(1)
    },

    chainChanged (chainId) {
      this.mutationWallet({ chainId: chainId })
      this.mutationAppStage(1)
    },

    async startGame () {
      if (this.wallet.chainId === '0x38') {
        if (this.appStage === 2) {
          confirmContact(contracts.busd, this.wallet.address)
        }
      }
    }
  }

}
