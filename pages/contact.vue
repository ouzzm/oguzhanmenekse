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
          <v-col class="mb-6" sm="4" md="4" lg="4" xl="4">
            <v-slide-x-transition>
              <v-card
                v-show="leftSlideImage"
                class="rounded-sm rounded .rounded-lg rounded-xl"
                width="100%"
                height="100%"
              >
                <v-img
                  lazy-src="/contact_dialog.jpg"
                  src="/contact_dialog.jpg"
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
                  &nbsp; İletişim
                </v-card-title>
                <v-card-text class="pb-0" style="color: #141414">
                  <p class="mb-2">
                    Benimle aşağıdaki form aracılığı ile iletişime geçebilir,
                    sosyal medya hesaplarım üzerinden takip edebilirsiniz.
                  </p>
                  <v-row>
                    <v-col sm="12" md="12" lg="12" xl="12">
                      <v-form ref="form" v-model="validation" lazy-validation>
                        <v-text-field
                          v-model="name"
                          :rules="[rules.name]"
                          label="Adınız"
                          color="#fe371c"
                          prepend-inner-icon="mdi-account"
                          outlined
                        />
                        <v-text-field
                          v-model="email"
                          :rules="[rules.email]"
                          label="E-mail"
                          color="#fe371c"
                          prepend-inner-icon="mdi-email"
                          outlined
                        />
                        <v-textarea
                          v-model="message"
                          :rules="[rules.message]"
                          label="Mesajınız"
                          color="#fe371c"
                          prepend-inner-icon="mdi-message"
                          outlined
                        />
                        <v-btn
                          color="#fe371c"
                          dark
                          block
                          rounded
                          x-large
                          @click="Send"
                        >
                          <v-icon left>mdi-send</v-icon>
                          GÖNDER
                        </v-btn>
                      </v-form>
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
  data() {
    return {
      leftSlideImage: false,
      leftSlideSocial: false,
      rightSlide: false,
      validation: false,
      name: '',
      email: '',
      message: '',
      rules: {
        name: (value) => !!value || 'Adınız gereklidir',
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Geçersiz E-mail adresi'
        },
        message: (value) => !!value || 'Mesajınız gereklidir',
      },
    }
  },
  computed: {
    Dialog: {
      get() {
        return this.$store.getters['contact/GET_DIALOG']
      },
      set(value) {
        this.$store.commit('contact/SET_DIALOG', value)
      },
    },
  },
  watch: {
    Dialog(value) {
      if (!value) {
        this.validation = false
      }
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
    Send() {
      this.$refs.form.validate()
      if (this.validation) {
      }
    },
  },
  head() {
    return {
      title: 'Oğuzhan MENEKŞE | Fullstack Developer - İletişim',
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
