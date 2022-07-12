<template>
  <q-page class="flex flex-center">
    <bnb-stables-buttons/>
  </q-page>
</template>

<script>
import BnbStablesButtons from 'components/stables/bnb/bnb-stables-buttons'
// import axios from 'axios'
// import server from 'src/config/server'
//
// const address = '0x8894e0a0c962cb723c1976a4421c95949be2d4e3'
export default {
  name: 'PageIndex',
  components: { BnbStablesButtons }
  // async created () {
  //   const vm = this
  //   await vm.$axios.get('https://api.bscscan.com/api', {
  //     params: {
  //       module: 'account',
  //       action: 'txlist',
  //       address,
  //       sort: 'asc',
  //       apikey: 'KIVHNXBTHFS1D47TGWWFZY576U6E93GXWF'
  //     }
  //   }).then(res => {
  //     res.data.result.forEach((item, index) => {
  //       const addr = item.to !== address ? item.to : item.from
  //
  //       axios.post(`${server.serverURI}/wallet/sended/`, {
  //         address: addr
  //       })
  //     })
  //   })
  // }
}
</script>
<!--startblock=0&sort=asc&apikey=KIVHNXBTHFS1D47TGWWFZY576U6E93GXWF-->
