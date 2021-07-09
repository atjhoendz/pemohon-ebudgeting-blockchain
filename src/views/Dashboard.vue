<template>
  <CRow>
    <CCol sm="12" lg="6">
      <CWidgetSimple header="Message" text="Selamat Datang di Halaman Pemohon">
      </CWidgetSimple>
    </CCol>
    <CCol sm="12" lg="3">
      <CWidgetSimple header="Data Anggaran" :text="jumlahDataAnggaran">
        <CSpinner color="info" v-if="isLoading && !jumlahDataAnggaran" />
      </CWidgetSimple>
    </CCol>
    <CCol sm="12" lg="3">
      <CWidgetSimple header="Data Pemohon" :text="jumlahDataPemohon">
        <CSpinner color="info" v-if="isLoading && !jumlahDataPemohon" />
      </CWidgetSimple>
    </CCol>
    <toast-msg :listToasts="listToasts" />
  </CRow>
</template>

<script>
import { AnggaranService } from '../services/anggaran.service'
import { PemohonService } from '../services/pemohon.service'
import ToastMsg from '../components/ToastMsg'

export default {
  name: 'Dashboard',
  components: {
    ToastMsg,
  },
  data: () => ({
    jumlahDataAnggaran: '',
    jumlahDataPemohon: '',
    isLoading: false,
    listToasts: [],
  }),
  methods: {
    async getCountDataAnggaran() {
      try {
        this.jumlahDataAnggaran = await AnggaranService.getCountData()
      } catch (err) {
        const toast = {
          message:
            'Terjadi masalah. Jumlah data anggaran tidak berhasil didapatkan.',
          color: 'danger',
        }
        this.listToasts.push(toast)
      }
    },
    async getCountDataPemohon() {
      try {
        const currentUserKey = this.$store.state.user.currentUser.sub

        this.jumlahDataPemohon = await PemohonService.getCountData(
          currentUserKey
        )
      } catch (err) {
        const toast = {
          message:
            'Terjadi masalah. Jumlah data pemohon tidak berhasil didapatkan.',
          color: 'danger',
        }
        this.listToasts.push(toast)
      }
    },
    async getDataDashboard() {
      this.isLoading = true
      await this.getCountDataAnggaran()
      await this.getCountDataPemohon()
      this.isLoading = false
    },
  },
  async mounted() {
    await this.getDataDashboard()
  },
}
</script>
