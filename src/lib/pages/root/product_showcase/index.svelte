<script lang="ts">
  import { slide } from "svelte/transition";

  import HangRibbon from "$lib/components/hangRibbon.svelte";
	import ProductCarousel from "./product_carousel.svelte";
  import Divider from "$lib/components/divider.svelte";
	import ExpandedView from "./expanded_view.svelte";

  let showAllProducts = $state(false);

  function toggleAllProducts() {
    showAllProducts = !showAllProducts;
  }

	// TODO: Change to svelte5 Spring since this is svelte4 deprecated
  import { spring } from 'svelte/motion';
  const viaPos = spring(50);
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

<Divider viaPosition={$viaPos}/>

<div class="relative">
  <button id="ribbonButton" class="absolute right-4 md:right-32 md:flex cursor-pointer"
		onmouseenter={() => viaPos.set(90)}
		onmouseleave={() => viaPos.set(50)}
    onfocus={() => viaPos.set(90)}
    onblur={() => viaPos.set(50)}
		style:opacity="{$viaPos / 100}"
		style:height="{($viaPos)/25}rem"
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

