<script>
    import { base } from "$app/paths";
    let currentIndex = 0;

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

    function prev() {
        currentIndex = (currentIndex - 1 + products.length) % products.length;
    }

    function next() {
        currentIndex = (currentIndex + 1) % products.length;
    }
</script>

<div class="display py-25">
    <div class="grid grid-cols-[1fr_12fr_1fr] items-center gap-15">
        <button
            on:click={prev}
            class="group bg-white p-5 text-black hover:opacity-50 ease-in transition-all cursor-pointer"
        >
            <span
                class="inline-block transition-transform ease-in group-hover:scale-150 group-active:scale-100"
            >
                ◄
            </span>
        </button>
        <div class="grid sm:grid-cols-2 grid-cols-1 w-full items-center">
            <div class="text-container sm:px-15 py-15">
                <h1 class="text-6xl font-bold">
                    {products[currentIndex].name}
                </h1>
                <p class="text-xl text-gray-100 font-bold py-5">{products[currentIndex].description}</p>
                <button class="group bg-white rounded-full p-5 hover:bg-black transition-all ease-in cursor-pointer">
                    <span class="text-black group-hover:text-white ease-in transition-all">Learn more</span>
                </button>
            </div>
            <img
                src={base + products[currentIndex].image}
                alt={products[currentIndex].name}
                class="rounded-4xl"
            />
        </div>
        <button
            on:click={next}
            class="group bg-white p-5 text-black hover:opacity-50 ease-in transition-all cursor-pointer"
        >
            <span
                class="inline-block transition-transform ease-in group-hover:scale-150 group-active:scale-100"
            >
                ►
            </span>
        </button>
    </div>
</div>
