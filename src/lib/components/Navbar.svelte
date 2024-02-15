<script lang="ts">
	import routes from '$lib/Routes';
	import LightSwitch from '@/components/LightSwitch.svelte';
	import HamburgerMenu from '@/components/HamburgerMenu.svelte';
	export let path: string;
</script>

<div class="h-14 w-full top-0 left-0 sticky flex justify-center items-center bg-background">
	<div class="pt-4 w-4/5 flex justify-between items-center">
		<a href="/" class="font-bold">nbiloh.me</a>
		<div
			class="hidden sm:visible sm:flex items-center justify-between sm:gap-x-8 gap-x-4 font-medium text-lg text-muted-foreground"
		>
			{#each routes as route}
				<a
					class={`cursor-pointer ${
						path == route.href ? 'text-foreground' : 'hover:text-foreground'
					}`}
					href={route.href}>{route.name}</a
				>
			{/each}
		</div>
		<HamburgerMenu {path} />
		<LightSwitch />
	</div>
</div>
