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

export const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Home',
    component: TheContainer,
    meta: { isAuth: true },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
    ],
  },
  {
    path: '/data-pemohon',
    name: 'Data Pemohon',
    redirect: '/data-pemohon',
    component: TheContainer,
    meta: { isAuth: true },
    children: [
      {
        path: '/',
        component: DataPemohon,
      },
      {
        path: 'tambah',
        name: 'Tambah Data Pemohon',
        component: TambahDataPemohon,
      },
    ],
  },
  {
    path: '/data-anggaran',
    name: 'Data Anggaran',
    redirect: '/data-anggaran',
    component: TheContainer,
    meta: { isAuth: true },
    children: [
      {
        path: '/',
        component: DataAnggaran,
      },
      {
        path: 'tambah',
        name: 'Tambah Data Anggaran',
        component: TambahDataPemohon,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
]
