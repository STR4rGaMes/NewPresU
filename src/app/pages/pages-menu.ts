import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'PANELES MODULOS',
    group: true,
  },
  {
    title: 'PRESUPUESTO',
    icon: 'layout-outline',
    children: [
      {
        title: 'Clasificadores',
        link: '/pages/presupuesto/clasificadores',
      },
      {
        title: 'POI - Actividades',
         link: '/pages/tables/smart-table',
},
      {
        title: 'Secuencias Funcionales',
        link: '/pages/presupuesto/secfun',
},
      {
        title: 'Tareas Funcionales',
        link: '/pages/presupuesto/tareasfun',
      },
      {
        title: 'Notas Presupuestales',
        pathMatch: 'prefix',
        link: '/pages/presupuesto/notpresu',
      },
      {
        title: 'Egresos Presupuestales',
        pathMatch: 'prefix',
        link: '/pages/miscellaneous/404',
      },
      {
        title: 'Compromiso Viaticos',
        pathMatch: 'prefix',
        link: '/pages/miscellaneous/404',
      },


      {
        title: 'SIAF',
        icon: 'edit-2-outline',
        children: [
          {
            title: 'Cuentas Contables',
            link: '/pages/miscellaneous/404',
          },
          {
            title: 'Notas Presupuestales',
            link: '/pages/miscellaneous/404',
          },
          {
            title: 'Certificados',
            link: '/pages/miscellaneous/404',
          },
          {
            title: 'Expedientes',
            link: '/pages/miscellaneous/404',
          },
        ],
      },
    ],
  },


  
  {
    title: 'REPORTES',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Consulta de Saldos Presupuestales',
        link: '/pages/miscellaneous/404',
      },
      {
        title: 'Actividades POI',
        link: '/pages/miscellaneous/404',
      },
      {
        title: 'Liquidaciones',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'LOGISTICA',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Registro Clave Proveedores',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Requerimientos fast',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Cotizar Requerimientos',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Ajustes Requerimientos',
        link: '/pages/ui-features/search-fields',
      },
      {
        title: 'Rec/Env Requerimientos',
        link: '/pages/ui-features/search-fields',
      },
      {
        title: 'Buena Pro => Ordenes',
        link: '/pages/ui-features/search-fields',
      },
      {
        title: 'Ordendes',
        link: '/pages/ui-features/search-fields',
      },
      {
        title: 'Recepcion de Servicios',
        link: '/pages/ui-features/search-fields',
      },
      {
        title: 'SERVICIOS BASICOS',
        icon: 'edit-2-outline',
        children: [
          {
            title: 'Cuentas Contables',
            link: '/pages/miscellaneous/404',
          },
          {
            title: 'Notas Presupuestales',
            link: '/pages/miscellaneous/404',
          },
          {
            title: 'Certificados',
            link: '/pages/miscellaneous/404',
          },
          {
            title: 'Expedientes',
            link: '/pages/miscellaneous/404',
          },
        ],
      },
      {
        title: 'ALMACEN',
        icon: 'edit-2-outline',
        children: [
          {
            title: 'Cuentas Contables',
            link: '/pages/miscellaneous/404',
          },
          {
            title: 'Notas Presupuestales',
            link: '/pages/miscellaneous/404',
          },
          {
            title: 'Certificados',
            link: '/pages/miscellaneous/404',
          },
          {
            title: 'Expedientes',
            link: '/pages/miscellaneous/404',
          },
        ],
      },
      {
        title: 'PATRIMONIO',
        icon: 'edit-2-outline',
        children: [
          {
            title: 'Cuentas Contables',
            link: '/pages/miscellaneous/404',
          },
          {
            title: 'Notas Presupuestales',
            link: '/pages/miscellaneous/404',
          },
          {
            title: 'Certificados',
            link: '/pages/miscellaneous/404',
          },
          {
            title: 'Expedientes',
            link: '/pages/miscellaneous/404',
          },
        ],
      },
    ],
  },
        {
          title: 'ACCESOS',
          icon: 'browser-outline',
          children: [
            {
              title: 'Registros de Usuarios',
              link: '/pages/modal-overlays/dialog',
            },
            {
              title: 'Unidades Organicas',
              link: '/pages/modal-overlays/window',
            },
            {
              title: 'Modulo de Sistema',
              link: '/pages/modal-overlays/popover',
            },
            {
              title: 'Cambiar Clave 1',
              link: '/pages/modal-overlays/toastr',
            },
            {
              title: 'Cambiar Clave 2',
              link: '/pages/modal-overlays/tooltip',
            },
          ],
        },
];
