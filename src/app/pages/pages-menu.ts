import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/homepage',
    home: true,
  },
  {
    title: 'Adminstrativo',
    group: true,
  },
  {
    title: 'Cadastros',
    icon: 'file-text-outline',
    children: [
      {
        title: 'Clientes',
        link: '/pages/registration',
      },
      {
        title: 'Preços',
        link: '/pages/registration/group',
      },
      {
        title: 'Logradouros',
        link: '/pages/registration/address',
      },
      {
        title: 'Endereços',
        link: '/pages/registration/place',
      },
      {
        title: 'Ligações',
        link: '/pages/registration/link',
      },
    ],
  },
  {
    title: 'Água',
    icon: 'droplet-outline',
    children: [
      {
        title: 'Hidrômetro',
        link: '/pages/water/hydrometer',
      },
      {
        title: 'Qualidade',
        link: '/pages/water/quality',
      },
    ],
  },
  {
    title: 'Estratégico',
    group: true,
  },
  {
    title: 'Financeiro',
    icon: 'credit-card-outline',
    children: [
      {
        title: 'Caixa',
        link: '/pages/financial',
      },
    ],
  }
];
