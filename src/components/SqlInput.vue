<template>
  <form @submit.prevent="executeQuery" class="sql-input">
    <textarea
      name="query"
      id="query"
      cols="40"
      rows="10"
      v-model="query"
      class="sql-input__area"
      placeholder="SELECT * from table"
    ></textarea>
    <custom-button variant="primary">Execute Query</custom-button>
  </form>
</template>

<script>
import CustomButton from './CustomButton.vue';
export default {
  components: { CustomButton },
  name: 'SqlInput',
  data() {
    return {
      query: undefined,
    };
  },

  methods: {
    executeQuery() {
      if (this.query === 'SELECT * from table') {
        this.$store.commit('SELECT_ALL_DATA');
      } else if (this.query === 'SELECT * from table LIMIT 100') {
        this.$store.commit('SELECT_FIRST_100_RECORDS');
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.sql-input {
  display: grid;
  gap: 1rem;
  justify-content: center;
  &__area {
    resize: vertical;
    border: 1px solid var(--text-light);
    border-radius: var(--rounded);
  }
}
</style>
