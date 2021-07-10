<template>
  <query-block title="Sort By">
    <VueMultiselect
      v-model="value"
      :options="dataHeaders"
      :searchable="false"
      :close-on-select="false"
      :show-labels="false"
      placeholder="Pick a value"
    ></VueMultiselect>
  </query-block>
</template>
<script>
import { mapGetters } from 'vuex';
import VueMultiselect from 'vue-multiselect';
import QueryBlock from './QueryBlock.vue';
export default {
  components: { QueryBlock, VueMultiselect },
  name: 'SortBy',
  computed: {
    ...mapGetters(['dataHeaders']),
  },
  data() {
    return {
      value: '',
    };
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>