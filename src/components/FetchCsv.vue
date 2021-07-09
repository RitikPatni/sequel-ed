<template>
  <div>
    <form @submit.prevent="fetchCSV">
      <input
        type="text"
        name="url"
        id="url"
        placeholder="Enter remote CSV URL"
        v-model="url"
      />
      <button>Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'FetchCsv',
  data() {
    return {
      url: undefined,
    };
  },
  methods: {
    fetchCSV() {
      this.$store.dispatch('fetchCSV', { url: this.url });
    },
  },
};
</script>