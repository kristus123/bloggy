<template>
  <div>
    <v-btn small text color="grey" @click="setRandomQuote"
      ><v-icon>mdi-refresh</v-icon></v-btn
    >

    <h1 style="font-size: 2rem" class="mb-2 font-weight-thin">
      <v-icon class="pb-12 ma-0" x-large>mdi-format-quote-open</v-icon>
      {{ quote }}
      <v-icon class="pb-12 ma-0" x-large>mdi-format-quote-close</v-icon>
    </h1>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.setRandomQuote();
  },
  methods: {
    setRandomQuote() {
      this.quote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
    },
  },
  data() {
    return {
      quote: null,
      quotes: [
        "You will fail most of the time and that is ok",
        "Your habits define your character",
        "You are your own and only obstacle",
        "There is nothing wrong with asking for help",
        "Patience is a virtue",
        "By doing nothing, you achieve everything",
        "Find meaning in suferring, and purpose in failure",
        "Don't accept things as it is. Question everything",
        "Order and chaos can not exist without one another",
        "Darkness is the absence of life",
        "Time wasted is not a waste of time",
        "Time spent well is not possible without time spent poorly",
        "You are your own friend, and your own partner. Treat yourself like you would treat your best friend",
      ],
    };
  },
};
</script>

<style>
</style>
