<script>
  let { children } = $props();
  import "../app.css";
  import '@fontsource/libre-barcode-128-text';
  import Footer from "$lib/components/footer.svelte";
  import { base } from '$app/paths'
</script>

<div class="flex flex-col min-h-[100vh]">
  <nav>
    <!-- important nav stuff here -->
  </nav>

  <main class="flex-1">
    {@render children()}
  </main>

  <Footer />
</div>

