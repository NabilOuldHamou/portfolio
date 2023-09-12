<script>
    import Project from '$lib/components/Project.svelte';
    import projects from '$lib/Projects'
</script>

<div class='flex flex-col items-center'>
    
    <h1 class='text-accent text-4xl font-bold my-10'>Projects</h1>
    
    <div class='grid gap-4 grid-cols-3 grid-rows-2'>
        {#each projects as project}

            <Project name={project.name} stack={project.stack} description={project.description} url={project.url} />

        {/each}
    </div>
</div>