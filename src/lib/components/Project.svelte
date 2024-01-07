<script lang="ts">
    import * as Card from "@/components/ui/card";
    import {Button, buttonVariants} from "@/components/ui/button";
    import * as Dialog from "@/components/ui/dialog"
    import {EyeNone, GithubLogo} from "radix-icons-svelte";
    export let name: string;
    export let stack: string;
    export let shortDescription: string;
    export let description: string;
    export let url: string;
</script>

<Card.Root class="max-w-xs w-[320px]">
    <Card.Header>
        <Card.Title class="font-bold">{name}</Card.Title>
        <Card.Description>{stack}</Card.Description>
    </Card.Header>
    <Card.Content>
        <p>{shortDescription}</p>
    </Card.Content>
    <Card.Footer class="flex justify-between items-center">
        {#if url === ""}
            <Button disabled="true" variant="outline">
                <EyeNone class="mr-2 h-4 w-4" />
                Proprietary
            </Button>
            {:else }
            <Button href={url} target="_blank" variant="outline">
                <GithubLogo class="mr-2 h-4 w-4" />
                View on GitHub
            </Button>
        {/if}
        <Dialog.Root>
            <Dialog.Trigger class={buttonVariants({ variant: "default" })}>View More</Dialog.Trigger>
            <Dialog.Content>
                <Dialog.Header>
                    <Dialog.Title>{name}</Dialog.Title>
                    <Dialog.Description>{stack}</Dialog.Description>
                </Dialog.Header>
                <p>{description}</p>
                <Dialog.Footer>
                    {#if url === ""}
                        <Button disabled="true" variant="outline">
                            <EyeNone class="mr-2 h-4 w-4" />
                            Proprietary
                        </Button>
                    {:else }
                        <Button href={url} target="_blank" variant="outline">
                            <GithubLogo class="mr-2 h-4 w-4" />
                            View on GitHub
                        </Button>
                    {/if}
                </Dialog.Footer>
            </Dialog.Content>
        </Dialog.Root>
    </Card.Footer>
</Card.Root>