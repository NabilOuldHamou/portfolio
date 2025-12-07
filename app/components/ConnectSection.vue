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
        class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8"
      >
        <div class="flex items-center gap-4">
          <NuxtLink to="https://air.oxyjen.io" target="_blank">
            <Button variant="outline">
              <svg
                viewBox="0 0 24 24"
                class="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.209 4.603c-.247 0-.525.02-.84.088-.333.07-1.28.283-2.054 1.027C-.403 7.25.035 9.685.089 10.052c.065.446.263 1.687 1.21 2.768 1.749 2.141 5.513 2.092 5.513 2.092s.462 1.103 1.168 2.119c.955 1.263 1.936 2.248 2.89 2.367 2.406 0 7.212-.004 7.212-.004s.458.004 1.08-.394c.535-.324 1.013-.893 1.013-.893s.492-.527 1.18-1.73c.21-.37.385-.729.538-1.068 0 0 2.107-4.471 2.107-8.823-.042-1.318-.367-1.55-.443-1.627-.156-.156-.366-.153-.366-.153s-4.475.252-6.792.306c-.508.011-1.012.023-1.512.027v4.474l-.634-.301c0-1.39-.004-4.17-.004-4.17-1.107.016-3.405-.084-3.405-.084s-5.399-.27-5.987-.324c-.187-.011-.401-.032-.648-.032zm.354 1.832h.111s.271 2.269.6 3.597C5.549 11.147 6.22 13 6.22 13s-.996-.119-1.641-.348c-.99-.324-1.409-.714-1.409-.714s-.73-.511-1.096-1.52C1.444 8.73 2.021 7.7 2.021 7.7s.32-.859 1.47-1.145c.395-.106.863-.12 1.072-.12zm8.33 2.554c.26.003.509.127.509.127l.868.422-.529 1.075a.686.686 0 0 0-.614.359.685.685 0 0 0 .072.756l-.939 1.924a.69.69 0 0 0-.66.527.687.687 0 0 0 .347.763.686.686 0 0 0 .867-.206.688.688 0 0 0-.069-.882l.916-1.874a.667.667 0 0 0 .237-.02.657.657 0 0 0 .271-.137 8.826 8.826 0 0 1 1.016.512.761.761 0 0 1 .286.282c.073.21-.073.569-.073.569-.087.29-.702 1.55-.702 1.55a.692.692 0 0 0-.676.477.681.681 0 1 0 1.157-.252c.073-.141.141-.282.214-.431.19-.397.515-1.16.515-1.16.035-.066.218-.394.103-.814-.095-.435-.48-.638-.48-.638-.467-.301-1.116-.58-1.116-.58s0-.156-.042-.27a.688.688 0 0 0-.148-.241l.516-1.062 2.89 1.401s.48.218.583.619c.073.282-.019.534-.069.657-.24.587-2.1 4.317-2.1 4.317s-.232.554-.748.588a1.065 1.065 0 0 1-.393-.045l-.202-.08-4.31-2.1s-.417-.218-.49-.596c-.083-.31.104-.691.104-.691l2.073-4.272s.183-.37.466-.497a.855.855 0 0 1 .35-.077z"
                />
              </svg>
            </Button>
          </NuxtLink>

          <NuxtLink to="https://x.com/nbil_o" target="_blank">
            <Button variant="outline">
              <svg
                viewBox="0 0 24 24"
                class="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>X</title>
                <path
                  d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"
                />
              </svg>
            </Button>
          </NuxtLink>
        </div>
        <div class="flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
    </footer>
  </section>
</template>
