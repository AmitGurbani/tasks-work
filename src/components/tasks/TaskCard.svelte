<script>
  import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    List,
    ListItem,
    Chip,
    Actions,
    ActionsGroup,
    ActionsButton,
    ActionsLabel,
    Button,
  } from "framework7-svelte";
  let actionsOneGroupOpened = false;
</script>

<Card>
  <CardHeader>
    <List>
      <ListItem
        checkbox
        value="check_1"
        
        title="Checkbox 1"
        class="no-padding-left"
      />
    </List>

    <Button
      style="display: inline-block"
      onClick={() => {
        actionsOneGroupOpened = true;
      }}><i class="material-icons">more_vert</i></Button
    >
  </CardHeader>
  <CardContent>
    Card with header and footer. Card headers are used to display card titles
    and footers for additional information or just for custom actions.
  </CardContent>
  <CardFooter><Chip text="Red Chip" color="red" /></CardFooter>
</Card>

<Actions bind:opened={actionsOneGroupOpened}>
  <ActionsGroup>
    <ActionsLabel>Select Priority</ActionsLabel>
    <ActionsButton strong>Button 1</ActionsButton>
    <ActionsButton>Button 2</ActionsButton>
    <ActionsButton color="red">Cancel</ActionsButton>
  </ActionsGroup>
</Actions>
