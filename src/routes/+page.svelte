<script>
  import ProductCarousel from "$lib/pages/root/product_showcase/index.svelte";
  import About from "$lib/pages/root/about.svelte";
  import Founders from "$lib/pages/root/founders.svelte";
  import Contact from "$lib/pages/root/contact.svelte";
  import Main from "$lib/pages/root/main.svelte";
  import Divider from "$lib/components/divider.svelte";
</script>

<div class="font-poppins overflow-hidden">
	<!-- INFO: main "APEMALLET" section -->
	<section id="home" class="relative bg-gradient-to-tl from-apeium-surface via-apeium-surfacetint to-apeium-surfacetintier">
		<div class="absolute inset-0 bg-[url(/svg/grain.svg)] opacity-10 brightness-100 contrast-150 pointer-events-none"></div>
		<div class="max-w-7xl mx-auto">
			<Main />
		</div>
	</section>

	<!-- INFO: product carousel -->
	<section id="products" class="relative bg-apeium-surface text-gray-100">
		<div class="absolute inset-0 bg-[url(/svg/grain.svg)] opacity-40 brightness-40 contrast-150 pointer-events-none"></div>
    <Divider />
    <ProductCarousel />
	</section>

	<!-- INFO: about -->
	<section id="about-us" class="bg-apeium-surfacetint text-gray-100">
		<div class="mx-auto py-4 self-center items-center flex flex-col">
			<About />
			<Founders />
		</div>
	</section>

	<!-- INFO: contact -->
	<section id="contact" class="bg-apecent-surface text-apeium-surface">
		<div class="mx-auto py-4 self-center flex justify-center">
			<Contact />
		</div>
	</section>
</div>
