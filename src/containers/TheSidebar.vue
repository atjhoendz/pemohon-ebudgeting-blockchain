<template>
  <CSidebar
    fixed
    :minimize="minimize"
    :show="show"
    @update:show="
      value => $store.commit('dashboard/set', ['sidebarShow', value])
    "
  >
    <CSidebarBrand class="d-md-down-none" to="/">
      <img
        src="@/assets/icons/logo_full.svg"
        class="c-sidebar-brand-full"
        alt=""
      />
      <img
        src="@/assets/icons/logo_icon.svg"
        class="c-sidebar-brand-minimized"
        alt=""
      />
    </CSidebarBrand>

    <CRenderFunction flat :content-to-render="$options.nav" />
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="
        $store.commit('dashboard/set', ['sidebarMinimize', !minimize])
      "
    />
  </CSidebar>
</template>

<script>
import nav from './_nav'

export default {
  name: 'TheSidebar',
  nav,
  computed: {
    show() {
      return this.$store.state.dashboard.sidebarShow
    },
    minimize() {
      return this.$store.state.dashboard.sidebarMinimize
    },
  },
}
</script>
