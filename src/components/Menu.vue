<template lang="html">
<div slot="left">
  <!--
    Use <q-side-link> component
    instead of <q-item> for
    internal vue-router navigation
  -->
  <q-list no-border link inset-delimiter>
    <q-list-header>Essential Links</q-list-header>
    <q-item @click="launch('http://quasar-framework.org')">
      <q-item-side icon="school" />
      <q-item-main label="Docs" sublabel="quasar-framework.org" />
    </q-item>
    <q-item @click="launch('http://forum.quasar-framework.org')">
      <q-item-side icon="record_voice_over" />
      <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
    </q-item>
    <q-item @click="launch('https://gitter.im/quasarframework/Lobby')">
      <q-item-side icon="chat" />
      <q-item-main label="Gitter Channel" sublabel="Quasar Lobby" />
    </q-item>
    <q-item @click="launch('https://twitter.com/quasarframework')">
      <q-item-side icon="rss feed" />
      <q-item-main label="Twitter" sublabel="@quasarframework" />
    </q-item>
  </q-list>
</div>
</template>

<script>
import {QList, QListHeader, QItem, QItemSide, QItemMain} from 'quasar'
export default {
  components: {
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain
  }
}
</script>

<style lang="css">
</style>
