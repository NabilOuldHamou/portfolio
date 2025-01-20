<script lang="ts">
	import { Button } from '@/components/ui/button';
	import { Backpack, GithubLogo, LinkedinLogo } from 'radix-icons-svelte';
	import { TwitterLogo } from 'radix-icons-svelte';
	import { FileText } from 'radix-icons-svelte';
	import * as Card from '@/components/ui/card';
	import * as Avatar from '@/components/ui/avatar';
</script>

<div class="flex flex-col justify-center items-center h-full text-center cursor-default mt-20">
	<Card.Root class="max-w-xs sm:max-w-sm ease-in-out duration-500">
		<Card.Header class="flex items-center">
			<Card.Title>Nabil Ould Hamou</Card.Title>
			<Card.Description>Computer Science Student</Card.Description>
			<Avatar.Root class="h-32 w-32">
				<Avatar.Image src="https://github.com/nabilouldhamou.png" alt="@nabilouldhamou" />
				<Avatar.Fallback>NOH</Avatar.Fallback>
			</Avatar.Root>
		</Card.Header>
		<Card.Content>
			<p class="text-muted-foreground">
				Hi I am <span class="text-foreground font-bold">Nabil</span> 👋
			</p>
			<p class="text-muted-foreground">
				I am a <span class="text-foreground">computer science student</span> 👨‍💻 studying
				<span class="text-foreground">AI/ML and many other subjects</span> 🚀.
			</p>
		</Card.Content>
		<Card.Footer class="flex flex-col justify-center gap-2">
			<div class="flex justify-center flex-wrap gap-1.5 sm:gap-3">
				<Button href="https://air.oxyjen.io/nabil_oh" target="_blank" variant="outline">
					<Backpack class="mr-2 h-4 w-4" />
					Forgejo
				</Button>
				<Button href="https://github.com/nabilouldhamou" target="_blank" variant="outline">
					<GithubLogo class="mr-2 h-4 w-4" />
					Github
				</Button>
				<Button href="/CV.pdf" target="_blank" variant="outline">
					<FileText class="mr-2 h-4 w-4" />
					CV
				</Button>
				<Button href="https://twitter.com/nbil_o" target="_blank" variant="outline">
					<TwitterLogo class="mr-2 h-4 w-4" />
					Twitter
				</Button>
				<Button href="https://www.linkedin.com/in/nabil-ould-hamou-31181422b/" target="_blank" variant="outline">
					<LinkedinLogo class="mr-2 h-4 w-4" />
					LinkedIn
				</Button>
			</div>
			<p class="font-bold">Contact: ouldhamounabil@gmail.com</p>
		</Card.Footer>
	</Card.Root>
</div>
