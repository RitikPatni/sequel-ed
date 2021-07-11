<template>
  <div class="app">
    <section class="app__title">
      <div class="app__title__container">
        <div class="app__title__container__title-block">
          <h1 class="app__title__container__title-block__title">Sequel-ed</h1>
          <p>Load CSV and try out SQL queries on that</p>
        </div>
      </div>
    </section>
    <section class="app__body">
      <div class="app__body__container">
        <div class="app__body__container__body">
          <fetch-csv />
          <template v-if="data">
            <h2 class="app__body__container__body__heading">Enter SQL Query</h2>
            <suspense>
              <template #default>
                <sql-input />
              </template>
              <template #fallback>
                <div>Loading...</div>
              </template>
            </suspense>
          </template>
          <template v-if="filteredData">
            <h2 class="app__body__container__body__heading">Results</h2>
            <sql-result />
          </template>
          <transition name="slide-reverse">
            <toast :toastData="toastData" v-if="toastData" />
          </transition>
        </div>
      </div>
    </section>
  </div>
</template>

<script >
import { defineAsyncComponent } from 'vue';
import { mapGetters } from 'vuex';
import SqlResult from './components/SqlResult.vue';
import FetchCsv from './components/FetchCsv.vue';
import Toast from './components/Toast.vue';
// * Lazy loading this component as it includes code editor and will impact page load time
const SqlInput = defineAsyncComponent(() =>
  import('./components/SqlInput.vue')
);
export default {
  name: 'App',
  components: {
    SqlResult,
    FetchCsv,
    Toast,
    SqlInput,
  },
  computed: {
    ...mapGetters(['data', 'dataHeaders', 'filteredData', 'toastData']),
  },
  data() {
    return {
      columnNames: undefined,
      condition: undefined,
    };
  },
};
</script>

<style lang="scss" >
@import url(./assets/styles/styles.scss);
.app {
  display: grid;
  &__title {
    display: grid;
    padding: 4rem 2rem;
    justify-content: center;
    &__container {
      max-width: 960px;
      text-align: center;
      display: grid;
      gap: 2rem;
      @media only screen and (min-width: 1200px) {
        width: 960px;
      }
      &__title-block {
        display: grid;
        gap: 1rem;
        padding: 2rem 0;
        &__title {
          font-size: var(--3xl);
          font-weight: var(--bold);
        }
      }
    }
  }
  &__body {
    display: grid;
    padding: 1rem 2rem;
    justify-content: center;
    background: var(--gray-200);
    min-height: 20rem;
    &__container {
      &__body {
        max-width: 960px;
        text-align: center;
        display: grid;
        @media only screen and (min-width: 1200px) {
          width: 960px;
        }
        display: grid;
        padding: 2rem;
        background: var(--gray-100);
        &__heading {
          font-weight: var(--semibold);
          text-align: left;
          margin: 2rem 0 1rem;
        }
      }
    }
  }
}
</style>
