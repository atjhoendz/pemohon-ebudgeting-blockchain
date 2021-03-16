<template>
  <CRow>
    <CCol col="12">
      <card-list-data
        title="Data Pemohon"
        routeEndpoint="data-pemohon"
        :items="items"
        :fields="fields"
        :isLoading="isLoading"
      ></card-list-data>
    </CCol>
    <toast-msg :listToasts="listToasts" />
  </CRow>
</template>

<script>
import CardListData from '../../components/CardListData.vue'
import ToastMsg from '../../components/ToastMsg'
import fields from './fields'
import { PemohonService } from '../../services/pemohon.service'

export default {
  name: 'DataPemohon',
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
    async getAll() {
      this.isLoading = false

      try {
        const data = await PemohonService.getAll()

        this.items = data.map(item => {
          return {
            key: item.Key,
            ...item.Record,
          }
        })
      } catch (err) {
        const toast = {
          message: 'Terjadi masalah. Data tidak berhasil didapatkan.',
          color: 'danger',
        }
        this.listToasts.push(toast)
      }
      this.isLoading = false
    },
  },
  async mounted() {
    await this.getAll()
  },
}
</script>

<style></style>
