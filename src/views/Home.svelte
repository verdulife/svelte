<script>
  import { locale } from "../locale";
  import content from "../content/Home.json";

  const ui = content[locale];
</script>

<div class="home">
  <h1>{ui.welcome}</h1>
</div>

<style lang="scss">
  .home {
    margin: 2em;
  }
</style>
