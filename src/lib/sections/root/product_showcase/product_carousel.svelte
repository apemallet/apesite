<script lang="ts">
	import { products } from './product_list';
  import { onMount } from "svelte";

	import { type KeenSliderInstance } from "keen-slider";
  import CarouselCard from "./carousel_card.svelte";
  import KeenSlider from "keen-slider";

  let sliderLoaded = $state(false);
  let slider: KeenSliderInstance;
  let currentSlide = $state(0);
  let sliderRef: HTMLElement;

  onMount(() => {
    slider = new KeenSlider(sliderRef, {
      loop: true,
      slides: {
        perView: 1,
        spacing: 20,
      },
      detailsChanged: (s) => {
        s.slides.forEach((element: HTMLElement, idx: number) => {
          element.style.opacity = s.track.details.slides[idx].portion.toString();
        });
      },
      slideChanged: (s) => {
        currentSlide = s.track.details.rel;
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
</script>

<div class="w-full relative">
	<!-- until slider is loaded, just show the first product -->
	{#if !sliderLoaded}
		<CarouselCard product={products[0]} />
	{/if}

	<div bind:this={sliderRef} class="keen-slider overflow-visible! pb-15">
		{#each products.slice(0,3) as product, idx}
				<div class="keen-slider__slide opacity-0">
					{#if sliderLoaded}
						<!-- disable buttons so it can't be screen-read if not current slide -->
						<CarouselCard {product} buttonDisabled={currentSlide != idx} />
					{/if}
				</div>
		{/each}
	</div>

	<!-- navigation Arrows -->
	{#if sliderLoaded}
		<button
			onclick={prev}
			aria-label="Previous slide"
			class="absolute top-1/1 left-4/9 -translate-y-1/2 z-2 p-1 rounded-full invisible sm:visible"
		>
			<svg
				class="w-8 h-8 fill-gray-100 hover:fill-gray-300 hover:scale-120 active:scale-90 transition-all ease-in-out cursor-pointer"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path
					d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
				/>
			</svg>
		</button>
		<button
			onclick={next}
			aria-label="Next slide"
			class="absolute top-1/1 left-5/9 -translate-y-1/2 z-2 p-1 rounded-full invisible sm:visible"
		>
			<svg
				class="w-8 h-8 fill-gray-100 hover:fill-gray-300 hover:scale-120 active:scale-90 transition-all ease-in-out cursor-pointer"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
			</svg>
		</button>
	{/if}
</div>
