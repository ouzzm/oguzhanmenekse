<template>
  <v-slide-x-transition>
    <v-card
      v-show="slide"
      class="rounded-sm rounded .rounded-lg rounded-xl"
      elevation="24"
      to="/aboutme"
      height="100%"
    >
      <v-img
        lazy-src="/aboutme.jpg"
        src="/aboutme.jpg"
        class="align-end fill-height"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      >
        <v-card-title class="white--text font-weight-thin display-2">
          Hakkımda
        </v-card-title>
      </v-img>
    </v-card>
  </v-slide-x-transition>
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
    }, 400)
  },
}
</script>

<style></style>
