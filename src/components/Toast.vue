<template>
  <div
    class="toast"
    :class="{
      toast__success: toastData?.type === 'success',
      toast__warning: toastData?.type === 'warning',
      toast__error: toastData?.type === 'error',
    }"
  >
    {{ toastData?.message }}
    <button
      title="Dismiss Toast"
      class="toast__dismiss-button"
      @click="hideToast"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3e4c59"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  name: 'Toast',
  props: {
    toastData: {
      required: true,
      type: Object,
    },
  },
  methods: {
    hideToast() {
      this.$store.commit('HIDE_TOAST');
    },
  },
};
</script>
<style lang="scss" scoped>
.toast {
  background: var(--white);
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 1.25rem;
  border-width: 2px;
  border-left-style: solid;
  text-align: left;
  max-width: calc(100vw - 1.5rem);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  display: flex;
  align-items: center;
  gap: 2rem;
  &__dismiss-button {
    background: transparent;
    border: none;
  }
  &__success {
    border-color: var(--green);
  }
  &__error {
    border-color: var(--red);
  }
  &__warning {
    border-color: var(--yellow);
  }
}
</style>
