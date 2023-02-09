const baseUrl = 'http://localhost:8080';

export const environment = {
  production: true,
  baseUrl: baseUrl,

  auth:{
    login: '/auth/login',
    logout: '/auth/logout',
  },
};
