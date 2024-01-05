<script lang="ts">
    export let name: string;
    export let stack: string;
    export let description: string;
    export let url: string;
</script>

<a target='_blank' href='{url}'>
    <div class='rounded-md border border-gray-200 max-w-xl text-center flex flex-col items-center justify-center flex-wrap hover:border-accent transition ease-in-out duration-500'>
        <h1 class='text-blue-300 text-xl font-medium'>{name}</h1>
        <h3 class='text-accent w-11/12 break-words'>{stack}</h3>
        <p class='w-4/5'>{description}</p>
    </div>
</a>