<script>
    export let name;
    export let stack;
    export let description;
    export let url;
</script>

<a target='_blank' href='{url}'>
    <div class='rounded-md bg-lighter-gray w-72 h-72 text-center flex flex-col items-center justify-center flex-wrap hover:bg-[#8c8c8c]'>
        <h1 class='text-blue-300 text-xl font-medium'>{name}</h1>
        <h3 class='text-accent w-11/12 overflow-auto break-words'>{stack}</h3>
        <p class='w-4/5'>{description}</p>
    </div>
</a>