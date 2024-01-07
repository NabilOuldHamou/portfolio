<script lang="ts">
  import "../app.css";
  import Navbar from '$lib/components/Navbar.svelte';
  import { page } from '$app/stores';
</script>

<main>
  <Navbar path='{$page.url.pathname}' />
  <section class='content-container'>
    <slot />
  </section>
</main>