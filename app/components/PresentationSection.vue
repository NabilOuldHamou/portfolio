<script setup lang="ts">
import { MapPinIcon } from "lucide-vue-next";
</script>

<template>
  <header
    id="intro"
    class="min-h-screen flex items-center snap-start snap-always animate-fade-in"
  >
    <div class="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
      <div class="lg:col-span-3 space-y-6 sm:space-y-8">
        <div class="space-y-3 sm:space-y-2">
          <div class="text-sm text-muted-foreground font-mono tracking-wider">
            PORTFOLIO
          </div>
          <h1
            class="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight"
          >
            Nabil
            <br />
            <span class="text-muted-foreground">Ould Hamou</span>
          </h1>
        </div>

        <div class="space-y-6 max-w-md">
          <p class="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Computer science student and aspiring
            <span class="text-foreground"> AI</span>,<span
              class="text-foreground"
            >
              researcher</span
            >, working towards a<span class="text-foreground"> PhD</span>.
          </p>

          <div
            class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground"
          >
            <div class="flex items-center gap-2">
              <MapPinIcon class="w-4 h-4" />
              <div>🇫🇷 France - Tours</div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0"
      >
        <div class="space-y-4">
          <div class="text-sm text-muted-foreground font-mono">CURRENTLY</div>
          <div class="space-y-2">
            <div class="text-foreground">Masters 2 Student</div>
            <div class="text-muted-foreground">@ Université de Tours</div>
            <div class="text-xs text-muted-foreground">2021 — Present</div>
          </div>
        </div>

        <div class="space-y-4">
          <div class="text-sm text-muted-foreground font-mono">FOCUS</div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in [
                'AI/ML',
                'Data Science',
                'Web Development',
                'Software Engineering',
                'Services Architecture',
              ]"
              :key="skill"
              class="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
