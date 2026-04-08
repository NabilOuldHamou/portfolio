<template>
  <div
    class="h-screen bg-background text-foreground relative overflow-y-auto snap-y snap-mandatory"
  >
    <Navigator :active-section="activeSection" />

    <main class="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
      <PresentationSection />
      <EducationSection />
      <JobsSection />
      <ProjectsSection />
      <ConnectSection />
    </main>
  </div>
</template>

<script setup lang="ts">
const activeSection = ref("intro");

onMounted(() => {
  const container = document.querySelector("div.snap-y");
  if (!container) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          activeSection.value = entry.target.id;
        }
      });
    },
    {
      root: container,
      threshold: 0.5,
    }
  );

  const sections = container.querySelectorAll("[id]");
  sections.forEach((section) => {
    observer.observe(section);
  });
});
</script>

<style scoped>
div.snap-y {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

div.snap-y::-webkit-scrollbar {
  display: none;
}
</style>
