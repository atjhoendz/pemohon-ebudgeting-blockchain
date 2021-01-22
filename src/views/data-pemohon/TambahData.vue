<template>
  <card-form title="Form Input Data Pemohon">
    <CRow>
      <CCol col="12">
        <CSelect
          label="Kategori Pemohon"
          placeholder="Pilih kategori pemohon"
        ></CSelect>
      </CCol>
      <CCol col="12">
        <CSelect label="Golongan" placeholder="Pilih golongan"></CSelect>
      </CCol>
      <CCol col="12">
        <CSelect label="Jabatan" placeholder="Pilih jabatan"></CSelect>
      </CCol>
      <CCol col="12">
        <CInput label="NIP" placeholder="Masukkan NIP"></CInput>
      </CCol>
      <CCol col="12">
        <CInput
          label="Nama Pemohon"
          placeholder="Masukkan nama pemohon"
        ></CInput>
      </CCol>
      <CCol col="12">
        <CSelect label="Lembaga" placeholder="Pilih lembaga"></CSelect>
      </CCol>
      <CCol col="12">
        <CInput
          label="Maksud Perjalanan Dinas"
          placeholder="Masukkan maksud perjalanan dinas"
        ></CInput>
      </CCol>
      <CCol col="12">
        <CInput label="Asal" placeholder="Masukkan asal"></CInput>
      </CCol>
      <CCol col="12">
        <CInput label="Tujuan" placeholder="Masukkan tujuan"></CInput>
      </CCol>
      <CCol col="12">
        <CInput label="Lama" placeholder="Masukkan lama"></CInput>
      </CCol>
      <CCol col="12">
        <CInput label="Username" placeholder="Masukkan username"></CInput>
      </CCol>
      <CCol col="12">
        <CInput label="Password" placeholder="Masukkan password"></CInput>
      </CCol>
    </CRow>
    <CButton color="primary"> Simpan </CButton>
  </card-form>
</template>

<script>
import CardForm from "../../components/CardForm.vue";
export default {
  name: "TambahDataPemohon",
  components: { CardForm },
};
</script>

<style></style>
