<script>
  import { onMount } from "svelte";
  import { KonstaProvider } from 'konsta/svelte';
  import { getDevice } from "framework7/lite-bundle";
  import {
    f7,
    f7ready,
    App,
    Panel,
    Views,
    View,
    Popup,
    Page,
    Navbar,
    Toolbar,
    NavRight,
    Link,
    Block,
    BlockTitle,
    LoginScreen,
    LoginScreenTitle,
    List,
    ListItem,
    ListInput,
    ListButton,
    BlockFooter,
  } from "framework7-svelte";
  import cordovaApp from "../js/cordova-app";

  import routes from "../js/routes";
  import store from "../js/store";

  const device = getDevice();
  // Framework7 Parameters
  let f7params = {
    name: "Tasks Work", // App name
    theme: "auto", // Automatic theme detection

    id: "work.tasks.app", // App bundle ID
    // App store
    store: store,
    // App routes
    routes: routes,
    // Register service worker (only on production build)
    serviceWorker:
      process.env.NODE_ENV === "production"
        ? {
            path: "/service-worker.js",
          }
        : {},

    // Input settings
    input: {
      scrollIntoViewOnFocus: device.cordova && !device.electron,
      scrollIntoViewCentered: device.cordova && !device.electron,
    },
    // Cordova Statusbar settings
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
  };
  // Login screen demo data
  let username = "";
  let password = "";

  function alertLoginData() {
    f7.dialog.alert(
      "Username: " + username + "<br>Password: " + password,
      () => {
        f7.loginScreen.close();
      }
    );
  }
  onMount(() => {
    f7ready(() => {
      // Init cordova APIs (see cordova-app.js)
      if (f7.device.cordova) {
        cordovaApp.init(f7);
      }

      // Call F7 APIs here
    });
  });
</script>

<KonstaProvider theme="parent">
  <App {...f7params}>
    <!-- Left panel with cover effect-->
    <Panel left cover dark>
      <View>
        <Page>
          <Navbar title="Left Panel" />
          <Block>Left panel content goes here</Block>
        </Page>
      </View>
    </Panel>

    <!-- Right panel with reveal effect-->
    <Panel right reveal dark>
      <View>
        <Page>
          <Navbar title="Right Panel" />
          <Block>Right panel content goes here</Block>
        </Page>
      </View>
    </Panel>

    <!-- Your main view, should have "view-main" class -->
    <View main class="safe-areas" url="/" />

    <!-- Popup -->
    <Popup id="my-popup">
      <View>
        <Page>
          <Navbar title="Popup">
            <NavRight>
              <Link popupClose>Close</Link>
            </NavRight>
          </Navbar>
          <Block>
            <p>Popup content goes here.</p>
          </Block>
        </Page>
      </View>
    </Popup>

    <LoginScreen id="my-login-screen">
      <View>
        <Page loginScreen>
          <LoginScreenTitle>Login</LoginScreenTitle>
          <List form>
            <ListInput
              type="text"
              name="username"
              placeholder="Your username"
              bind:value={username}
            />
            <ListInput
              type="password"
              name="password"
              placeholder="Your password"
              bind:value={password}
            />
          </List>
          <List>
            <ListButton title="Sign In" onClick={() => alertLoginData()} />
          </List>
          <BlockFooter>
            Some text about login information.<br />Click "Sign In" to close
            Login Screen
          </BlockFooter>
        </Page>
      </View>
    </LoginScreen>
  </App>
</KonstaProvider>
