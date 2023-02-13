const baseUrl = 'http://localhost:8080/';

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

  place: {
    paginate: baseUrl + 'place/paginate',
    save: baseUrl + 'place',
    update: baseUrl + 'place/update',
    byId: baseUrl+ `place/`
  },

  link: {
    paginate: baseUrl + 'link/paginate',
    save: baseUrl + 'link',
    update: baseUrl + 'link/update',
    byId: baseUrl+ `link/`
  },



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
