<template>
  <v-slide-y-transition>
    <v-card v-show="slide" flat>
      <v-card-title class="justify-center py-2">
        <span
          v-if="$vuetify.breakpoint.mobile"
          class="font-weight-thin display-3"
        >
          Oğuzhan
        </span>
        <span v-else class="font-weight-thin display-4">Oğuzhan</span>
        <v-img
          lazy-src="/logo.png"
          src="/logo.png"
          class="ma-4"
          max-width="250"
          max-height="250"
          contain
        />
        <span
          v-if="$vuetify.breakpoint.mobile"
          class="font-weight-thin display-3"
        >
          Menekşe
        </span>
        <span v-else class="font-weight-thin display-4">Menekşe</span>
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
