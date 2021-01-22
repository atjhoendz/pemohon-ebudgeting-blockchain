<template>
  <CRow>
    <CCol col="12">
      <card-list-data
        title="Data Pemohon"
        routeEndpoint="data-pemohon"
        :items="itemsPemohon"
        :fields="fields"
      ></card-list-data>
    </CCol>
  </CRow>
</template>

<script>
import CardListData from "../../components/CardListData.vue";
import { itemsPemohon } from "../../sample-data/data";

const fields = [
  {
    key: "no",
    label: "No.",
    _style: "width:10px;text-align:center;padding-right:12px!important",
    sorter: false,
  },
  { key: "nama", _style: "text-align:center" },
  { key: "dari-lembaga", _style: "text-align:center" },
  {
    key: "no-spd",
    label: "No. SPD",
    _style: "min-width:100px;text-align:center;padding-right:12px!important",
  },
  { key: "nip", label: "NIP", _style: "text-align:center" },
  "golongan",
  "jabatan",
  {
    key: "bukti-spd",
    label: "Bukti SPD",
    _style: "min-width:120px;text-align:center;padding-right:12px!important",
  },
  {
    key: "status-spd",
    label: "Status SPD",
    _style: "text-align:center",
  },
  {
    key: "status-berkas",
    _style: "min-width:120px;text-align:center;padding-right:12px!important",
  },
  { key: "alasan-ditolak", _style: "text-align:center" },
  {
    key: "proses",
    _style: "width:50px;text-align:center;padding-right:12px!important",
  },
];

export default {
  name: "DataPemohon",
  components: { CardListData },
  data() {
    return {
      itemsPemohon,
      fields,
    };
  },
};
</script>

<style></style>
