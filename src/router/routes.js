// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')
const LoginPage = () => import('@/views/auth/LoginPage')
const NotFoundPage = () => import('@/views/NotFoundPage')

// Data Pemohon
const DataPemohon = () => import('@/views/data-pemohon/DataPemohon')

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
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '*',
    name: 'NotFoundPage',
    component: NotFoundPage,
  },
]
