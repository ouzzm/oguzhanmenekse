<template>
  <v-row class="fill-height">
    <v-col align-self="center" cols="12" sm="12" md="12" lg="12" xl="12">
      <Header />
    </v-col>
    <v-col cols="12" sm="4" md="4" lg="4" xl="4">
      <AboutMe />
    </v-col>
    <v-col cols="12" sm="4" md="4" lg="4" xl="4">
      <Experiences />
    </v-col>
    <v-col cols="12" sm="4" md="4" lg="4" xl="4">
      <Contact />
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {
    Header: () => import('@/components/header'),
    AboutMe: () => import('@/components/aboutme'),
    Contact: () => import('@/components/contact'),
    Experiences: () => import('@/components/experiences'),
  },
  head() {
    return {
      title: 'Oğuzhan MENEKŞE | Fullstack Developer',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Merhaba, ben Oğuzhan MENEKŞE mesleğim ile ilgili edindiğim tecrübeleri ve deneyimleri kısaca özetlediğim kişisel web sitesidir.',
        },
      ],
    }
  },
}
</script>
