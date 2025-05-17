<script>
  import AboutUs from "$lib/components/about-us.svelte";
  import Display from "$lib/components/display.svelte";
  import Products from "$lib/components/products.svelte";
  import Main from "$lib/components/main.svelte";

  import { onMount } from "svelte";

  let title = "apemallet";

  let scrollY = $state(0);

  function handleScroll() {
    scrollY = window.scrollY;
  }
</script>

<svelte:window on:scroll={handleScroll} />

<nav
  class={`fixed z-10 top-0 left-0 w-full transition-all ease-out
  ${scrollY > 50 ? "bg-[#d6ad3b] shadow-md py-1 text-[#25373a] " : "bg-transparent py-4 text-[#d6ad3b] "}`}
>
  <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <div class="text-4xl font-[Baloo]">{title}</div>
    <ul class="flex font-poppins font-bold space-x-6 text-l">
      <li>
        <a
          href="#display"
          class={`${scrollY > 50 ? "hover:text-[#445f63]" : "hover:text-yellow-200"}`}
          >HOME</a
        >
      </li>
      <li>
        <a
          href="#products"
          class={`${scrollY > 50 ? "hover:text-[#445f63]" : "hover:text-yellow-200"}`}
          >PRODUCTS</a
        >
      </li>
      <li>
        <a
          href="#about-us"
          class={`${scrollY > 50 ? "hover:text-[#445f63]" : "hover:text-yellow-200"}`}
          >ABOUT</a
        >
      </li>
      <li>
        <a
          href="#contact"
          class={`${scrollY > 50 ? "hover:text-[#445f63]" : "hover:text-gray-200"}`}
          >CONTACT</a
        >
      </li>
    </ul>
  </div>
</nav>

<div class="font-poppins text-gray-100 overflow-hidden">
  <!--  INFO: make sure padding/width of this matches the navbar -->
    <div class="bg-gradient-to-tl from-slate-950 via-slate-900 to-slate-800">
      <div class="absolute inset-0 bg-[url(/svg/grain.svg)] opacity-10 brightness-100 contrast-150">
      </div>
      <div class="max-w-7xl mx-auto h-200 px-6 py-4 justify-center flex flex-col items-center">
        <h1 class="text-7xl text-center font-[Baloo] text-[#d6ad3b] pb-15">apemallet</h1>
        <h2 class=" max-w-xl text-xl text-center font-poppins text-slate-900 bg-[#d6ad3b] rounded-xl p-10 font-semibold">Apemallet is a creative app development company specializing in sleek, high-performance mobile and web applications. Blending design, innovation, and reliable tech, Apemallet helps clients turn ideas into engaging digital products. </h2>
      </div>
    </div>

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
