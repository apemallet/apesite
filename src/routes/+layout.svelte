<script>
  let { children } = $props();
  import "../app.css";
  import '@fontsource/libre-barcode-128-text';
  import Footer from "$lib/components/footer.svelte";
  import { base } from '$app/paths';
</script>

<div class="app">
  <nav>
    <!-- important nav stuff here -->
  </nav>

  <main>
    {@render children()}
  </main>

  <Footer />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }
</style>