<script lang="ts">
import FaGithub from 'svelte-icons/fa/FaGithub.svelte'
import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
import FaRegFileAlt from 'svelte-icons/fa/FaRegFileAlt.svelte';
</script>

<div class='flex flex-col justify-center items-center h-full font-bold text-center cursor-default'>
    <div class='w-3/5'>
        <h1 class='text-xl sm:text-4xl'>Hi I'm Nabil 👋</h1>
        <p class='text-lg sm:text-2xl'>A <span class='text-accent'>Computer Science</span> student 🧑🏽‍💻 interested in <span class='text-accent'>embedded systems engineering</span> 🔋 Currently based in France 🇫🇷</p>
    </div>
    
    <div class='w-3/5 h-10 flex mt-8 justify-evenly'>
        <a class='hover:text-accent cursor-pointer' href="https://github.com/nabilouldhamou" target="_blank"><FaGithub /></a>
        <a class='hover:text-accent cursor-pointer' href="https://twitter.com/nbil_o" target="_blank"><FaTwitter /></a>
        <a class='hover:text-accent cursor-pointer' href="/CV.pdf" target="_blank"><FaRegFileAlt /></a>
    </div>
</div>