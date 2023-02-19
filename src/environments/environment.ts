const baseUrl = 'http://191.101.14.51:8080/';

export const environment = {
  production: false,
  baseUrl: baseUrl,

  auth:{
    login: baseUrl + 'auth/login',
    logout:  baseUrl + 'auth/logout',
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
