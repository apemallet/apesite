<script>
    import { base } from "$app/paths";
    let { products } = $props();
</script>

<h1 class="text-4xl font-semibold text-center text-gray-700">Products</h1>

<div
    class="grid grid-cols-2 sm:grid-cols-4 gap-5 gap-y-15 pt-15 max-w-7xl px-5 sm:px-0"
>
    {#each products as product}
        <div class="grid grid-cols-1 gap-y-2 justify-items-center">
            <a href={`/${product.page}`}>
                <img
                    src={base + product.image}
                    alt={product.name}
                    class="rounded-4xl size-40 cursor-pointer transition-all ease-in-out hover:scale-105"
                />
            </a>
            <h1 class="font-semibold text-2xl text-center text-gray-700">
                {product.name}
            </h1>
            <p class="font-normal text-center text-gray-600">
                {product.description}
            </p>
        </div>
    {/each}
</div>
