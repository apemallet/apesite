<script>
    let title = "apemallet";
    let tagline = "we make things! ver 0.0.3";
  </script>
  
  <style>
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background: linear-gradient(135deg, #ff7e5f, #feb47b);
      color: white;
      text-align: center;
      font-family: 'Arial', sans-serif;
    }
  
    h1 {
      font-size: 4rem;
      text-transform: uppercase;
      letter-spacing: 5px;
      text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
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
    <h1>{title}</h1>
    <p>{tagline}</p>
    <button on:click={() => alert('grats on the banana')}>eat banana</button>
  </main>
  


<!-- Visit https://svelte.dev/docs/kit to read the documentation -->
