<script>
import ProductForm from './ProductForm'
import moment from 'moment'
import { QLayout, QRadio, QField, QCard, QDataTable, QCardSeparator,
  QCardMain, QCardMedia, QCardTitle } from 'quasar'
import ProductService from './ProductService'
export default {
  data () {
    return {
      products: [],
      filter: ''
    }
  },

  components: {
    QField, QDataTable, QRadio, QLayout, QCardMedia, QCardSeparator, QCardMain, QCardTitle, QCard, ProductForm
  },

  computed: {
    filtedList () {
      if (this.filter) {
        return this.products.filter(prod => prod.origin === this.filter)
      }
      return this.products
    }
  },

  created () {
    this.prodService = new ProductService()
    this.prodService.findAll().then(resp => {
      this.products = resp
    })
  },

  methods: {
    formatedDate (millis) {
      let date = new Date(millis)
      return moment(date).format('DD/MM/YYYY')
    }
  }
}
</script>

<template>
  <q-layout>
    <br/>
    <q-radio v-model="filter" val='' label="Todos"  />
    <q-radio v-model="filter" val="Nacional" label="Nacional" />
    <q-radio v-model="filter" val="Importado" label="Importado" />
    <br/>
    <br/>
    <div class="row">
      <div class="col-3" v-for="prod in filtedList">
        <q-card>
          <q-card-media>
            <img :src="prod.image" overlay-positon="full">
          </q-card-media>
          <q-card-separator />
          <q-card-main>
            <p>
              Descrição: {{ prod.description }}
              <br />
              Preço R$:  {{ prod.price.toFixed(2) }}
              <br />
              Categoria: {{ prod.category.description }}
              <br />
              Origem:    {{ prod.origin }}
              <br />
              Preço $:   {{ prod.priceUS.toFixed(2) }}
              <br />
              Data da Venda:   {{ formatedDate(prod.purchaseDate) }}
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
