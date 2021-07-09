<template>
  <query-block title="Limit">
    <label for="limit"> Count </label>
    <input type="number" name="limit" id="limit" v-model="count" />
  </query-block>
</template>
<script>
import QueryBlock from './QueryBlock.vue';
export default {
  components: { QueryBlock },
  name: 'LimitBy',
  data() {
    return {
      count: undefined,
    };
  },
};
</script>