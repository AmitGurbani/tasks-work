<script>
  import { Block, BlockTitle, Col, Row } from "framework7-svelte";
  import TaskCard from "./TaskCard.svelte";
</script>

<Block>
  <BlockTitle>On Going Tasks</BlockTitle>
  <Row>
    {#each Array(10) as _, i}
      <Col width="100" small="50" large="33" xlarge="25"><TaskCard /></Col>
    {/each}
  </Row>
</Block>
