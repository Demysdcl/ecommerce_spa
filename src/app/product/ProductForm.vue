
<script>
import { QModal, QBtn } from 'quasar'
import Product from './Product'

export default {
  data () {
    return {
      product: new Product()
    }
  },
  components: {
    QModal, QBtn
  }
}
</script>

<template lang="html">
  <q-modal ref="basicModal" v-model="open">
    <h4>Cadastrar produto</h4>

    <q-btn color="primary" @click="$refs.basicModal.close()">Fechar</q-btn>
  </q-modal>
</template>
