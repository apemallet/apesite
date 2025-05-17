<script>
  import AboutUs from "$lib/components/about-us.svelte";
  import Display from "$lib/components/display.svelte";
  import Products from "$lib/components/products.svelte";
	import Navbar from "$lib/components/Navbar.svelte"

  import { loadSlim } from "tsparticles-slim";
  import { onMount } from "svelte";

  let scrollY = $state(0);

  function handleScroll() {
    scrollY = window.scrollY;
  }
</script>

<svelte:window on:scroll={handleScroll} />

<Navbar {scrollY} />

<div class="font-poppins text-gray-100 overflow-hidden">
  <!--  INFO: make sure padding/width of this matches the navbar -->
	<div class="bg-gradient-to-tl from-slate-950 via-slate-900 to-slate-800">
		<div class="absolute inset-0 bg-[url(/svg/grain.svg)] opacity-10 brightness-100 contrast-150">
		</div>
		<div class="max-w-7xl mx-auto px-6 py-4 self-center">
			<section id="display">
				<div class="spacer min-h-25 sm:min-h-30 md:min-h-45"></div>
				<Display />
				<div class="spacer min-h-15 sm:min-h-20 md:min-h-30"></div>
			</section>
		</div>
	</div>
  <div
    class="mx-auto py-4 bg-gray-100 flex self-center justify-center text-black"
  >
    <section id="products">
      <div class="spacer min-h-15 sm:min-h-20 md:min-h-30"></div>

      <Products />
      <div class="spacer min-h-15 sm:min-h-20 md:min-h-30"></div>
    </section>
  </div>
  <div class="mx-auto py-4 self-center bg-gray-100 flex justify-center">
    <section id="about-us">
      <div class="spacer min-h-15 sm:min-h-20 md:min-h-30"></div>
      <AboutUs />
      <div class="spacer min-h-15 sm:min-h-20 md:min-h-30"></div>
    </section>
  </div>
  <section id="contact">
    <div class="spacer min-h-lvh"></div>
  </section>
</div>
