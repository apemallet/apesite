<script>
  let { children } = $props();
  import "../app.css";
  import '@fontsource/libre-barcode-128-text';
  import Footer from "$lib/components/footer.svelte";
  import { base } from '$app/paths'
</script>


<div class="flex flex-col min-h-[100vh]">
  <!-- <nav>
    <div class="nav-item">about us</div>
    <div class="nav-item">our projects</div>
    <div class="nav-item">contact us</div>
  </nav> -->

  <main class="flex-1">
    {@render children()}
  </main>

  <Footer />
</div>

