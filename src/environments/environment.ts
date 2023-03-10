export const baseUrl = 'https://localhost:443/';

export const environment = {
  production: false,

  api: baseUrl,

  auth:{
    login: `auth/login`,
    logout: `auth/logout`,
  },

  quality: `${baseUrl + 'quality'}`,
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
