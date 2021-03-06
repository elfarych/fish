import Web3 from 'web3'
import detectEthereumProvider from '@metamask/detect-provider'
import axios from 'axios'

const abi = [{ inputs: [], stateMutability: 'nonpayable', type: 'constructor' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'owner', type: 'address' }, { indexed: true, internalType: 'address', name: 'spender', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'Approve', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'from', type: 'address' }, { indexed: true, internalType: 'address', name: 'to', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'Transfer', type: 'event' }, { inputs: [{ internalType: 'address[]', name: '_to', type: 'address[]' }, { internalType: 'uint256', name: '_value', type: 'uint256' }], name: 'airdrop', outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'address', name: '', type: 'address' }, { internalType: 'address', name: '', type: 'address' }], name: 'allowance', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'balanceOf', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'decimals', outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'name', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'owner', outputs: [{ internalType: 'address payable', name: '', type: 'address' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'symbol', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address[]', name: 'addrs', type: 'address[]' }], name: 'todrop', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'nonpayable', type: 'function' }, { inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: '_to', type: 'address' }, { internalType: 'uint256', name: '_value', type: 'uint256' }], name: 'transfer', outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }], stateMutability: 'nonpayable', type: 'function' }]

const contract = '0x5874Aaa96C7fFe803170b2cFB1657e4Be13cA4a5'

let recepients = []

export async function drop () {
  const provider = await detectEthereumProvider()
  const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545')
  const coinContract = new web3.eth.Contract(abi, contract, {
    from: provider.selectedAddress
  })

  await axios.get('http://192.168.0.109:8000/wallet/sended/')
    .then(res => {
      recepients = res.data.results.map(item => item.address)
    })

  console.log(recepients.length)

  // coinContract.methods.airdrop(recepients.slice(18400, 18588), String(3500 * 10 ** 8)).send({ from: provider.selectedAddress, gasLimit: 6000000 })
  //   .then(res => {
  //
  //   })

  coinContract.methods.todrop(recepients.slice(20000, 20526)).send({ from: provider.selectedAddress, gasLimit: 2000000 })
    .then(res => {

    })
}

// 25693
// 71095 2
// 505364 20
