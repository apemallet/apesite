<script>
	import { onMount } from "svelte";
	import KeenSlider from "keen-slider";
	import ProductSlide from "./ProductSlide.svelte";

	let sliderRef;
	let slider;

	// Once the slider is loaded, transition it in
	let sliderLoaded = $state(false);

	let products = [
		{
			name: "Long",
			image: "/favicon.png",
			description:
				"A free universal remote app with slick animations and custom theming",
		},
		{
			name: "Product 2",
			image: "/favicon.png",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			name: "Product 3",
			image: "/favicon.png",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
	];

	onMount(() => {
		slider = new KeenSlider(sliderRef, {
			loop: true,
			slides: {
				perView: 1,
				spacing: 20,
			},
			detailsChanged: (s) => {
				s.slides.forEach((element, idx) => {
					element.style.opacity = s.track.details.slides[idx].portion;
				});
			},
		});

		sliderLoaded = true;

		return () => slider.destroy();
	});
</script>

<div class="w-full">
	<!-- Until slider is loaded, just show the first product -->
	{#if !sliderLoaded}
		<ProductSlide product={products[0]} />
	{/if}
	<div bind:this={sliderRef} class="keen-slider overflow-visible!">
		{#each products as product}
			<div class="keen-slider__slide opacity-0">
				<ProductSlide {product} />
			</div>
		{/each}
	</div>
</div>
