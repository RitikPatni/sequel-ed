<template>
  <form @submit.prevent="executeQuery" class="sql-input">
    <v-ace-editor
      v-model:value="query"
      @init="editorInit"
      lang="sql"
      theme="chrome"
      class="sql-input__editor"
    />
    <custom-button
      variant="primary"
      class="sql-input__button"
      :isDisabled="!query"
      :title="{ 'Please enter a query first': !query }"
      >Execute Query</custom-button
    >
  </form>
</template>

<script>
import CustomButton from './CustomButton.vue';
import { VAceEditor } from 'vue3-ace-editor';
import 'ace-builds/src-noconflict/mode-sql';
import 'ace-builds/src-noconflict/theme-chrome';
export default {
  name: 'SqlInput',
  components: { CustomButton, VAceEditor },
  data() {
    return {
      query: '',
    };
  },

  methods: {
    executeQuery() {
      const cleanedQuery = this.query.trim().toLowerCase();
      if (cleanedQuery === 'select * from table') {
        this.$store.commit('SELECT_ALL_DATA');
      } else if (cleanedQuery === 'select * from table limit 100') {
        this.$store.commit('SELECT_FIRST_100_RECORDS');
        this.showSuccessToast();
      } else {
        this.$store.commit('RESET_FILTERED_DATA');
        this.$store.commit('SHOW_TOAST', {
          type: 'warning',
          message:
            "This query isn't available in our database yet please try something else",
        });
      }
    },
    showSuccessToast() {
      this.$store.commit('SHOW_TOAST', {
        type: 'success',
        message: 'Query successful see results',
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.sql-input {
  display: grid;
  gap: 0.5rem;
  &__editor {
    width: 100%;
    min-width: 20rem;
    font-size: var(--lg);
    height: 15rem;
  }
  &__button {
    justify-self: start;
  }
}
</style>
