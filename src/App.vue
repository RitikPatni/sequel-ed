<template>
  <div class="app">
    <fetch-csv />
    <template v-if="data">
      <!-- <filter-by />
      <sort-by />
      <limit-by />
      <group-by />
      <aggregate-by /> -->
      <sql-input />
    </template>
    <sql-result v-if="filteredData" />
    <transition name="slide-reverse">
      <toast :toastData="toastData" v-if="toastData" />
    </transition>
  </div>
</template>

<script >
import { mapGetters } from 'vuex';
import SqlInput from './components/SqlInput.vue';
import SqlResult from './components/SqlResult.vue';
import FetchCsv from './components/FetchCsv.vue';
import Toast from './components/Toast.vue';
// import FilterBy from './components/FilterBy.vue';
// import LimitBy from './components/LimitBy.vue';
// import SortBy from './components/SortBy.vue';
// import GroupBy from './components/GroupBy.vue';
// import AggregateBy from './components/AggregateBy.vue';
export default {
  name: 'App',
  components: {
    SqlInput,
    SqlResult,
    FetchCsv,
    Toast,
    // FilterBy,
    // LimitBy,
    // SortBy,
    // GroupBy,
    // AggregateBy,
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
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
// Reset CSS ends
@font-face {
  font-family: 'Inter';
  src: url('./assets/fonts/Inter-VariableFont_slnt,wght.ttf') format('truetype');
  font-display: swap;
}
:root {
  --primary: #2026d2;
  --white: #ffffff;
  --text: #171717;
  --text-light: #3e4c59;
  --gray-100: #f3f5f7;
  --green: #51cb20;
  --red: #ce272a;
  --yellow: #f2a918;
  --xs: 0.75rem;
  --sm: 0.875rem;
  --base: 1rem;
  --lg: 1.25rem;
  --xl: 1.5rem;
  --rounded-sm: 0.125rem;
  --rounded: 0.25rem;
}
button,
a {
  cursor: pointer;
}
* {
  box-sizing: border-box;
}
body {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text);
}
.app {
  display: grid;
  justify-content: center;
  padding: 1rem 2rem;
  gap: 2rem;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}
.slide-reverse-enter-active,
.slide-reverse-leave-active {
  transition: transform 0.2s ease;
}

.slide-reverse-enter-from,
.slide-reverse-leave-to {
  transform: translateX(100%);
  transition: all 150ms ease-in 0s;
}
</style>
