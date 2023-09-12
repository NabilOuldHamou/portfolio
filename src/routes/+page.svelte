<script>
import FaGithub from 'svelte-icons/fa/FaGithub.svelte'
import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
import FaRegFileAlt from 'svelte-icons/fa/FaRegFileAlt.svelte';
</script>

<div class='flex flex-col justify-center items-center font-bold text-center h-full cursor-default'>
    <div class='w-3/5'>
        <h1 class='lg:text-6xl md:text-4xl'>Hi I'm Nabil 👋</h1>
        <p class='lg:text-5xl md:text-3xl'>A junior <span class='text-accent'>Computer Scientist</span> 🖥️ and a <span class='text-accent'>Back-End Development</span> enthusiast 🚀 Currently based in France 🇫🇷</p>
    </div>
    
    <div class='w-3/5 h-14 flex mt-20 justify-center'>
        <a class='hover:text-accent cursor-pointer' href="https://github.com/nabilouldhamou" target="_blank"><FaGithub /></a>
        <a class='hover:text-accent cursor-pointer' href="https://twitter.com/nbil_o" target="_blank"><FaTwitter /></a>
        <a class='hover:text-accent cursor-pointer' href="/CV_ALTERNANCE.pdf"><FaRegFileAlt /></a>
    </div>
</div>