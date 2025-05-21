<script lang="ts">
  import { slide } from "svelte/transition";

  import HangRibbon from "$lib/components/hangRibbon.svelte";
	import ProductCarousel from "./product_carousel.svelte";
  import Divider from "$lib/components/divider.svelte";
	import ExpandedView from "./expanded_view.svelte";

	// Used for animating the ribbon height/opacity and the gradient viaPosition
  import { Spring } from 'svelte/motion';
  const spring = new Spring(50, {
			stiffness: 0.2,
			damping: 0.25
		});

  let showAllProducts = $state(false);
	const toggleAllProducts = () => showAllProducts = !showAllProducts;
</script>

<div class="max-w-7xl mx-auto py-24 self-center">
	<ProductCarousel />

  {#if showAllProducts}
    <div
      class="pt-16"
      transition:slide
    >
      <ExpandedView />
    </div>
  {/if}
</div>

<Divider viaPosition={spring.current}/>

<div class="relative">
  <button id="ribbonButton" class="absolute right-4 md:right-32 md:flex cursor-pointer"
		onmouseenter={() => spring.target = 90}
		onmouseleave={() => spring.target = 50}
    onfocus={() => spring.target = 90}
    onblur={() => spring.target = 50}
		style:opacity="{spring.current / 100}"
		style:height="{(spring.current)/25}rem"
    onclick={toggleAllProducts}
  >
    <div class="grid place-items-center">
      <p class="text-apecent-surfacetint text-nowrap">
        {#if !showAllProducts}
          See more
        {:else}
          See less
        {/if}
      </p>
    </div>
    <HangRibbon/>
  </button>
</div>

