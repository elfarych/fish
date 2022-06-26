function getChainName (id) {
  switch (id) {
    case '0x1':
      return 'Ethereum'

    case '0x38':
      return 'Binance Smart Chain'

    default:
      return 'Chain'
  }
}

function getChainNativeCoin (chainId) {
  switch (chainId) {
    case '0x1':
      return 'ETH'

    case '0x38':
      return 'BNB'

    default:
      return 'Coin'
  }
}

export function mutationWallet (state, data) {
  state.wallet = {
    ...state.wallet,
    ...data
  }
  if (data.chainId) {
    state.wallet.chainName = getChainName(data.chainId)
    state.wallet.coinName = getChainNativeCoin(data.chainId)
  }
}

export function mutationdbWallet (state, data) {
  state.dbWallet = data
}
