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
                  lazy-src="/aboutme_dialog.jpg"
                  src="/aboutme_dialog.jpg"
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
                  &nbsp; Hakkımda
                </v-card-title>
                <v-card-text class="pb-0" style="color: #141414">
                  <p class="mb-4">
                    Merhaba, ben Oğuzhan çocukluğumdan beri teknolojiye
                    meraklıydım, teknoloji ile ilk tanışma anım benden yaşca
                    büyük olan kuzenlerimin Playstation 1 alması ile
                    gerçekleşti, sonrasında emektar Casper marka masaüstü
                    bilgisayarımı aldım ve ilk işim bilgisayar kasasını açmak
                    oldu nasıl çalıştığını merak ediyordum ve evet bilgisayarı
                    bozmuştum. Casper marka emektar bilgisayarımı o kadar çok
                    bozuyordum ki artık nasıl tamir edeceğimi windows(xp) açılış
                    hatalarını nasıl çözeceğimi öğrenmiştim. Bilgisayar
                    donanımına meraklı bir halde lise stajı yapacağım şirkete
                    haftanın beş günü staj için gitmeye başladım bilgi işlem
                    departmanındaydım, stajım bittikten sonra staj gördüğüm
                    şirkete çalışmak için başvuruda bulundum ve işe alındım. İşe
                    başladığımın ilk altı ayı bilgi işlem ekibinde çalıştım
                    sonrasında beklemediğim bir pozisyon değişikliği yaşadım ve
                    yazılım departmanına aktarıldım yazılım ile ilgili çok az
                    bir bilgim varken yazılım geliştiricisi olarak işe başladım
                    ve 2018 yılından beri yazılım geliştiricisi olarak iş
                    hayatıma yeni teknolojiler, yeni diller, yeni sistemler
                    öğrenek devam ediyorum. Daha detaylı bilgiler için Linkedin
                    profilimi inceleyebilir, Instagram adresinden takip
                    edebilirsiniz.
                  </p>
                  <v-chip-group column>
                    <v-chip color="#141414" dark outlined label>
                      <v-icon color="#FE371C" left>mdi-map-marker</v-icon>
                      Bursa
                    </v-chip>
                    <v-chip color="#141414" dark outlined label>
                      <v-icon color="#FE371C" left>mdi-cake-variant</v-icon>
                      10 Kasım 1997
                    </v-chip>
                    <v-chip color="#141414" dark outlined label>
                      <v-icon color="#FE371C" left>mdi-school</v-icon>
                      Mesleki Açıköğretim Lisesi
                    </v-chip>
                    <v-chip color="#141414" dark outlined label>
                      <v-icon color="#FE371C" left>mdi-domino-mask</v-icon>
                      Alaylı Yazılımcı
                    </v-chip>
                    <v-chip color="#141414" dark outlined label>
                      <v-icon color="#FE371C" left>mdi-briefcase</v-icon>
                      Software Developer
                    </v-chip>
                    <v-chip color="#141414" dark outlined label>
                      <v-icon color="#FE371C" left>mdi-chip</v-icon>
                      Teknoloji Meraklısı
                    </v-chip>
                    <v-chip color="#141414" dark outlined label>
                      <v-icon color="#FE371C" left>mdi-gamepad-variant</v-icon>
                      Part-Time Gamer
                    </v-chip>
                    <v-chip color="#141414" dark outlined label>
                      <v-icon color="#FE371C" left>mdi-google-downasaur</v-icon>
                      Biraz Geek
                    </v-chip>
                    <v-chip color="#141414" dark outlined label>
                      <v-icon color="#FE371C" left>mdi-map</v-icon>
                      Hayali Lore Düşkünü
                    </v-chip>
                    <v-chip color="#141414" dark outlined label>
                      <v-icon color="#FE371C" left>mdi-movie-open</v-icon>
                      Film-Dizi-Anime
                    </v-chip>
                  </v-chip-group>
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
    }
  },
  computed: {
    Dialog: {
      get() {
        return this.$store.getters['aboutme/GET_DIALOG']
      },
      set(value) {
        this.$store.commit('aboutme/SET_DIALOG', value)
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
      title: 'Oğuzhan MENEKŞE | Fullstack Developer - Hakkımda',
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
