<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex flex-col items-center justify-center w-full">
	<h1 class="text-lg text-foreground font-bold">404</h1>
	<h3>{$page.error?.message}</h3>
</div>
