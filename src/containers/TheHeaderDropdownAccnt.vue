<template>
  <CDropdown inNav class="c-header-nav-items" placement="bottom">
    <template #toggler-content>
      <span class="h4 d-md-down-none" style="color: #3c4b64">Armando</span>
      <span class="h5 d-lg-none" style="color: #3c4b64">Armando</span>
    </template>
    <CDropdownItem to="/login">
      <CIcon name="cil-lock-locked" /> Logout
    </CDropdownItem>
  </CDropdown>
</template>

<script>
export default {
  name: "TheHeaderDropdownAccnt",
  data() {
    return {
      itemsCount: 42,
    };
  },
};
</script>

<style scoped>
.c-icon {
  margin-right: 0.3rem;
}
</style>
