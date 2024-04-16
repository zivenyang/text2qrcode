<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>text2qrcode</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <a title="GitHub" href="https://github.com/zivenyang/text2qrcode" target="_blank"
        class="d-inline-block mx-2 social-link">
        <v-icon>mdi-github</v-icon>
      </a>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer app v-model="drawer">
    <v-list dense>
      <v-list-item link to="/" @click="drawer = false">
        <template v-slot:prepend>
          <v-icon>mdi-text</v-icon>
        </template>
        <v-list-item-title>text2qrcode</v-list-item-title>
      </v-list-item>

      <v-list-item link to="/file2qrcode" @click="drawer = false">
        <template v-slot:prepend>
          <v-icon>mdi-file</v-icon>
        </template>
        <v-list-item-title>file2qrcode</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/base642file" @click="drawer = false">
        <template v-slot:prepend>
          <v-icon>mdi-code-braces</v-icon>
        </template>
        <v-list-item-title>base642file</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref<boolean>(false);
</script>

<style scoped lang="sass">
.social-link :deep(.v-icon)
  color: rgba(var(--v-theme-on-background))
  text-decoration: none
  transition: .2s ease-in-out

  &:hover
    color: rgba(25, 118, 210, 1)
</style>
