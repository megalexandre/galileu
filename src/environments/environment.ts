const baseUrl = 'http://localhost:8080/';

export const environment = {
  production: false,
  baseUrl: baseUrl,

  customer: {
    paginate: baseUrl + 'customer/paginate',
    save: baseUrl + 'customer',
    update: baseUrl + 'customer/update',
    byId: baseUrl+ `customer/`
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
