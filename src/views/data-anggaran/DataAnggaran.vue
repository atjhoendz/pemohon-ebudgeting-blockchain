<template>
  <CRow>
    <CCol sm="12" md="6" lg="5">
      <card-list-data
        title="Data Anggaran"
        :items="items"
        :fields="fields"
        :showButton="false"
        :isLoading="isLoading"
        routeEndpoint="data-anggaran"
      ></card-list-data>
    </CCol>
    <toast-msg :listToasts="listToasts" />
  </CRow>
</template>

<script>
import CardListData from '../../components/CardListData.vue'
import { AnggaranService } from '../../services/anggaran.service'
import ToastMsg from '../../components/ToastMsg'

const fields = [
  { key: 'no', label: 'No.', _style: 'width:10px' },
  { key: 'nama_lembaga', label: 'Nama Lembaga' },
  { key: 'sisa_anggaran', label: 'Sisa Anggaran' },
]

export default {
  name: 'DataAnggaran',
  components: { CardListData, ToastMsg },
  data() {
    return {
      items: [],
      fields,
      isLoading: false,
      listToasts: [],
    }
  },
  methods: {
    async getAllData() {
      this.isLoading = true
      try {
        const data = await AnggaranService.getAll()

        this.items = data.map(item => {
          return {
            key: item.Key,
            ...item.Record,
          }
        })
      } catch (err) {
        const toast = {
          message: 'Terjadi masalah. Data anggaran tidak berhasil didapatkan.',
          color: 'danger',
        }
        this.listToasts.push(toast)
      }
      this.isLoading = false
    },
  },
  async mounted() {
    await this.getAllData()
  },
}
</script>

<style></style>
