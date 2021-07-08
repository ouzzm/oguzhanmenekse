<template>
  <v-slide-x-reverse-transition>
    <v-card
      v-show="slide"
      class="rounded-sm rounded .rounded-lg rounded-xl"
      elevation="24"
      to="/contact"
      height="100%"
    >
      <v-img
        lazy-src="/contact.jpg"
        src="/contact.jpg"
        class="align-end fill-height"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      >
        <v-card-title class="white--text font-weight-thin display-2">
          İletişim
        </v-card-title>
      </v-img>
    </v-card>
  </v-slide-x-reverse-transition>
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
    }, 800)
  },
}
</script>

<style></style>
