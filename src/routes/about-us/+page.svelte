<script>
  import { onMount, tick } from "svelte";
  
  let scrollY = 0;
  
  function handleScroll() {
    scrollY = window.scrollY;
  }
</script>

<svelte:window on:scroll={handleScroll} />

<main>
  <div class="header">
    <h1>About Us</h1>
    <p>Learn why Apemallet has been so dominant for years.</p>
  </div>
  
  <div class="content-container">
    <div class="content-box">
      <div class="image-container">
        <img src="/favicon.png" alt="Mason" />
      </div>
      <div class="text-container">
        <h2>Masoniis</h2>
        <p>Insert important mason bio here</p>
      </div>
    </div>
    
    <div class="content-box reverse">
      <div class="image-container">
        <img src="/favicon.png" alt="Our Values" />
      </div>
      <div class="text-container">
        <h2>Simon</h2>
        <p>Insert important simon bio here</p>
      </div>
    </div>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(135deg, #ff7e5f, #feb47b);
    color: white;
    font-family: "Arial", sans-serif;
    min-height: 100vh;
    padding: 2rem;
  }
  
  .header {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  h1 {
    margin-top: 4rem;
    font-size: 3rem;
    font-family: "Courier New", Courier, monospace;
  }
  
  p {
    font-size: 1.2rem;
    margin-top: 1rem;
    line-height: 1.6;
  }
  
  .content-container {
    width: 100%;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
  
  .content-box {
    display: flex;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .content-box.reverse {
    flex-direction: row-reverse;
  }
  
  .image-container {
    flex: 1;
    min-width: 200px;
  }
  
  .image-container img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    display: block;
    border-radius: 50%;
    margin: auto; 
    border: 3px solid white; 
  }
  
  .text-container {
    flex: 2;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .text-container h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 768px) {
    .content-box,
    .content-box.reverse {
      flex-direction: column;
    }
    
    .image-container {
      min-height: 200px;
    }
  }
</style>