<template>
    <v-app-bar>
        <v-app-bar-title>text2qrcode</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <a title="GitHub" href="https://github.com/zivenyang/text2qrcode" target="_blank"
                class="d-inline-block mx-2 social-link">
                <v-icon>mdi-github</v-icon>
            </a>
        </v-btn>
    </v-app-bar>

</template>

<style scoped lang="sass">
  .social-link :deep(.v-icon)
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
    text-decoration: none
    transition: .2s ease-in-out

    &:hover
      color: rgba(25, 118, 210, 1)
</style>