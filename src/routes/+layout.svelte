<script>
  import '@fontsource/libre-barcode-128-text';
  import { base } from '$app/paths'
  import "../app.css";

  import Footer from "$lib/components/footer.svelte";
	import Navbar from "$lib/components/navbar.svelte"
    import { onMount } from 'svelte';

  let { children } = $props();
  let scrollY = $state(0);

  onMount(() => {
    scrollY = window.scrollY;
  });
</script>

<svelte:window on:scroll={scrollY = window.scrollY} />

<div class="flex flex-col min-h-[100vh]">
  <main class="flex-1">
		<Navbar {scrollY} />
    {@render children()}
  </main>

  <Footer />
</div>

