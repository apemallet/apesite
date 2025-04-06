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
                spacing: 10,
            },
        });

        return () => slider.destroy();
    });
</script>

<div class="w-full">
    <div bind:this={sliderRef} class="keen-slider">
        {#each products as prod}
            <div
                class="keen-slider__slide grid sm:grid-cols-[2fr_1fr] grid-cols-1 items-center sm:px-90 py-50"
            >
                <div class="text-container sm:px-15 px-5 py-15">
                    <h1 class="text-6xl font-bold">
                        {prod.name}
                    </h1>
                    <p class="text-xl text-gray-100 font-bold py-5">
                        {prod.description}
                    </p>
                    <button
                        class="group bg-white rounded-full p-5 hover:bg-black transition-all ease-in cursor-pointer"
                    >
                        <span
                            class="text-black group-hover:text-white ease-in transition-all"
                            >Learn more</span
                        >
                    </button>
                </div>
                <div class="img-container flex justify-center items-center">
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
