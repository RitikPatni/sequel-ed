<template>
  <fieldset class="query-block">
    <legend align="center" class="query-block__title">{{ title }}</legend>
    <slot></slot>
  </fieldset>
</template>
<script>
export default {
  name: 'QueryBlock',
  props: {
    title: {
      required: true,
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
.query-block {
  border: 1px solid var(--text-light);
  display: grid;
  padding: 1rem;
  &__title {
    font-weight: var(--semibold);
    font-size: var(--xs);
  }
}
</style>