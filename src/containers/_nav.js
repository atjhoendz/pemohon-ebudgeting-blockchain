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
        _children: ['Master']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Data Anggaran',
        route: '/data-anggaran',
        icon: 'cil-dollar',
        items: [
          {
            name: 'Lihat Data',
            to: '/data-anggaran'
          },
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Data Pemohon',
        route: '/data-pemohon',
        icon: 'cil-user',
        items: [
          {
            name: 'Lihat Data',
            to: '/data-pemohon'
          },
          {
            name: 'Tambah Data',
            to: '/data-pemohon/tambah'
          }
        ]
      },
    ]
  }
]