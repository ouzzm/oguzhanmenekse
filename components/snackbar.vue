<template>
  <v-snackbar
    v-model="Snackbar.status"
    :color="Snackbar.color"
    :timeout="Snackbar.timeout"
    :top="Snackbar.top"
    :bottom="Snackbar.bottom"
    :left="Snackbar.left"
    :right="Snackbar.right"
  >
    {{ Snackbar.text }}
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    Snackbar: {
      get() {
        return this.$store.getters['global/GET_SNACKBAR']
      },
      set(value) {
        this.$store.commit('global/SET_SNACKBAR', value)
      },
    },
  },
}
</script>

<style></style>
