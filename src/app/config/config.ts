const hostname = window.location.hostname;

export const environment = {
  production: hostname !== 'localhost' && hostname !== '127.0.0.1',
  appName: 'HRMS Portal',
  apiBaseUrl: 'https://hrms-lite-api-5war.onrender.com/api/admin/v1'
};