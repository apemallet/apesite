<script>
  let { children } = $props();
  import "../app.css";
  import "@fontsource/libre-barcode-128-text";
  import Footer from "$lib/components/footer.svelte";
  import { base } from "$app/paths";

  let scrollY = $state(0);

  function handleScroll() {
    scrollY = window.scrollY;
  }
</script>

<svelte:window on:scroll={handleScroll} />

<div class="flex flex-col min-h-[100vh]">
  <nav
    class={`fixed z-10 top-0 left-0 w-full transition-all ease-out 
  ${scrollY > 50 ? "bg-black shadow-md py-1" : "bg-transparent py-4"}`}
  >
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-4xl text-white font-[Baloo]">apemallet</div>
      <ul class="flex font-poppins font-light space-x-6 text-white text-xl">
        <li>
          <a href="/" class="hover:text-gray-200">Home</a>
        </li>
        <li>
          <a href="/#products" class="hover:text-gray-200">Products</a>
        </li>
        <li>
          <a href="/#about-us" class="hover:text-gray-200">About</a>
        </li>
        <li>
          <a href="/#contact" class="hover:text-gray-200">Contact</a>
        </li>
      </ul>
    </div>
  </nav>

  <main class="flex-1">
    {@render children()}
  </main>

  <Footer />
</div>
