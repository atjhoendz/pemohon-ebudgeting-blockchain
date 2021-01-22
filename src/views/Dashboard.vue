<template>
  <CRow>
    <CCol sm="12" lg="6">
      <CWidgetSimple
        header="Message"
        text="Selamat Datang di Halaman Bagian Umum"
      >
      </CWidgetSimple>
    </CCol>
    <CCol sm="12" lg="3">
      <CWidgetSimple header="Data Pemohon" :text="jumlahDataPemohon">
      </CWidgetSimple>
    </CCol>
  </CRow>
</template>

<script>
import { itemsPemohon } from "../sample-data/data";
export default {
  name: "Dashboard",
  computed: {
    jumlahDataPemohon() {
      return `${itemsPemohon.length}`;
    },
  },
};
</script>
