import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')
const LoginPage = () => import('@/views/auth/LoginPage')

// Data Pemohon
const DataPemohon = () => import('@/views/data-pemohon/DataPemohon')
const TambahDataPemohon = () => import('@/views/data-pemohon/TambahData')

// Data Anggaran
const DataAnggaran = () => import('@/views/data-anggaran/DataAnggaran')


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
          path: 'tambah',
          name: 'Tambah Data Pemohon',
          component: TambahDataPemohon
        }
      ]
    },
    {
      path: '/data-anggaran',
      name: 'Data Anggaran',
      redirect: '/data-anggaran',
      component: TheContainer,
      children: [
        {
          path: '/',
          component: DataAnggaran
        },
        {
          path: 'tambah',
          name: 'Tambah Data Anggaran',
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

