<script>
  import { locale } from "../locale";
  import { link } from "svelte-routing";

  import content from "../content/Nav.json";

  const ui = content[locale];
</script>

<nav class="row xfill jbetween acenter">
  <h4>{ui.logo}</h4>

  <ul class="row">
    <li><a href="/" use:link>{ui.home}</a></li>
    <li><a href="/about" use:link>{ui.about}</a></li>
  </ul>
</nav>

<style lang="scss">
  nav {
    border-bottom: 1px solid $border;
    padding: 0.9em 2em;

    ul {
      li {
        margin-left: 2em;
      }
    }

    @media (max-width: $mobile) {
      border-bottom: none;
      border-top: 1px solid $border;
    }
  }
</style>
