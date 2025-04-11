<script>
	import AboutUs from "$lib/components/about-us.svelte";
	import Display from "$lib/components/display/display-carousel.svelte";
	import Products from "$lib/components/products.svelte";

	let products = [
        {
            name: "Long",
            image: "/long_icon.webp",
            description:
                "A free universal remote app with slick animations and custom theming. A free universal remote app with slick animations and custom theming.",
            page: "long",
        },
        {
            name: "Product 2",
            image: "/favicon.png",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            page: "long",
        },
        {
            name: "Product 3",
            image: "/favicon.png",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            page: "long",
        },
        {
            name: "Product 4",
            image: "/favicon.png",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            page: "long",
        },
        {
            name: "Product 5",
            image: "/favicon.png",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            page: "long",
        },
	]
</script>


<div class="font-poppins text-gray-100 overflow-hidden">
	<!--  INFO: make sure padding/width of this matches the navbar -->
	<div class="bg-linear-to-tl from-sky-400 to-purple-600">
		<div class="max-w-7xl mx-auto px-6 py-4 self-center">
			<section id="display">
				<div class="spacer min-h-25 sm:min-h-30 md:min-h-45"></div>
				<Display {products}/>
				<div class="spacer min-h-15 sm:min-h-20 md:min-h-30"></div>
			</section>
		</div>
	</div>
	<div class="mx-auto py-4 bg-gray-100 flex self-center justify-center text-black">
		<section id="products">
			<div class="spacer min-h-15 sm:min-h-20 md:min-h-30"></div>
			<Products {products}/>
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
