export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'cil-speedometer',
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Master'],
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Data Anggaran',
        route: '/data-anggaran',
        to: '/data-anggaran',
        icon: 'cil-dollar',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Data Pemohon',
        route: '/data-pemohon',
        icon: 'cil-user',
        to: '/data-pemohon',
      },
    ],
  },
]
