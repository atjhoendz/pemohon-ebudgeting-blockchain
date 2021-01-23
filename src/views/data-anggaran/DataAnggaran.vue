<template>
  <CRow>
    <CCol sm="12" md="6" lg="5">
      <card-list-data
        title="Data Anggaran"
        :items="itemsAnggaran"
        :fields="fields"
        :showButton="false"
      ></card-list-data>
    </CCol>
  </CRow>
</template>

<script>
import CardListData from "../../components/CardListData.vue";
import { itemsAnggaran } from "../../sample-data/data";

const fields = [
  { key: "no", label: "No.", _style: "width:10px" },
  "nama-lembaga",
  "sisa-anggaran",
];

export default {
  name: "DataAnggaran",
  components: { CardListData },
  data() {
    return {
      itemsAnggaran,
      fields,
    };
  },
};
</script>

<style></style>
