<script>
  import { base } from "$app/paths";
	import { products } from './product_list.ts';
</script>

<div
  class="grid grid-cols-2 sm:grid-cols-4 gap-5 gap-y-15 pt-15 max-w-7xl px-5 sm:px-0"
>
  {#each products as product (product.name)}
    <div class="grid grid-cols-1 gap-y-2 justify-items-center">
      <image
        src={base + product.image}
        alt={product.name}
				width="200"
				height="200"
        class="rounded-4xl size-40 cursor-pointer transition-all ease-in-out hover:scale-105 active:scale-90"
      />
      <h1 class="font-semibold text-2xl text-center">
        {product.name}
      </h1>
      <p class="font-normal text-center">{product.description}</p>
    </div>
  {/each}
</div>

