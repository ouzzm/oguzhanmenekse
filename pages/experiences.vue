<template>
  <v-dialog v-model="Dialog" transition="dialog-bottom-transition" fullscreen>
    <v-card>
      <v-toolbar color="#141414" class="mb-2" flat>
        <v-spacer />
        <v-toolbar-items>
          <v-btn x-large text dark @click="Close">
            <v-icon left>mdi-arrow-left</v-icon>
            UZAY İSTASYONUNA GERİ DÖN
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-toolbar-items>
        <v-spacer />
      </v-toolbar>
      <v-card-text>
        <v-row>
          <v-col sm="4" md="4" lg="4" xl="4">
            <v-slide-x-transition>
              <v-card
                v-show="leftSlideImage"
                class="rounded-sm rounded .rounded-lg rounded-xl"
                width="100%"
                height="100%"
              >
                <v-img
                  lazy-src="/experiences_dialog.jpg"
                  src="/experiences_dialog.jpg"
                  width="100%"
                  height="100%"
                />
              </v-card>
            </v-slide-x-transition>
            <v-slide-x-transition>
              <v-card v-show="leftSlideSocial" flat>
                <v-chip-group class="pt-1" column>
                  <v-chip
                    href="https://www.instagram.com/ouzz.m/"
                    target="_blank"
                    color="transparent"
                  >
                    <v-icon color="#FE371C" large> mdi-instagram </v-icon>
                  </v-chip>
                  <v-chip
                    href="https://www.linkedin.com/in/oguzhanmenekse/"
                    target="_blank"
                    color="transparent"
                  >
                    <v-icon color="#FE371C" large> mdi-linkedin </v-icon>
                  </v-chip>
                  <v-chip
                    color="transparent"
                    @click="Copy('menekseoguzhan@gmail.com')"
                  >
                    <v-icon color="#FE371C" large> mdi-gmail </v-icon>
                  </v-chip>
                  <v-chip
                    href="https://github.com/ouzzm"
                    target="_blank"
                    color="transparent"
                  >
                    <v-icon color="#FE371C" large> mdi-github </v-icon>
                  </v-chip>
                </v-chip-group>
              </v-card>
            </v-slide-x-transition>
          </v-col>
          <v-col sm="8" md="8" lg="8" xl="8">
            <v-slide-x-reverse-transition>
              <v-card v-show="rightSlide" flat>
                <v-card-title class="font-weight-light display-2">
                  <v-divider style="border: 2px solid #fe371c" vertical />
                  &nbsp; Deneyimler
                </v-card-title>
                <v-card-text class="pb-0" style="color: #141414">
                  <p class="mb-2">
                    Bugüne kadar ki deneyimlerim kartlar halinde
                    listelenmektedir. Kartların üzerine tıklayarak
                    <b>Wikipedia</b>
                    tarafından oluşturulmuş ayrıntılı bilgilere veya web
                    sitelerine ulaşabilirsiniz.
                  </p>
                  <v-row>
                    <v-col
                      v-for="(item, index) in experiences"
                      :key="index"
                      sm="3"
                      md="3"
                      lg="3"
                      xl="3"
                    >
                      <v-card
                        :href="item.link"
                        target="_blank"
                        elevation="4"
                        shaped
                      >
                        <v-card-subtitle
                          style="color: #141414"
                          class="py-0 my-0 text-center subtitle-1"
                        >
                          {{ item.name }}
                        </v-card-subtitle>
                        <v-card-subtitle class="py-0 my-0 text-center">
                          <v-rating
                            v-model="item.rate"
                            full-icon="mdi-record"
                            empty-icon="mdi-record"
                            background-color="#141414"
                            color="#fe371c"
                            readonly
                            dense
                          />
                        </v-card-subtitle>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-slide-x-reverse-transition>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    leftSlideImage: false,
    leftSlideSocial: false,
    rightSlide: false,
    experiences: [
      {
        name: 'Vue.js',
        rate: 4,
        link: 'https://vuejs.org/',
      },
      {
        name: 'Nuxt.js',
        rate: 4,
        link: 'https://nuxtjs.org/',
      },
      {
        name: 'Vuetify.js',
        rate: 4,
        link: 'https://vuetifyjs.com/en/',
      },
      {
        name: 'C#',
        rate: 3,
        link: 'https://tr.wikipedia.org/wiki/C_Sharp',
      },
      {
        name: 'Html',
        rate: 3,
        link: 'https://tr.wikipedia.org/wiki/HTML',
      },
      {
        name: 'Css',
        rate: 3,
        link: 'https://tr.wikipedia.org/wiki/CSS',
      },
      {
        name: 'Javascript',
        rate: 3,
        link: 'https://tr.wikipedia.org/wiki/JavaScript',
      },
      {
        name: 'Gridsome',
        rate: 1,
        link: 'https://gridsome.org/',
      },
      {
        name: 'Git',
        rate: 3,
        link: 'https://tr.wikipedia.org/wiki/Git_(yaz%C4%B1l%C4%B1m)',
      },
      {
        name: 'Firebase',
        rate: 2,
        link: 'https://firebase.google.com/',
      },
      {
        name: 'Visual Studio',
        rate: 3,
        link: 'https://visualstudio.microsoft.com/tr/',
      },
      {
        name: 'Mssql',
        rate: 4,
        link: 'https://tr.wikipedia.org/wiki/Microsoft_SQL_Server',
      },
      {
        name: 'Mysql',
        rate: 1,
        link: 'https://tr.wikipedia.org/wiki/MySQL',
      },
      {
        name: 'Wordpress',
        rate: 2,
        link: 'https://wordpress.org/',
      },
      {
        name: 'Docker',
        rate: 1,
        link: 'https://www.docker.com/',
      },
      {
        name: 'Microsoft',
        rate: 3,
        link: 'https://www.microsoft.com/tr-tr',
      },
      {
        name: 'Linux',
        rate: 1,
        link: 'https://linux.org.tr/',
      },
      {
        name: 'Google Analytics',
        rate: 2,
        link: 'https://tr.wikipedia.org/wiki/Google_Analytics',
      },
      {
        name: 'Google Ads',
        rate: 1,
        link: 'https://tr.wikipedia.org/wiki/Google_Ads',
      },
      {
        name: 'Photoshop',
        rate: 2,
        link: 'https://tr.wikipedia.org/wiki/Adobe_Photoshop',
      },
    ],
  }),
  computed: {
    Dialog: {
      get() {
        return this.$store.getters['experiences/GET_DIALOG']
      },
      set(value) {
        this.$store.commit('experiences/SET_DIALOG', value)
      },
    },
  },
  created() {
    this.Dialog = true
    setTimeout(() => {
      this.leftSlideImage = true
    }, 200)
    setTimeout(() => {
      this.leftSlideSocial = true
    }, 400)
    setTimeout(() => {
      this.rightSlide = true
    }, 600)
  },
  methods: {
    Close() {
      this.Dialog = false
      this.$router.push({ path: '/' })
    },
    async Copy(value) {
      await navigator.clipboard.writeText(value)
      this.$store.commit('global/SET_SNACKBAR', {
        status: true,
        text: 'Gmail adresimi başarılı bir şekilde kopyaladınız',
        color: 'success',
        top: true,
      })
    },
  },
  head() {
    return {
      title: 'Oğuzhan MENEKŞE | Fullstack Developer - Deneyimler',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Merhaba, Oğuzhan MENEKŞE olarak mesleğim ile ilgili edindiğim tecrübeleri ve deneyimleri kısaca özetlediğim kişisel web sitesidir.',
        },
      ],
    }
  },
}
</script>
<style scoped>
.theme--light.v-chip--active:hover::before,
.theme--light.v-chip--active::before {
  opacity: 0 !important;
}
</style>
