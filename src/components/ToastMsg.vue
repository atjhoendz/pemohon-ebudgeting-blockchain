<template>
  <CToaster :autohide="showTime">
    <template v-for="(toast, i) in listToasts">
      <CToast :key="i" :show="true" header="Information" :color="toast.color">
        {{ toast.message }}
      </CToast>
    </template>
  </CToaster>
</template>

<script>
export default {
  name: 'ToastMsg',
  props: {
    showTime: {
      type: Number,
      default: 5000,
    },
    listToasts: {
      type: Array,
    },
  },
};
</script>

<style></style>
