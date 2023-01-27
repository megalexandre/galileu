const baseUrl = 'http://localhost:8080/';

export const environment = {
  production: false,
  baseUrl: baseUrl,

  registration: {
    paginate: baseUrl + 'customer/paginate'
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
