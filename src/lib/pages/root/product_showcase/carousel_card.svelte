<script lang="ts">
  import { base } from "$app/paths";
	import { type Product } from "./product_list";
  let { product } : {product: Product} = $props();
</script>

<div
  class="grid sm:grid-cols-[2fr_1fr] grid-cols-1 place-items-center gap-10 px-4"
>
  <div class="px-10 sm:items-start flex flex-col gap-2 sm:gap-4">
    <h1 class="text-6xl font-bold text-center sm:text-left">{product.name}</h1>
    <p class="text-xl text-gray-100 font-semibold text-center sm:text-left">
      {product.description}
    </p>
    <button
      class="group bg-white rounded-full p-4 hover:bg-black active:bg-black active:scale-90 transition-all cursor-pointer max-w-md"
			onclick={() => {
				window.open(base + product.href, "_self");
			}}
    >
      <span
        class="text-black group-hover:text-white group-active:text-white ease-in transition-all"
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
