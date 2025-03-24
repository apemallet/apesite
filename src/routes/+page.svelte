<script>
  import AboutUs from "$lib/components/about-us.svelte";
  let title = "apemallet";
  let tagline = "we make things! ver 0.0.3";

  let scrollY = 0;

  function handleScroll() {
    scrollY = window.scrollY;
  }
</script>

<svelte:window on:scroll={handleScroll} />

<nav>
  <div class="nav-container">
    <div class="nav-title" class:visible={scrollY > 100}>
      {title}
    </div>
    <div class="nav-links" class:shifted={scrollY > 100}>
      <div class="nav-item">about us</div>
      <div class="nav-item">our projects</div>
      <div class="nav-item">contact us</div>
    </div>
  </div>
</nav>


<div class="bg-linear-to-b from-amber-200 to-orange-300 font-[Courier-New,Courier,monospace] text-white">
  <h1 class="title" class:title-shrink={scrollY > 100}>{title}</h1>
  <div class="h-dvh"></div>

  <AboutUs />
</div>

<!-- Visit https://svelte.dev/docs/kit to read the documentation -->

<style>
  nav {
    position: fixed;
    display: flex;
    justify-content: space-between;
    top: 0;
    left: 0;
    height: 8%;
    width: 100%;
    background-color: rgb(0, 0, 0, 0);
    align-items: center;
    padding: auto;
    z-index: 100;
    font-family: "Courier New", Courier, monospace;
    color: white;
  }

  .nav-container {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    margin-top: 1rem;
    gap: 2rem;
  }

  .nav-title {
    font-size: 1.5rem;
    visibility: hidden;
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;
    transition: transform 0.4s ease; /* animate horizontal movement */
    transform: translateX(0); /* default position */
  }

  .nav-links.shifted {
    transform: translateX(
      0
    );
  }

  .nav-links:not(.shifted) {
    transform: translateX(-100px);
  }

  .nav-item {
    font-size: 1rem;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .nav-item:hover {
    color: darkred;
  }

  .title {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s ease;
    font-size: 4rem;
    font-family: "Courier New", Courier, monospace;
    z-index: 10;
  }

  .title-shrink {
    position: fixed;
    top: 1rem;
    left: 1rem;
    transform: translate(0, 0);
    font-size: 1.5rem;
  }

</style>
