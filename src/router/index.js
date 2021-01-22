import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')
const LoginPage = () => import('@/views/auth/LoginPage')
const DataPemohon = () => import('@/views/data-pemohon/DataPemohon')
const InputSPD = () => import('@/views/data-pemohon/InputSPD')
const TambahDataPemohon = () => import('@/views/data-pemohon/TambahData')

Vue.use(Router)

export default new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        }
      ]
    },
    {
      path: '/data-pemohon',
      name: 'Data Pemohon',
      redirect: '/data-pemohon',
      component: TheContainer,
      children: [
        {
          path: '/',
          component: DataPemohon
        },
        {
          path: 'input-spd',
          name: 'Input No. SPD',
          component: InputSPD
        },
        {
          path: 'tambah',
          name: 'Tambah Data Pemohon',
          component: TambahDataPemohon
        }
      ]
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    }
  ]
}

