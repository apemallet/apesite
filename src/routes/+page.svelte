
<script>
  let title = "apemallet";
  let tagline = "we make things! ver 0.0.3";

  let scrollY = 0;
  function handleScroll() {
    scrollY = window.scrollY;
  }
</script>

<svelte:window on:scroll={handleScroll}/>

  
<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #ff7e5f, #feb47b);
    color: white;
    text-align: center;
    font-family: 'Arial', sans-serif;
  }

  .title {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s ease;
    font-size: 4rem;
    /* font-family: 'Libre Barcode 128 Text', system-ui; */
    font-family: 'Courier New', Courier, monospace;
    z-index: 10;
  }

  .title-shrink {
    position: fixed;
    top: 1rem;
    left: 1rem;
    transform: translate(0, 0);
    font-size: 1.5rem;
    /* font-family: 'Courier New', Courier, monospace; */
  }

  .spacer {
    height: 200vh;
  }

  p {
    font-size: 1.5rem;
    margin-top: 10px;
    opacity: 0.8;
  }

  button {
    margin-top: 30px;
    padding: 15px 30px;
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    background: #b3ff00;
    color: rgb(0, 0, 0);
    cursor: pointer;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }

  button:hover {
    background: #92c800;
    transform: scale(1.1);
  }
</style>

<main>
  <h1 class="title" class:title-shrink={scrollY > 100}>{title}</h1>

  <div class="spacer">
  </div>
  <p>{tagline}</p>
  <button on:click={() => alert('grats on the banana')}>eat banana</button>
  <div class="spacer">
  </div>
</main>
  


<!-- Visit https://svelte.dev/docs/kit to read the documentation -->
