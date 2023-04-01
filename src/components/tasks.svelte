<script>
  import { BlockTitle, Card, Page, List, ListItem, Checkbox } from "konsta/svelte";
</script>
<!-- <Page> -->
  <BlockTitle class="mb-2">On Going Tasks</BlockTitle>
 <Card header="Card header" footer="Card footer">

  <List>
  <!-- Additional "label" prop on ListItem -->
  <ListItem label title="Books">
    <!-- Pass Checkbox to list item media -->
    <Checkbox slot="media" component="div" name="my-checkbox" />
  </ListItem>
  <ListItem label title="Movies">
    <!-- Pass Checkbox to list item media -->
    <Checkbox slot="media" component="div" name="my-checkbox" />
  </ListItem>
</List>

    Card with header and footer. Card headers are used to display card titles
    and footers for additional information or just for custom actions.
  </Card>

  <!-- </Page> -->