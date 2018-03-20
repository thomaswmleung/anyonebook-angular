// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,

    // Initialize Firebase
    config: {
        apiKey: "AIzaSyCAX1OKPyRAM6F2WOVBeuMPeUR9niGTSk8",
        authDomain: "openpage-anyonebook.firebaseapp.com",
        databaseURL: "https://openpage-anyonebook.firebaseio.com",
        projectId: "openpage-anyonebook",
        storageBucket: "openpage-anyonebook.appspot.com",
        messagingSenderId: "448562932508"
    }
};
