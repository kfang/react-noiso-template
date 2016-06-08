
let ENV = {
    environment: ENVIRONMENT || 'local',
    SITE_PROTO: 'http://',
    API_HOST_BASE: 'localhost:8080'
};

switch (ENV.environment) {
    case 'production':
        ENV.SITE_PROTO = 'https://';
        ENV.API_HOST_BASE = "productionsite.com";
        break;
}

ENV.API_HOST = ENV.SITE_PROTO + ENV.API_HOST_BASE;

export default ENV