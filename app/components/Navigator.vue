<template>
  <nav class="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
    <div class="flex flex-col gap-4">
      <button
        v-for="section in ['intro', 'education', 'work', 'projects', 'connect']"
        :key="section"
        @click="scrollToSection(section)"
        :class="[
          'w-2 h-8 rounded-full transition-all duration-500',
          activeSection === section
            ? 'bg-foreground'
            : 'bg-muted-foreground/30 hover:bg-muted-foreground/60',
        ]"
        :aria-label="`Navigate to ${section}`"
      />
    </div>
  </nav>
</template>

<script lang="ts" setup>
defineProps<{
  activeSection: string;
}>();

const scrollToSection = (section: string) => {
  document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
};
</script>
