import axios from 'axios'

const { ethereum } = window
import Web3 from 'web3'
import server from 'src/config/server'

export async function connectWallet ({ commit, dispatch }) {
  const vm = this
  if (ethereum) {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    if (accounts.length > 0) {
      commit('mutationWallet', { address: accounts[0], chainId: ethereum.chainId })
      ethereum.on('chainChanged', chainChanged)
      dispatch('getWalletFromDB', accounts[0])
      dispatch('getBalance')
    }
  } else {
    vm.$q.notify({
      message: 'Please open this website in metamask app or on your desktop.',
      position: 'top'
    })
  }
}

export async function getWalletFromDB ({ commit, dispatch }, address) {
  try {
    await axios.get(`${server.serverURI}/wallet/`, {
      params: {
        address
      }
    }).then(res => {
      if (!res.data?.results?.length) {
        dispatch('createWallet', address)
      } else {
        commit('mutationdbWallet', res.data.results[0])
      }
    })
  } catch (e) {

  }
}

export async function createWallet ({ commit, dispatch }, address) {
  try {
    await axios.post(`${server.serverURI}/wallet/`, {
      address
    }).then(res => {
      dispatch('getWalletFromDB', address)
    })
  } catch (e) {

  }
}

export async function getBalance ({ commit, state }) {
  const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545')

  web3.eth.getBalance(state.wallet.address).then(rawBalance => {
    const balance = (rawBalance / 1000000000000000000).toFixed(4)
    commit('mutationWallet', {
      balance
    })
  })
}

export function chainChanged ({ commit }, chainId) {
  commit('mutationWallet', { chainId: chainId })
}
