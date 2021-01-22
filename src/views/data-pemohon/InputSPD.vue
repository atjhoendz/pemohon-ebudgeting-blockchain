<template>
  <card-form title="Form Input No. SPD">
    <CRow>
      <CCol col="12">
        <CInput label="No. SPD" placeholder="Masukkan No. SPD" />
      </CCol>
    </CRow>
    <CButton color="primary">Simpan</CButton>
  </card-form>
</template>

<script>
import CardForm from "../../components/CardForm.vue";
export default {
  name: "InputSPD",
  components: {
    CardForm,
  },
};
</script>

<style></style>
