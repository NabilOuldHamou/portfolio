<script lang="ts" setup>
import { MoonIcon, SunIcon } from "lucide-vue-next";

const colorMode = useColorMode();

console.log(colorMode.value);
</script>

<template>
  <Button
    variant="outline"
    aria-label="Toggle theme"
    @click="
      colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
    "
  >
    <SunIcon
      v-if="colorMode.value === 'dark'"
      class="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
    />

    <MoonIcon
      v-else
      class="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
    />
  </Button>
</template>
