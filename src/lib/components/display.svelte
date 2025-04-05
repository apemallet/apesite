<script>
    let currentIndex = 0;

    let products = [
        { name: "Product 1", image: "/images/p1.jpg" },
        { name: "Product 2", image: "/images/p2.jpg" },
        { name: "Product 3", image: "/images/p3.jpg" },
    ];

    function prev() {
        currentIndex = (currentIndex - 1 + products.length) % products.length;
    }

    function next() {
        currentIndex = (currentIndex + 1) % products.length;
    }
</script>

<div class="display bg-linear-to-b from-sky-300 to-teal-500">
    <div class="relative w-full max-w-md mx-auto mt-10">
        <!-- Arrows -->
        <button
            on:click={prev}
            class="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100"
        >
            ←
        </button>
        <button
            on:click={next}
            class="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100"
        >
            →
        </button>

        <!-- Product display -->
        <div class="relative overflow-hidden h-72 rounded-lg shadow-md">
            {#each products as product, i}
                <div
                    class={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out 
                  ${i === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        class="w-full h-full object-cover rounded-lg"
                    />
                    <div
                        class="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2 font-bold"
                    >
                        {product.name}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
