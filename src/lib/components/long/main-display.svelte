<script>
  import { base } from "$app/paths";
  import { onMount } from "svelte";

  let img1Path = "images/smileMock-portrait.png";

  let long = {
    name: "Long",
    image: "images/long/long_icon.webp",
    description:
      "A free universal remote app with slick animations, custom theming, and seamless control across all your devices. Enjoy a smooth and intuitive user experience.",
    page: "long",
  };
</script>

<div class="grid grid-cols-2 justify-items-center min-h-lvh py-50">
  <div class="justify-items-center">
    <img
      src={base + long.image}
      alt="icon"
      class="object-contain aspect-auto w-40 rounded-4xl"
    />
    <h1 class="">{long.name}</h1>
    <p>{long.description}</p>
  </div>
  <img
    src={base + img1Path}
    alt="long"
    class="object-contain aspect-auto w-100"
  />
</div>
