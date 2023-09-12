<script>
    import routes from '$lib/Routes'
    export let path;
</script>

<div class='h-14 w-full top-0 left-0 sticky flex justify-center items-center bg-dark-charcoal-gray'>
    <div class='pt-4 w-4/5 flex justify-between'>
        <img alt="Logo" src="/images/console.png" class='w-12 h-12' />
        <div class='flex items-center justify-between gap-x-8 font-medium text-lg'>
            {#each routes as route}
                <a class={`cursor-pointer ${path === route.href ? 'text-accent' : 'hover:text-accent'}`} href={route.href}>{route.name}</a>
            {/each}
        </div>
    </div>
</div>