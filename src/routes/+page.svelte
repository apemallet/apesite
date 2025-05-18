<script>
  import Display from "$lib/components/sections/product_carousel/index.svelte";
  import AboutUs from "$lib/components/sections/about_us.svelte";
  import Founders from "$lib/components/sections/founders.svelte";
  import Contact from "$lib/components/sections/contact.svelte";
  import Main from "$lib/components/sections/main.svelte";
  import Divider from "$lib/components/divider.svelte";
</script>

<div class="font-poppins overflow-hidden">
  <!-- INFO: main "APEMALLET" section -->
  <div
    class="relative bg-gradient-to-tl from-apeium-surface via-apeium-surfacetint to-apeium-surfacetintier"
  >
    <div class="max-w-7xl mx-auto">
      <section id="home">
        <Main />
      </section>
    </div>
    <div
      class="absolute inset-0 bg-[url(/svg/grain.svg)] opacity-10 brightness-100 contrast-150"
    ></div>
  </div>

  <!-- INFO: product carousel -->
  <div class="relative bg-apeium-surface text-gray-100">
    <div
      class="absolute inset-0 bg-[url(/svg/grain.svg)] opacity-20 brightness-50 contrast-150"
    ></div>
    <section id="products">
      <Divider />
      <div class="max-w-7xl mx-auto py-24 self-center">
        <Display />
      </div>
      <Divider />
    </section>
  </div>

  <!-- INFO: about -->
  <div class="bg-apeium-surface text-gray-100">
    <section id="about-us">
      <div class="mx-auto py-4 self-center flex justify-center">
        <AboutUs />
      </div>
    </section>
  </div>

  <!-- INFO: founders -->
  <section id="founders">
    <Founders />
  </section>

  <!-- INFO: contact -->
  <div class="bg-apecent-surface text-apeium-surface">
    <div class="mx-auto py-4 self-center flex justify-center">
      <section id="contact">
        <Contact />
      </section>
    </div>
  </div>
</div>
