<template>
  <form @submit.prevent="fetchCSV" class="fetch-csv">
    <input
      type="text"
      name="url"
      id="url"
      placeholder="Enter remote CSV URL"
      v-model="url"
      class="fetch-csv__input"
      required
    />
    <custom-button variant="primary" :isLoading="isLoading" type="submit"
      >Submit</custom-button
    >
  </form>
</template>
<script>
import CustomButton from './CustomButton.vue';
export default {
  name: 'FetchCsv',
  data() {
    return {
      url: undefined,
      isLoading: undefined,
    };
  },
  components: {
    CustomButton,
  },
  methods: {
    fetchCSV() {
      this.isLoading = true;
      if (this.isValidHttpUrl(this.url)) {
        this.$store
          .dispatch('fetchCSV', { url: this.url })
          .then((result) => {
            this.isLoading = false;
          })
          .catch((err) => {
            this.isLoading = false;
          });
      } else {
        this.isLoading = false;
        this.$store.commit('SHOW_TOAST', {
          type: 'error',
          message: 'URL is malformed',
        });
      }
    },
    isValidHttpUrl(string) {
      let url;
      try {
        url = new URL(string);
      } catch (_) {
        return false;
      }
      return url.protocol === 'http:' || url.protocol === 'https:';
    },
  },
};
</script>
<style lang="scss" scoped>
.fetch-csv {
  display: grid;
  gap: 1rem;
  justify-content: center;
  &__input {
    padding: 0.5rem 0.75rem;
    color: var(--text);
  }
}
</style>