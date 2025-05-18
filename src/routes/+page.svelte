<script>
  import Display from "$lib/components/sections/product_carousel/index.svelte";
  import Products from "$lib/components/sections/products.svelte";
  import AboutUs from "$lib/components/sections/about_us.svelte";
  import Main from "$lib/components/sections/main.svelte";
	import Divider from "$lib/components/divider.svelte";
</script>

<div class="font-poppins text-gray-100 overflow-hidden">
	<!-- INFO: main "APEMALLET" section -->
	<div class="relative bg-gradient-to-tl from-apeium-950 via-apeium-900 to-apeium-800">
		<div class="absolute inset-0 bg-[url(/svg/grain.svg)] opacity-10 brightness-100 contrast-150"></div>
		<div class="max-w-7xl mx-auto">
			<Main />
		</div>
	</div>

	<!-- INFO: product carousel -->
	<div class="relative bg-apeium-950">
		<div class="absolute inset-0 bg-[url(/svg/grain.svg)] opacity-20 brightness-50 contrast-150"></div>
		<Divider />
		<div class="max-w-7xl mx-auto py-24 self-center">
			<section id="display">
				<Display />
			</section>
		</div>
		<Divider />
	</div>

	<!-- INFO: product overview -->
  <div
    class="mx-auto py-4 flex self-center justify-center"
  >
    <section id="products">
			<Products />
    </section>
  </div>

	<!-- INFO: about -->
  <div class="mx-auto py-4 self-center bg-gray-100 flex justify-center">
    <section id="about-us">
			<AboutUs />
    </section>
  </div>

	<!-- INFO: contact -->
  <section id="contact">
    <div class="spacer min-h-lvh"></div>
  </section>
</div>
