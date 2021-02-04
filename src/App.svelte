<script>
  import About from "./views/About.svelte";
  import Nav from "./components/Nav.svelte";
  import Home from "./views/Home.svelte";

  import { locale } from "./locale";
  import { Router, Route } from "svelte-routing";

  export let url = "";
</script>

<svelte:head>
  <html lang={locale} />
</svelte:head>

<main class="view col fcenter">
  <Router {url}>
    <Nav />

    <div class="col xfill grow">
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
</main>

<style lang="scss" global>
  @import "node_modules/verdu/verdu";
  @import "reset";

  @media (max-width: $tablet) {
    main {
      flex-direction: column-reverse !important;
    }
  }
</style>
