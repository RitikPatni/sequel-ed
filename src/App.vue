<template>
  <div class="">
    <fetch-csv />
    <template v-if="data">
      <sql-input />
      <filter-by />
      <sort-by />
      <limit-by />
    </template>
    <sql-result v-if="filteredData" />
  </div>
</template>

<script >
import { mapGetters } from 'vuex';
import SqlInput from './components/SqlInput.vue';
import SqlResult from './components/SqlResult.vue';
import FetchCsv from './components/FetchCsv.vue';
import FilterBy from './components/FilterBy.vue';
import LimitBy from './components/LimitBy.vue';
import SortBy from './components/SortBy.vue';
export default {
  name: 'App',
  components: {
    SqlInput,
    SqlResult,
    FetchCsv,
    FilterBy,
    LimitBy,
    SortBy,
  },
  computed: {
    ...mapGetters(['data', 'dataHeaders', 'filteredData']),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
