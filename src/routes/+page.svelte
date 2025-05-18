<script>
  import AboutUs from "$lib/components/sections/about_us.svelte";
  import Display from "$lib/components/sections/product_display/index.svelte";
  import Products from "$lib/components/sections/products.svelte";
</script>

<div class="font-poppins text-gray-100 overflow-hidden">
  <!--  INFO: make sure padding/width of this matches the navbar -->
  <div class="bg-gradient-to-tl from-slate-950 via-slate-900 to-slate-800">
    <div class="absolute inset-0 bg-[url(/svg/grain.svg)] opacity-10 brightness-100 contrast-150"></div>
      <div class="max-w-7xl mx-auto h-174 px-6 py-4 justify-center flex flex-col items-center">
        <h1 class="text-7xl text-center font-[Baloo] text-[#d6ad3b] pb-15">apemallet</h1>
        <h2 class=" max-w-xl text-xl text-center font-poppins text-slate-900 bg-[#d6ad3b] rounded-xl p-7 font-semibold"> Nothing but monkey business </h2>
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
