<script>
    import Project from '$lib/components/Project.svelte';
    import projects from '$lib/Projects'
</script>

<div class='flex flex-col justify-center items-center pt-6'>
    <div class='w-4/5 lg:w-3/5'>
        <h1 class='md:text-4xl text-3xl pb-5 font-bold'>Projects</h1>

    </div>
    
    <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6'>
        {#each projects as project}
            <Project name={project.name} stack={project.stack} shortDescription={project.shortDesc} description={project.description} url={project.url} />
        {/each}
    </div>
</div>