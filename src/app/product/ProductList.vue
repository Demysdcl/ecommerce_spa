<script>
import Product from './Product'
import { QLayout, QField, QCard, QDataTable, QCardSeparator, QCardMain, QCardMedia, QCardTitle } from 'quasar'
import ProductService from './ProductService'
export default {
  data () {
    return {
      product: this.createProduct(),
      products: [],
      filter: ''
    }
  },

  components: {
    QField, QDataTable, QLayout, QCardMedia, QCardSeparator, QCardMain, QCardTitle, QCard
  },

  computed: {
    filtedList () {

    }
  },

  created () {
    this.prodService = new ProductService()
    this.prodService.findAll().then(resp => {
      this.products = resp
      console.log(resp)
    })
  },

  methods: {
    createProduct () {
      return new Product('', '', 0, 0, {}, '', 0)
    },
    formatedDate (millis) {
      return new Date(millis)
    }
  }
}
</script>

<template>
  <q-layout>
    <div class="row">
      <div class="col-3" v-for="prod in products">
        <q-card>
          <q-card-media>
            <img :src="prod.image" overlay-positon="full">
          </q-card-media>
          <q-card-separator />
          <q-card-main>
            <p>
              Descrição: {{ prod.description }}
              <br />
              Preço R$:  {{ prod.price }}
              <br />
              Categoria: {{ prod.category.description }}
              <br />
              Origem:    {{ prod.origin }}
              <br />
              Preço $:   {{ prod.priceUS }}
              <br />
              Data da Venda $:   {{ formatedDate(prod.purchaseDate)|short }}
            </p>
          </q-card-main>
        </q-card>
      </div>
    </div>
  </q-layout>
</template>

<style>

.card-responsive {
  width: 100%;
  height: 100%

}
.div-align {
  vertical-align: center
}
</style>
