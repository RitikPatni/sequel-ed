<template>
  <query-block title="Filter by">
    <select name="filter" id="filter">
      <option value="" disabled selected>Select Header</option>
      <option
        :value="header"
        v-for="(header, index) in dataHeaders"
        :key="index"
      >
        {{ header }}
      </option>
    </select>
  </query-block>
</template>
<script>
import { mapGetters } from 'vuex';
import QueryBlock from './QueryBlock.vue';
export default {
  components: { QueryBlock },
  name: 'FilterBy',
  computed: {
    ...mapGetters(['dataHeaders']),
  },
};
</script>