export const environment = {
  production: false,

  management: {
    router: '/management'
  },

  dashboard:{
    routers: {
      planAccount:
      {
        synthetic: '/synthetic',
        analytical : '/analytical'
      }
    }
  }
};
