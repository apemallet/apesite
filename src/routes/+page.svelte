<script>
  import Display from "$lib/components/sections/product_carousel/index.svelte";
  import AboutUs from "$lib/components/sections/about_us.svelte";
  import Founders from "$lib/components/sections/founders.svelte";
  import Contact from "$lib/components/sections/contact.svelte";
  import Main from "$lib/components/sections/main.svelte";
  import Divider from "$lib/components/divider.svelte";
</script>

<div class="font-poppins overflow-hidden">
	<!-- INFO: main "APEMALLET" section -->
	<section id="home" class="relative bg-gradient-to-tl from-apeium-surface via-apeium-surfacetint to-apeium-surfacetintier">
		<div class="absolute inset-0 bg-[url(/svg/grain.svg)] opacity-10 brightness-100 contrast-150"></div>
		<div class="max-w-7xl mx-auto">
			<Main />
		</div>
	</section>

	<!-- INFO: product carousel -->
	<section id="products" class="relative bg-apeium-surface text-gray-100">
		<div class="absolute inset-0 bg-[url(/svg/grain.svg)] opacity-20 brightness-50 contrast-150"></div>
    <Divider />
    <Display />
	</section>

	<!-- INFO: about -->
	<section id="about-us" class="bg-apeium-surface text-gray-100">
		<div class="mx-auto py-4 self-center flex justify-center">
			<AboutUs />
		</div>
	</section>

	<!-- INFO: contact -->
	<section id="contact" class="bg-apecent-surface text-apeium-surface">
		<div class="mx-auto py-4 self-center flex justify-center">
			<Contact />
		</div>
	</section>
</div>
