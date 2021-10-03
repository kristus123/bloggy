<template>
  <center class="mt-16">
    <div v-if="joined">
      <TextTitle title="Thank you!" />
      <p class="grey--text">
        If you no longer want notifications, just use this same form!
      </p>
      <p class="grey--text">And let me know why ;) Thank you again!</p>
    </div>
    <div v-else>
      <p class="grey--text">
        If you want to be <strong>notified</strong> of
        <strong>new posts</strong>
      </p>
      <v-text-field
        v-model="contactInfo"
        style="max-width: 25rem; margin-top: 30px"
        outlined
        placeholder="email, phone, etc..."
      ></v-text-field>
      <v-btn @click="join" dark color="blue darken-1">Let me know!</v-btn>
    </div>
  </center>
</template>

<script>
export default {
  data() {
    return {
      contactInfo: null,
      joined: false,
    };
  },
  methods: {
    join() {
      const url = `https://api.telegram.org/${this.$config.telegramBotApiKey}/sendMessage`;
      this.$axios.post(url, { chat_id: "687417085", text: this.contactInfo });
      this.joined = true;
    },
  },
};
</script>

<style>
</style>