<template>
  <button
    :disabled="isDisabled || isLoading"
    :type="type"
    :class="[
      { btn__primary: variant === 'primary' },
      { 'btn--loader': isLoading },
    ]"
    class="btn"
  >
    <slot />
    <span class="btn__loader" v-if="isLoading"></span>
  </button>
</template>
<script>
export default {
  name: 'CustomButton',
  props: {
    isLoading: {
      required: false,
      default: false,
      type: Boolean,
    },
    isDisabled: {
      required: false,
      default: false,
      type: Boolean,
    },
    type: {
      required: false,
      default: 'submit',
      type: String,
    },
    variant: {
      required: true,
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
.btn {
  padding: 0.8rem 1rem 0.7rem;
  border: 0.2rem solid var(--primary);
  text-transform: capitalize;
  position: relative;
  font-size: 1rem;
  font-weight: 600;
  border-radius: var(--rounded);
  &__primary {
    background-color: var(--primary);
    color: var(--white);
  }
  &--loader,
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>