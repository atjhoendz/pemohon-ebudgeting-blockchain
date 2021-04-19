<template>
  <div>
    <CDropdown inNav class="c-header-nav-items" placement="bottom">
      <template #toggler-content>
        <span class="h4 d-md-down-none" style="color: #3c4b64">{{
          $store.state.user.currentUser.username || 'username'
        }}</span>
        <span class="h5 d-lg-none" style="color: #3c4b64">{{
          $store.state.user.currentUser.username || 'username'
        }}</span>
      </template>
      <CDropdownItem @click="makeLogout()">
        <CIcon name="cil-lock-locked" /> Logout
      </CDropdownItem>
    </CDropdown>
    <toast-msg :listToasts="listToasts" />
  </div>
</template>

<script>
import ToastMsg from '../components/ToastMsg'
import { AuthService } from '../services/auth.service'

export default {
  name: 'TheHeaderDropdownAccnt',
  components: { ToastMsg },
  data() {
    return {
      listToasts: [],
    }
  },
  methods: {
    async makeLogout() {
      try {
        await AuthService.makeLogout()
      } catch (err) {
        this.listToasts.push({
          message: 'Terjadi masalah. Logout tidak berhasil.',
          color: 'danger',
        })
      }
    },
  },
}
</script>

<style scoped>
.c-icon {
  margin-right: 0.3rem;
}
</style>
