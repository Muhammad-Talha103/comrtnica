const APP_ENVIRONMENT = process.env.NEXT_PUBLIC_ENV;

const API_BASE_URL = APP_ENVIRONMENT === 'staging' ? 'https://staging.osmrtnica.com/api' :
  APP_ENVIRONMENT === 'production' ? 'https://dev111.osmrtnica.com/be/api' : 'http://localhost:4000/api';

export default API_BASE_URL;
