<script>
  import AboutUs from "$lib/components/about-us.svelte";
  import Display from "$lib/components/display.svelte"
  let title = "apemallet";

  let scrollY = 0;

  function handleScroll() {
    scrollY = window.scrollY;
  }
</script>

<svelte:window on:scroll={handleScroll} />

<nav
  class={`fixed top-0 left-0 w-full transition-all duration-300 font-[Courier-New,Courier,monospace]
  ${scrollY > 50 ? "bg-white shadow-md py-1" : "bg-transparent py-4"}`}
>
  <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <div class="text-xl font-bold text-gray-800">{title}</div>
    <ul class="flex space-x-6">
      <li>
        <a href="#display" class="font-bold text-gray-700 hover:text-blue-600">Home</a>
      </li>
      <li>
        <a href="#about-us" class="font-bold text-gray-700 hover:text-blue-600"
          >About</a
        >
      </li>
      <li>
        <a href="#" class="font-bold text-gray-700 hover:text-blue-600"
          >Contact</a
        >
      </li>
    </ul>
  </div>
</nav>

<div
  class="bg-linear-to-b from-sky-300 to-teal-500 font-[Courier-New,Courier,monospace] text-amber-200"
>
  <section id="display">
    <Display />
  </section>
  <section id="about-us">
    <AboutUs />
  </section>
</div>

<!-- Visit https://svelte.dev/docs/kit to read the documentation -->
