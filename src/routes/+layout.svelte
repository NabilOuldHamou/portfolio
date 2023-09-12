<script>
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

<style lang="postcss">
  :global(html) {
    font-family: theme(fontFamily.fira-code);
    background-color: theme(colors.dark-charcoal-gray);
    color: theme(colors.white-smoke);
  }
</style>