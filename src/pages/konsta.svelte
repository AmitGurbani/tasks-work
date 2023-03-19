<script>
    // Use Page, Navbar, Toolbar from Framework7
    import { Page, Navbar, Toolbar } from 'framework7-svelte';
    // Konsta UI components
    import {
      Block,
      Button,
      List,
      ListItem,
      Link,
      BlockTitle,
    } from 'konsta/svelte';
  </script>
  
  <!-- Use Page, Navbar & Toolbar from Framework7 -->
  <Page name="konsta">
    <Navbar title="My App" backLink="Back" />
    <Toolbar bottom>
      <Link toolbar>Left Link</Link>
      <Link toolbar>Right Link</Link>
    </Toolbar>
    <!-- In page content we can use Konsta UI components -->
    <Block strong>
      <p>Here is your Framework7 & Konsta UI app. Let's see what we have here.</p>
    </Block>
    <BlockTitle>Navigation</BlockTitle>
    <List>
      <ListItem href="/about/" title="About" />
      <ListItem href="/form/" title="Form" />
    </List>
  
    <Block strong class="flex space-x-4">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
    </Block>
  </Page>