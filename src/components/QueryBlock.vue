<template>
  <fieldset>
    <legend align="center">{{ title }}</legend>
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