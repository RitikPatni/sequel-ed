<template>
  <form @submit.prevent="executeQuery">
    <textarea
      name="query"
      id="query"
      cols="30"
      rows="10"
      v-model="query"
    ></textarea>
    <button>Generate result</button>
  </form>
</template>

<script>
export default {
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
      }
    },
  },
};
</script>
<style scoped>
a {
  color: #42b983;
}
</style>
