<script>

import {
  QLayout,
  QSideLink,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain
} from 'quasar'

import router from './router'

export default {
  name: 'index',
  components: {
    QLayout,
    QSideLink,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain
  },
  data () {
    return {
      routes: router.routes
    }
  }
}
</script>

<template>
  <q-layout
    ref="layout"
    view="lHh Lpr fff"
    :left-class="{'bg-grey-2': true}"
  >
    <q-toolbar slot="header" class="glossy">
      <q-btn
        flat
        @click="$refs.layout.toggleLeft()"
      >
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title>
        E-Commerce
      </q-toolbar-title>
    </q-toolbar>

    <div slot="left">

      <q-list no-border link inset-delimiter>
        <q-list-header>Menu</q-list-header>

        <q-side-link item to="/">
          <q-item-side icon="credit_card" />
          <q-item-main label="Lista de Produtos"/>
        </q-side-link>

      </q-list>
    </div>

    <div id="q-app">
      <router-view />
    </div>

  </q-layout>
</template>
