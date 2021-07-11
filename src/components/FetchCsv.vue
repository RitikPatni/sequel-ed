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
      :disabled="isCSVLoaded"
      ref="urlInput"
    />
    <button
      type="button"
      class="fetch-csv__secondary-button"
      @click="switchUrl"
    >
      Switch URL
    </button>
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
      isCSVLoaded: false,
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
            this.isCSVLoaded = true;
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
    switchUrl() {
      this.isCSVLoaded = false;
      // * Adding timer with 0ms so that this methods executes at the end of this function
      setTimeout(() => {
        this.$refs.urlInput.focus();
        this.$refs.urlInput.select();
      }, 0);
    },
  },
};
</script>
<style lang="scss" scoped>
.fetch-csv {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  @media only screen and(max-width:640px) {
    flex-wrap: wrap;
  }
  &__input {
    padding: 0.5rem 0.75rem;
    width: 100%;
    font-size: var(--base);
    &:disabled {
      opacity: 0.5;
    }
  }
  &__secondary-button {
    background: white;
    border: 1px solid var(--gray-300);
    font-weight: var(--semibold);
    border-radius: 0.25rem;
    border-radius: var(--rounded);
    padding: 0.8rem 1rem 0.7rem;
    white-space: nowrap;
  }
}
</style>