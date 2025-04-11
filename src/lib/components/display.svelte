<script>
	import { onMount } from "svelte";
	import KeenSlider from "keen-slider";
	import ProductSlide from "./ProductSlide.svelte";

	let sliderRef;
	let slider;
	let current = 0;

	// Once the slider is loaded, transition it in
	let sliderLoaded = $state(false);

	// Computed property for dot navigation
	let dotHelper = $derived(
		slider && slider.track
			? [...Array(slider.track.details.slides.length).keys()]
			: [],
	);

	let products = [
		{
			name: "Long",
			image: "/long_icon.webp",
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
			slideChanged: (s) => {
				current = s.track.details.rel;
			},
			defaultAnimation: {
				duration: 600,
				easing: (t) => t * (2 - t),
			},
		});

		sliderLoaded = true;

		return () => slider.destroy();
	});

	function prev() {
		if (slider) slider.prev();
	}

	function next() {
		if (slider) slider.next();
	}

	function moveToIdx(idx) {
		if (slider) slider.moveToIdx(idx);
	}
</script>

<div class="w-full relative">
	<!-- Until slider is loaded, just show the first product -->
	{#if !sliderLoaded}
		<ProductSlide product={products[0]} />
	{/if}

	<div bind:this={sliderRef} class="keen-slider overflow-visible! pb-15">
		{#each products as product}
			<div class="keen-slider__slide opacity-0">
				<ProductSlide {product} />
			</div>
		{/each}
	</div>

	<!-- Navigation Arrows -->
	{#if sliderLoaded}
		<!-- Left Arrow -->
		<button
			onclick={prev}
			onkeydown={(e) => handleKeydown(e, prev)}
			aria-label="Previous slide"
			class="absolute top-1/1 left-4/9 -translate-y-1/2 z-2 p-1 rounded-full invisible sm:visible"
		>
			<svg
				class="w-8 h-8 fill-gray-100 hover:fill-gray-300 hover:scale-120 active:scale-90 transition-all ease-in-out"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path
					d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
				/>
			</svg>
		</button>

		<!-- Right Arrow -->
		<button
			onclick={next}
			onkeydown={(e) => handleKeydown(e, next)}
			aria-label="Next slide"
			class="absolute top-1/1 left-5/9 -translate-y-1/2 z-2 p-1 rounded-full invisible sm:visible"
		>
			<svg
				class="w-8 h-8 fill-gray-100 hover:fill-gray-300 hover:scale-120 active:scale-90 transition-all ease-in-out"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
			</svg>
		</button>
	{/if}
</div>
