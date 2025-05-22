<script lang="ts">
  import { base } from "$app/paths";
	import { type Product } from "./product_list";
  let { product, buttonDisabled = false } : {product: Product, buttonDisabled?: boolean} = $props();
</script>

<div
  class="grid sm:grid-cols-[2fr_1fr] grid-cols-1 place-items-center gap-10 px-4"
>
  <div class="px-10 sm:items-start flex flex-col gap-2 sm:gap-4">
    <h1 class="text-6xl font-bold text-center sm:text-left">{product.name}</h1>
    <p class="text-xl text-slape font-semibold text-center sm:text-left">
      {product.description}
    </p>
    <button
      class="group bg-slape rounded-full p-4 hover:bg-apeium-surfacetintier active:bg-apeium-surfacetint active:scale-90 transition-all cursor-pointer max-w-md"
			disabled={buttonDisabled}
			onclick={() => {
				window.open(base + product.href, "_self");
			}}
    >
      <span
        class="text-apeium-surface group-hover:text-slape group-active:text-slape ease-in transition-all"
      >
        Learn more
      </span>
    </button>
  </div>

  <img
    src={base + product.image}
    alt={product.name}
    class="rounded-4xl aspect-square"
  />
</div>
