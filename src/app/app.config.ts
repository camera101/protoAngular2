export const appConfig = {
    api: {
        baseUrl: 'http://localhost:8080',
        paths: {
            login: '/api/user/login',
            logout: '/api/user/logout',
            createUser: '/api/user/create',
            friendsList: '/api/friends/1'
        },
        enableSecuredRoutes: false
    },
    publicRoutes: {
        'login': true,
        'home': false,
        'friends': false
    }

};
