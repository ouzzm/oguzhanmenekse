<template>
  <v-slide-y-transition>
    <v-card v-show="slide" flat>
      <v-card-title class="justify-center py-2">
        <h1 class="font-weight-thin display-4">Oğuzhan</h1>
        <v-img
          lazy-src="/logo.png"
          src="/logo.png"
          class="ma-4"
          max-width="250"
          max-height="250"
          contain
        />
        <h1 class="font-weight-thin display-4">Menekşe</h1>
      </v-card-title>
      <v-card-subtitle
        class="text-center font-italic font-weight-thin display-2 ma-0 pa-0"
      >
        Fullstack Developer
      </v-card-subtitle>
    </v-card>
  </v-slide-y-transition>
</template>

<script>
export default {
  data() {
    return {
      slide: false,
    }
  },
  created() {
    setTimeout(() => {
      this.slide = true
    }, 200)
  },
}
</script>
