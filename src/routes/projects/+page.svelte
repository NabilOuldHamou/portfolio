<script>
    import Project from '$lib/components/Project.svelte';
    import projects from '$lib/Projects'
</script>

<div class='flex flex-col items-center'>
    
    <h1 class='text-accent text-4xl font-bold my-4'>Projects</h1>
    
    <div class='flex flex-wrap gap-4 w-4/5 mb-6 items-center justify-center'>
        {#each projects as project}
            <Project name={project.name} stack={project.stack} description={project.description} url={project.url} />
        {/each}
    </div>
</div>