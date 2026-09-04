<script setup lang="ts">
import { MoonIcon, SunIcon } from "lucide-vue-next";

const socials = [
  {
    name: "GitHub",
    handle: "@NabilOuldHamou",
    url: "https://github.com/NabilOuldHamou",
  },
  {
    name: "LinkedIn",
    handle: "@NabilOuldHamou",
    url: "https://www.linkedin.com/in/nabil-ould-hamou-31181422b/",
  },
  { name: "CV", handle: "Click here to open", url: "/CV.pdf" },
];
</script>
<template>
  <section
    id="connect"
    class="min-h-screen flex flex-col justify-between snap-start snap-always animate-fade-in"
  >
    <div class="py-20 sm:py-32">
      <div class="grid lg:grid-cols-2 gap-12 sm:gap-16">
        <div class="space-y-6 sm:space-y-8">
          <h2 class="text-3xl sm:text-4xl font-light">Let's Connect</h2>

          <div class="space-y-6">
            <p class="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              If my profile interests you, feel free to reach out via email
            </p>

            <div class="space-y-4">
              <NuxtLink
                to="mailto:ouldhamounabil@gmail.com"
                class="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
              >
                <span class="text-base sm:text-lg"
                  >ouldhamounabil@gmail.com</span
                >
                <svg
                  class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="space-y-6 sm:space-y-8">
          <div class="text-sm text-muted-foreground font-mono">MORE</div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <NuxtLink
              v-for="social in socials"
              :key="social.name"
              :to="social.url"
              target="_blank"
              class="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
            >
              <div class="space-y-2">
                <div
                  class="text-foreground group-hover:text-muted-foreground transition-colors duration-300"
                >
                  {{ social.name }}
                </div>
                <div class="text-sm text-muted-foreground">
                  {{ social.handle }}
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <footer class="py-12 sm:py-16 border-t border-border">
      <div
        class="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-6 sm:gap-8"
      >
        <div class="flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
    </footer>
  </section>
</template>
