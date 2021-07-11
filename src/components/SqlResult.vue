<template>
  <div class="sql-result">
    <table v-if="filteredData" class="sql-result__table">
      <thead class="sql-result__table__header">
        <tr>
          <th
            scope="col"
            v-for="(header, index) in filteredHeaders"
            :key="index"
            class="sql-result__table__header__row__column"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in filteredData" :key="index">
          <td
            v-for="(value, index) in row"
            :key="index"
            class="sql-result__table__body__row__column"
          >
            {{ value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SqlResult',
  computed: {
    ...mapGetters(['filteredData', 'filteredHeaders']),
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.sql-result {
  max-width: 100vw;
  overflow: auto;
  max-height: 80vh;
  &__table {
    width: 100%;
    &__header {
      background: var(--primary-light);
      position: sticky;
      top: 0;
      border-top: 0;
      background-clip: padding-box;
      &__row {
        &__column {
          padding: 0.75rem 1.5rem;
          text-align: left;
          font-size: var(--xs);
          font-weight: var(--semibold);
          text-transform: uppercase;
        }
      }
    }
    &__body {
      &__row {
        &__column {
          padding: 0.75rem 1.5rem;
        }
      }
    }
  }
}
</style>