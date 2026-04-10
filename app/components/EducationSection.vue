<script setup lang="ts">
const jobs = [
  {
    year: "2024-2026",
    role: "Master Intelligent Systems and Applications",
    company: "Université de Tours",
    description:
      "",
    type: "AI",
  },
  {
    year: "2021-2024",
    role: "Licence Informatique",
    company: "Université de Tours",
    description:
      "",
    type: "Comp. Science",
  },
];
</script>
<template>
  <section
    id="education"
    class="min-h-screen py-20 sm:py-32 snap-start snap-always animate-fade-in"
  >
    <div class="space-y-12 sm:space-y-16">
      <div
        class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
      >
        <h2 class="text-3xl sm:text-4xl font-light">Education</h2>
      </div>

      <div class="space-y-8 sm:space-y-12">
        <div
          v-for="(job, index) in jobs"
          :key="index"
          class="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
        >
          <div class="lg:col-span-2">
            <div
              class="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500"
            >
              {{ job.year }}
            </div>
          </div>

          <div class="lg:col-span-6 space-y-3">
            <div>
              <h3 class="text-lg sm:text-xl font-medium">{{ job.role }}</h3>
              <div class="text-muted-foreground">{{ job.company }}</div>
            </div>
            <p class="text-muted-foreground leading-relaxed max-w-lg">
              {{ job.description }}
            </p>
          </div>

          <div
            class="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0"
          >
            <span
              class="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
            >
              {{ job.type }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
