export const appConfig = {
    api: {
        baseUrl: 'http://localhost:8080',
        paths: {
            login: '/api/user/login',
            logout: '/api/user/logout',
            signup: '/api/user/signup',
            createUser: '/api/user/create',
            friendsList: '/api/friends/1'
        },
        enableSecuredRoutes: false

    },
    publicRoutes: {
        'login': true,
        'signup': true,
        'home': false,
        'friends': false
    }

};
