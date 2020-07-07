# VueJS Vuetify Vue Router Vuex

-   Vuetify
-   Multiple environment ready (development, production).
-   Vue router
-   Vuex
-   i18n ready.
-   Google Analytics ready.
-   Ready to add to home screen in iOS and Chrome, checks if there´s an app update every 2 hours and reloads page (When a web app is added as stand alone there´s no reload button in the browser so new .js files from a new build never get loaded)
-   Landing page.
-   Protected home page.
-   Login.
-   Signup.
-   Forgot password.
-   Account verification.
-   User profile.
-   Users admin area with CRUD operations.
-   Cities admin area with CRUD operations.
-   Testing with Cypress and mocha/chai.
-   NPM script for keeping good source code formatting using prettier and ESLint.
-   Use of ESLint for good coding practices.
-   Use of prettier for beautiful format.
-   Ability to refresh token
-   JWT Tokens, make requests with a token after login with `Authorization` header with value `Bearer yourToken` where `yourToken` is the **signed and encrypted token** given in the response from the login process.

### Login credentials

email: `admin@admin.com`  
password: `12345`

## VERY IMPORTANT

This project uses Vue Router HTML5 History Mode, this means when you are in development mode you can hit Cmd+R (mac) or F5 (Windows) to reload the page and it will work, but when the project is built you will have problems, so will need to do a small change in your web server to make that work. Please read the official Vue Router documentation here: <https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations>

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Run your tests

```bash
npm run test
```

### Lints and fixes files

```bash
npm run lint
```

### Formatting markdown files

```bash
npm run remark
```

### Run your end-to-end tests

```bash
npm run test:e2e
```

### Run your unit tests

```bash
npm run test:unit
```

## License

This project is open-sourced software licensed under the MIT License. See the LICENSE file for more information.
