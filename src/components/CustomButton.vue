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
  padding: 0.8rem 3rem 0.7rem;
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
  &__loader {
    display: block;
    position: absolute;
    right: 10px;
    top: 50%;
    height: 15px;
    width: 15px;
    background-color: transparent;
    box-sizing: border-box;
    opacity: 0;
    border-radius: 50%;
    border-top: 2px solid var(--white);
    border-left: 2px solid var(--white);
    border-bottom: 2px solid var(--white);
    border-right: 2px solid rgba(var(--white), 0.35);
    transition: all 0.5s ease;
    animation: spin 0.75s infinite linear;
    transform: translateY(-50%);
  }
  &--loader,
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    .btn__loader {
      opacity: 1;
    }
  }
}
@keyframes spin {
  from {
    transform: translateY(-50%) rotate(0deg);
  }
  to {
    transform: translateY(-50%) rotate(360deg);
  }
}
</style>