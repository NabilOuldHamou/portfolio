const projects = [
    {
        "name": "Portfolio",
        "stack": ["SvelteKit", "TypeScript", "TailwindCSS"],
        "shortDesc": "Personal portfolio made using SvelteKit for learning purposes.",
        "description": "This project is the website that you are actually using. This is my personal portfolio and used " +
            "this project as an occasion to learn SvelteKit. In order to have an easier time with the design and make something " +
            "good looking I also used TailwindCSS and Shadcn-svelte which is a binding for Shadcn/ui in Svelte. This project was " +
            "the perfect occasion for me to learn and get more familiar with SvelteKit which is now my favorite framework for web developpment.",
        "url": "https://github.com/nabilouldhamou/portfolio"
    },
    {
        "name": "Green Plates",
        "stack": ["Go", "GinGonic", "SvelteKit", "TypeScript"],
        "shortDesc": "Recipe website with custom made backend using Go.",
        "description": "Green Plates is a recipe sharing website made in collaboration with my friend @BenGregory23. " +
            "This website is also made with SvelteKit for the frontend but also features a custom made high performance backend using Go and GinGonic. " +
            "The website is still in a work in progress but the backend 99% done, only missing file fetching after the files are uploaded to the server.",
        "url": "https://github.com/NabilOuldHamou?tab=repositories&q=green-plates&type=&language=&sort="
    },
    {
        "name": "AnimeWorld",
        "stack": ["Symfony 6", "PHP", "Nginx"],
        "shortDesc": "University group project for my Web Server Programming class.",
        "description": "For my Web Server Programming class, we were tasked with creating a website using Symfony 6 and other libraries, " +
            "we decided to make an anime rating website, where users can create their own accounts are rate animes using a grade from 0 to 5 and also leave a comment. " +
            "This project was the occasion for me to endorse a bit as a group leader by planning and taking care of the GitHub repository by giving some rules to follow to not compromise the repository. " +
            "This was also the occasion for me to work once again on deploying a website on a Linux VPS by using Nginx and having to come up with the configuration needed for our website and also configure mailer, DNS and other domain related stuff.",
        "url": "https://github.com/luxray555/projetsymfony"
    },
    {
        "name": "EMG reader",
        "stack": ["C", "Arduino"],
        "shortDesc": "EMG reader for a friend in Biomedical Masters.",
        "description": "A friend in Biomedical Masters degree asked for my help to conceive a program, that would allow him to read the data from EMG using an Arduino board. " +
            "I proceeded to write a program that can read the data from the EMG and send it to a computer where that data can be read and processed accordingly. " +
            "My friend did not release the source code thus the project is considered proprietary.",
        "url": ""
    },
    {
        "name": "bret-a-porter",
        "stack": ["SvelteKit", "Docker"],
        "shortDesc": "App to create well plates schemas and protocols for biologists.",
        "description": "bret-a-porter is an app made for INRAE, a french research institute. The goal is the simplify the creation of well plates and protocols for biologists" +
            "and parsing of the raw data coming out of the machines so it can be normalized and used for statistics or other research purposes.",
        "url": ""
    }
]

export default projects;
