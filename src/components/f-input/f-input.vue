<script setup lang="ts">
withDefaults(defineProps<{
  icon: string;
  placeholder: string;
  disabled: boolean;
}>(), {
  icon: "",
  placeholder: "",
  disabled: false,
});

defineEmits<{
  (name: "update:modelValue", value: string): void;
}>();
</script>

<template>
  <div class="f-input">
    <label for=""></label>
    <input
      class="f-input__field"
      :disabled="disabled"
      :placeholder="placeholder"
      :value="$attrs.modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style lang="scss" scoped>
.f-input {
  &__field {
    background-color: var(--color-bg-secondary);
    border-radius: var(--radius-medium);
    border: 1px solid transparent;
    box-sizing: border-box;
    color: var(--color-text);
    display: flex;
    font-family: var(--text-body-medium-font-family);
    font-size: var(--text-body-medium-font-size);
    font-weight: var(--text-body-medium-font-weight);
    height: var(--spacer-4);
    letter-spacing: var(--text-body-medium-letter-spacing);
    line-height: var(--text-body-medium-line-height);
    padding: var(--spacer-1);

    &::placeholder {
      color: var(--color-text-disabled);
    }

    &:hover {
      border: 1px solid var(--color-border);
      border-radius: var(--radius-medium);
    }

    &:disabled {
      color: var(--color-text-disabled);
      border: 1px solid var(--color-bg-secondary);

      &:hover {
        border: 1px solid var(--color-bg-secondary);
      }
    }

    &:focus,
    &:active,
    &:focus-visible {
      border: 1px solid var(--color-border-selected);
      border-radius: var(--radius-medium);
      outline: unset;
    }
  }
}
</style>
