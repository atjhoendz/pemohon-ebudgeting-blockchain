<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('dashboard/toggleSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('dashboard/toggleSidebarDesktop')"
    />
    <div class="ml-3 my-auto d-lg-none">
      <span class="h4">Pemohon</span>
    </div>
    <CHeaderNav class="d-md-down-none ml-3">
      <span class="h3 my-auto">Pemohon</span>
    </CHeaderNav>
    <CHeaderNav class="mr-4 ml-auto">
      <TheHeaderDropdownAccnt />
    </CHeaderNav>
    <CSubheader class="px-3">
      <CBreadcrumbRouter class="border-0 mb-0" />
    </CSubheader>
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'

export default {
  name: 'TheHeader',
  components: {
    TheHeaderDropdownAccnt,
  },
}
</script>
