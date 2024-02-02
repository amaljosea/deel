### How to test deployed version

On web:

- Go to https://dashboard.ionicframework.com/preview/adf3bf66/ldf8f7i05r or https://ldf8f7i05r.appflowapp.com/ to test it on the web.

On native mobile:

- Download Nexus app https://capacitor.nexusbrowser.com/capacitor
- Enter https://ldf8f7i05r.appflowapp.com in the Nexus app

### How to run locally?

- Make sure you have the done the environment setup https://capacitorjs.com/docs/getting-started/environment-setup
- Install dependencies: `npm i`
- Run on the web: `ionic serve`
- Run on the android simulator: `npx cap run android`
- Run on ios simulator: `npx cap run ios`

### Run unit test

- `npm run test.unit`

### Run e2e test

- `npm run test.e2e`

### Build and sync

- `npm run build`
- `npx cap sync`
