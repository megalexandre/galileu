export const baseUrl = 'https://191.101.14.51:443/';

export const environment = {
  production: true,

  auth:{
    login: `auth/login`,
    logout: `auth/logout`,
  },

  customer: `${baseUrl + 'customer'}`,
  address: `${baseUrl + 'address'}`,
  group: `${baseUrl + 'group'}`,
  link: `${baseUrl + 'link'}`,
  place: `${baseUrl + 'place'}`,

  management: {
    router: '/management',
  },

  dashboard: {
    routers: {
      planAccount:
      {
        synthetic: '/synthetic',
        analytical : '/analytical',
      },
    },
  },
};
