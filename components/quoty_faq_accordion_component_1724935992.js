<!--
INSTRUCTION: Summary: Contains a section with:
INSTRUCTION: 1. Accordion title: An h2 element that displays the title of the FAQ section, styled for font size, weight, and margin.
INSTRUCTION: 2. Accordion container: A div element that holds multiple accordion items, styled with vertical spacing. Each item has a visible question. When the + icon on the right is clicked, it expands to show the answer for that question.
-->

<template>
  <section class="py-8 bg-white pl-4">
    <h2 class="text-lg font-semibold mb-5">Frequently Asked Questions</h2>
    <!-- Accordion -->
    <div class="space-y-3">
      <!-- Accordion item -->
      <div
        v-for="(term, index) in terms"
        :key="index"
        :class="['text-sm rounded-lg odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900', { 'expanded': term.expanded }]"
      >
        <h3>
          <button
            type="button"
            class="flex items-center justify-between w-full text-left font-medium px-5 py-3"
            @click="toggle(index)"
            :aria-expanded="term.expanded"
            :aria-controls="'terms-text-' + index"
          >
            <span>{{ term.title }}</span>
            <svg
              class="shrink-0 ml-8 fill-slate-400 dark:fill-slate-500"
              width="12"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="5"
                width="12"
                height="2"
                rx="1"
                class="transform origin-center transition duration-200 ease-out"
                :class="{ '!rotate-180': term.expanded }"
              />
              <rect
                y="5"
                width="12"
                height="2"
                rx="1"
                class="transform origin-center rotate-90 transition duration-200 ease-out"
                :class="{ '!rotate-180': term.expanded }"
              />
            </svg>
          </button>
        </h3>
        <div
          :id="'terms-text-' + index"
          role="region"
          :aria-labelledby="'terms-title-' + index"
          class="text-slate-500 dark:text-slate-400 grid overflow-hidden transition-all duration-300 ease-in-out"
          :class="[{ 'grid-rows-[1fr] opacity-100': term.expanded, 'grid-rows-[0fr] opacity-0': !term.expanded }]"
        >
          <div class="overflow-hidden" :id="'terms-text-' + index + '-content'">
            <p class="px-5 pb-3" :id="'terms-text-' + index + '-description'">
              {{ term.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "QuotyFaqAccordionComponent",
  data() {
    return {
      terms: [
        { title: "What brands of laptops do you offer?", description: "We offer a wide range of popular laptop brands including Apple, Dell, HP, Lenovo, ASUS, and more. Our selection caters to various needs and budgets.", expanded: false },
        { title: "Do you provide warranty on your laptops?", description: "Yes, all our laptops come with a standard manufacturer's warranty. We also offer extended warranty options for additional peace of mind.", expanded: false },
        { title: "What is your return policy?", description: "We offer a 30-day return policy on all laptop purchases. If you're not satisfied with your purchase, you can return it for a full refund or exchange within this period, provided the laptop is in its original condition.", expanded: false },
        { title: "Do you offer financing options?", description: "Yes, we provide various financing options to make your laptop purchase more affordable. These include installment plans and special credit offers. Please check our financing page for more details.", expanded: false }
      ]
    };
  },
  methods: {
    toggle(index) {
      this.terms[index].expanded = !this.terms[index].expanded;
    }
  }
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
