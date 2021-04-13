<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="4" class="text-center mb-4">
          <img
            src="@/assets/icons/logo_full_dark.svg"
            height="70px"
            alt="logo"
          />
        </CCol>
      </CRow>
      <CRow class="justify-content-center">
        <CCol md="4">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <p class="text-danger" v-if="message">{{ message }}</p>
                  <CInput
                    placeholder="Username"
                    autocomplete="username"
                    v-model.trim="$v.formData.username.$model"
                    :is-valid="validate('username')"
                    invalid-feedback="Username harus diisi."
                  >
                    <template #prepend-content
                      ><CIcon name="cil-user"
                    /></template>
                  </CInput>
                  <CInput
                    placeholder="Password"
                    type="password"
                    autocomplete="curent-password"
                    v-model.trim="$v.formData.password.$model"
                    :is-valid="validate('password')"
                    invalid-feedback="Password harus diisi."
                    @keyup.enter="makeLogin"
                  >
                    <template #prepend-content
                      ><CIcon name="cil-lock-locked"
                    /></template>
                  </CInput>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CSpinner color="info" v-if="isLoading" />
                      <CButton
                        color="primary"
                        class="px-4"
                        v-else
                        @click="makeLogin"
                        >Login</CButton
                      >
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import { loginValidations } from '../../validations/validationRules'
import { AuthService } from '../../services/auth.service'

export default {
  name: 'LoginPage',
  data: () => ({
    formData: {
      username: '',
      password: '',
    },
    isLoading: false,
    message: '',
  }),
  validations: loginValidations,
  methods: {
    validate(type) {
      if (this.$v.formData[type].$error) {
        return !this.$v.formData[type].$invalid
      }
      return null
    },
    async makeLogin() {
      this.$v.formData.$touch()

      if (this.$v.formData.$invalid) return

      this.isLoading = true

      try {
        const result = await AuthService.makeLogin({
          username: this.formData.username,
          password: this.formData.password,
        })

        if (result == 401)
          return (this.message =
            'Login tidak berhasil. Anda tidak memiliki hak akses ke halaman selanjutnya.')

        return await this.$router.push('/')
      } catch (err) {
        this.message =
          'Login tidak berhasil. Periksa kembali username/password anda.'
      }

      this.isLoading = false
    },
  },
}
</script>
