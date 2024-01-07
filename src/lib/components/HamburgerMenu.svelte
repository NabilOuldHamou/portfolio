<script lang="ts">
    import { Button } from "@/components/ui/button";
    import * as Drawer from "@/components/ui/drawer";
    import {HamburgerMenu} from "radix-icons-svelte";
    import routes from "@/Routes";
    export let path;
</script>

<Drawer.Root>
    <Drawer.Trigger asChild let:builder>
        <Button class="sm:hidden" variant="ghost" builders={[builder]}><HamburgerMenu class="w-6 h-6" /></Button>
    </Drawer.Trigger>
    <Drawer.Content>
        <div class="mx-auto w-full max-w-sm mb-10">
            <Drawer.Header>
                <Drawer.Title>nbiloh.me</Drawer.Title>
            </Drawer.Header>
            <div class="p-4 pb-0">
                <div class="flex flex-col gap-4 items-center justify-center space-x-2 text-muted-foreground">
                    {#each routes as route}
                        <Drawer.Close asChild let:builder>
                            <Button builders={[builder]} variant="ghost" class={`cursor-pointer ${path === route.href ? 'text-foreground font-bold' : 'hover:text-foreground'}`} href={route.href}>{route.name}</Button>
                        </Drawer.Close>
                    {/each}
                </div>
            </div>
        </div>
    </Drawer.Content>
</Drawer.Root>