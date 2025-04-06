<script>
  import AboutUs from "$lib/components/about-us.svelte";
  import Display from "$lib/components/display.svelte";
  let title = "apemallet";

  let scrollY = 0;

  function handleScroll() {
    scrollY = window.scrollY;
  }
</script>

<svelte:window on:scroll={handleScroll} />

<nav
  class={`fixed z-10 top-0 left-0 w-full transition-all ease-out font-[Baloo]
  ${scrollY > 50 ? "bg-black shadow-md py-1" : "bg-transparent py-4"}`}
>
  <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <div class="text-4xl text-white">{title}</div>
    <ul class="flex font-[Poppins] space-x-6 text-white text-xl">
      <li>
        <a href="#display" class="hover:text-gray-200"
          >Home</a
        >
      </li>
      <li>
        <a href="#about-us" class="hover:text-gray-200"
          >About</a
        >
      </li>
      <li>
        <a href="#contact" class="hover:text-gray-200"
          >Contact</a
        >
      </li>
    </ul>
  </div>
</nav>

<div
  class="bg-linear-to-b from-sky-300 to-teal-500 font-[Poppins] text-white"
>
  <div class="spacer min-h-40"></div>
  <section id="display">
    <Display />
  </section>
  <section id="about-us">
    <div class="spacer min-h-lvh"></div>
  </section>
  <section id="contact">
    <div class="spacer min-h-lvh"></div>
  </section>
</div>

<!-- Visit https://svelte.dev/docs/kit to read the documentation -->
