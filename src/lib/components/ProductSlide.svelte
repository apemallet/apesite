<script>
	import { base } from "$app/paths";
	let { product } = $props();
</script>

<div
	class="grid sm:grid-cols-[2fr_1fr] grid-cols-1 items-center gap-4 sm:gap-10 px-4 justify-items-center"
>
	<!-- Not sure if im missing anything or if you had plans to do implement
		them but im p sure text-container and image-container do nothing here. 
		Same case as with the text-container in about-us.svelte -->
	<div
		class="text-container px-10 sm:items-start flex flex-col gap-2 sm:gap-4"
	>
		<h1 class="text-6xl font-bold">{product.name}</h1>
		<p class="text-xl text-gray-100 font-semibold text-center sm:text-left">
			{product.description}
		</p>
		<button
			class="group bg-white rounded-full p-4 hover:bg-black transition-all ease-in cursor-pointer max-w-md"
		>
			<span
				class="text-black group-hover:text-white ease-in transition-all"
			>
				Learn more
			</span>
		</button>
	</div>

	<img
		src={base + product.image}
		alt={product.name}
		class="rounded-4xl size-80"
	/>
</div>
