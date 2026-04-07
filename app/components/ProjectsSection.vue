<script setup lang="ts">
const projects = [
  {
    year: "2026",
    role: "Simple \"vampire survivor\"",
    company: "Personal Project",
    description:
      "Simple game with Bevy to continue my learning of the Rust programming language.",
    tech: ["Rust", "Bevy"],
  },
  {
    year: "2025",
    role: "EEG Classifier",
    company: "University Project",
    description:
      "EEG signal classification with a complete pre-processing pipeline to ready the signal for use.",
    tech: ["PyTorch", "SKLearn", "Pandas"],
  },
  {
    year: "2024",
    role: "bret-à-porter",
    company: "Project: INRAE",
    description:
      "A web interface created to assist INRAE biologists in setting up BRET-type experiments.",
    tech: ["SvelteKit", "GoLang", "Docker"],
  },
];
</script>
<template>
  <section
    id="projects"
    class="min-h-screen py-20 sm:py-32 snap-start snap-always animate-fade-in"
  >
    <div class="space-y-12 sm:space-y-16">
      <div
        class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
      >
        <h2 class="text-3xl sm:text-4xl font-light">Projects</h2>
      </div>

      <div class="space-y-8 sm:space-y-12">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
        >
          <div class="lg:col-span-2">
            <div
              class="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500"
            >
              {{ project.year }}
            </div>
          </div>

          <div class="lg:col-span-6 space-y-3">
            <div>
              <h3 class="text-lg sm:text-xl font-medium">{{ project.role }}</h3>
              <div class="text-muted-foreground">{{ project.company }}</div>
            </div>
            <p class="text-muted-foreground leading-relaxed max-w-lg">
              {{ project.description }}
            </p>
          </div>

          <div
            class="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0"
          >
            <span
              v-for="tech in project.tech"
              :key="tech"
              class="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
