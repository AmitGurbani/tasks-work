![GitHub language count](https://img.shields.io/github/languages/count/AmitGurbani/tasks-work)
![GitHub top language](https://img.shields.io/github/languages/top/AmitGurbani/tasks-work)
![GitHub](https://img.shields.io/github/license/AmitGurbani/tasks-work)
![GitHub contributors](https://img.shields.io/github/contributors/AmitGurbani/tasks-work)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/AmitGurbani/tasks-work)
![GitHub last commit](https://img.shields.io/github/last-commit/AmitGurbani/tasks-work)
![GitHub Discussions](https://img.shields.io/github/discussions/AmitGurbani/tasks-work)

# Tasks Work

## Privacy Focused Productivity Enhancement App

## Install Dependencies

First of all we need to install dependencies, run in terminal

```
npm install
```

## NPM Scripts

- 🔥 `start` - run development server
- 🔧 `dev` - run development server
- 🔧 `build` - build web app for production
- 📱 `build-cordova` - build cordova app
- 📱 `build-cordova-ios` - build cordova iOS app
- 📱 `cordova-ios` - run dev build cordova iOS app
- 📱 `build-cordova-android` - build cordova Android app
- 📱 `cordova-android` - run dev build cordova Android app
- 🖥 `build-cordova-electron` - build cordova Electron app
- 🖥 `build-cordova-osx` - build cordova macOS app
- 🖥 `cordova-electron` - run dev build cordova Electron app

## Vite

There is a [Vite](https://vitejs.dev) bundler setup. It compiles and bundles all "front-end" resources. You should work only with files located in `/src` folder. Vite config located in `vite.config.js`.

## PWA

This is a PWA. Don't forget to check what is inside of your `service-worker.js`. It is also recommended that you disable service worker (or enable "Update on reload") in browser dev tools during development.

## Cordova

Cordova project located in `cordova` folder. You shouldn't modify content of `cordova/www` folder. Its content will be correctly generated when you call `npm run cordova-build-prod`.

## Cordova Electron

There is also cordova Electron platform installed. To learn more about it and Electron check this guides:

- [Cordova Electron Platform Guide](https://cordova.apache.org/docs/en/latest/guide/platforms/electron/index.html)
- [Official Electron Documentation](https://electronjs.org/docs)

## Assets

Assets (icons, splash screens) source images located in `assets-src` folder. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:

```
framework7 assets
```

Or launch UI where you will be able to change icons and splash screens:

```
framework7 assets --ui
```

## Documentation & Resources

- [Framework7 Core Documentation](https://framework7.io/docs/)

- [Framework7 Svelte Documentation](https://framework7.io/svelte/)
- [Framework7 Icons Reference](https://framework7.io/icons/)
- [Community Forum](https://forum.framework7.io)

## Support Framework7

Love Framework7? Support project by donating or pledging on:

- Patreon: https://patreon.com/framework7
- OpenCollective: https://opencollective.com/framework7
