<script>
	import { base } from "$app/paths";
	import KeenSlider from "keen-slider";
	import { onMount } from "svelte";

	let sliderRef;
	let slider;

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

		return () => slider.destroy();
	});
</script>

<div class="w-full">
	<div bind:this={sliderRef} class="keen-slider overflow-visible!">
		{#each products as prod}
			<div
				class="keen-slider__slide grid sm:grid-cols-[2fr_1fr] grid-cols-1 items-center gap-4 sm:gap-10 px-4"
			>
				<!-- Not sure if im missing anything or if you had plans to do implement
				them but im p sure text-container and image-container do nothing here. 
				Same case as with the text-container in about-us.svelte -->
				<div
					class="text-container self-center items-center sm:items-start flex flex-col gap-2 sm:gap-4"
				>
					<h1 class="text-6xl font-bold">
						{prod.name}
					</h1>
					<p class="text-xl text-gray-100 font-bold text-center sm:text-left">
						{prod.description}
					</p>
					<button
						class="group bg-white rounded-full p-4 hover:bg-black transition-all ease-in cursor-pointer max-w-md"
					>
						<span
							class="text-black group-hover:text-white ease-in transition-all"
						>
							Learn more
						</span>
					</button>
				</div>
				<div class="img-container self-center mx-auto">
					<img
						src={base + prod.image}
						alt={prod.name}
						class="rounded-4xl size-80"
					/>
				</div>
			</div>
		{/each}
	</div>
</div>
