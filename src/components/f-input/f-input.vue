<script setup>
import { computed } from "vue";

const props = defineProps({
  icon: {
    type: String,
  },
  placeholder: {
    type: String,
  },
});
</script>

<template>
  <div class="f-input">
    <label for=""></label>
    <input
      class="f-input__field"
      :disabled="$attrs.disabled"
      :placeholder="placeholder"
      :value="$attrs.modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style lang="scss" scoped>
.f-input {
  &__field {
    background-color: var(--color-white);
    border-radius: calc(var(--base-design-unit) * 0.25);
    border: 1px solid transparent;
    box-sizing: border-box;
    color: var(--color-black-8);
    display: flex;
    font-size: calc(var(--base-design-unit) * 1.5);
    height: calc(var(--base-design-unit) * 3.5);
    line-height: calc(var(--base-design-unit) * 2);
    padding: calc(var(--base-design-unit) * 0.75);

    &::placeholder {
      color: var(--color-black-3);
    }

    &:hover {
      border: 1px solid var(--color-black-3);
      border-radius: calc(var(--base-design-unit) * 0.25);
    }

    &:disabled {
      color: var(--color-black-3);

      &:hover {
        border: 1px solid transparent;
      }

      &:focus,
      &:active {
        border: 2px solid transparent;
      }
    }

    &:focus,
    &:active,
    &:focus-visible {
      border: 2px solid var(--color-blue);
      border-radius: calc(var(--base-design-unit) * 0.25);
      padding: calc(var(--base-design-unit) * 0.75 - 1px)
        calc(var(--base-design-unit) * 0.75 - 1px);
      outline: none;
    }
  }
}
</style>
