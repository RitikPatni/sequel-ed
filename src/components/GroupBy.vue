<template>
  <query-block title="Group By">
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
  name: 'GroupBy',
  components: { QueryBlock },
  computed: {
    ...mapGetters(['dataHeaders']),
  },
};
</script>