
<script>
import { QModal, QBtn } from 'quasar'
import Product from './Product'
export default {
  props: ['product'],
  data () {
    return {
      product: new Product().createProduct()
    }
  },
  components: {
    QModal, QBtn
  }
}
</script>

<template lang="html">
  <q-modal ref="basicModal">
    <h4>Basic Modal</h4>
    <q-btn color="primary" @click="$refs.basicModal.close()">Fechar</q-btn>
  </q-modal>
</template>
