<script lang="ts">
  import "../app.css";
  import Navbar from '$lib/components/Navbar.svelte';
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>Nabil Ould Hamou</title>
  <meta name="description" content="Portfolio of Nabil Ould Hamou." />

  <!-- Open Graph Meta Tags -->
  <meta property="og:title" content="Nabil Ould Hamou" />
  <meta property="og:description" content="Computer Science Student - AI/ML and more 🚀" />
  <meta property="og:image" content="https://nbiloh.me/favicon.png" />
  <meta property="og:url" content="https://nbiloh.me" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Nabil Ould Hamou" />
  <meta name="twitter:description" content="Computer Science Student - AI/ML and more 🚀" />
  <meta name="twitter:image" content="https://nbiloh.me/favicon.png" />
</svelte:head>



<main>
  <Navbar path='{$page.url.pathname}' />
  <section class='content-container'>
    <slot />
  </section>
</main>