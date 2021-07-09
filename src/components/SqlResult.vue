<template>
  <table v-if="filteredData">
    <tbody>
      <tr>
        <th scope="col" v-for="(header, index) in dataHeaders" :key="index">
          {{ header }}
        </th>
      </tr>
      <tr v-for="(row, index) in filteredData" :key="index">
        <td v-for="(value, index) in row" :key="index">{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SqlResult',
  computed: {
    ...mapGetters(['filteredData', 'dataHeaders']),
  },
  mounted() {},
};
</script>