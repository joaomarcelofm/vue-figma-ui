<script setup lang="ts">
import FIcon from "../f-icon/f-icon.vue";
import { FIconSize } from '../f-icon/f-icon';
import { computed } from "vue";

const props = withDefaults(defineProps<{
  iconName?: string;
  placeholder?: string;
  disabled?: boolean;
}>(), {
  iconName: "",
  placeholder: "",
  disabled: false,
});

defineEmits<{
  (name: "update:modelValue", value: string): void;
}>();

const wrapperClasses = computed(() => {
  return {
    "f-input": true,
    "f-input--disabled": props.disabled,
  };
});
</script>

<template>
  <div :class="wrapperClasses">
    <FIcon v-if="iconName" :name="iconName" :size="FIconSize.small" class="f-input__icon" />
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
  align-items: center;
  background-color: var(--color-bg-secondary);
  border-radius: var(--radius-medium);
  border: 1px solid transparent;
  box-sizing: border-box;
  color: var(--color-text);
  display: flex;
  gap: var(--spacer-1);
  height: var(--spacer-4);
  padding: 0 var(--spacer-1);

  &::placeholder {
    color: var(--color-text-disabled);
  }

  &:hover {
    border: 1px solid var(--color-border);
    border-radius: var(--radius-medium);
  }

  &.f-input--disabled {
    color: var(--color-text-disabled);
    border: 1px solid var(--color-bg-secondary);

    &:focus,
    &:active,
    &:focus-visible,
    &:focus-within {
      border: 1px solid var(--color-bg-secondary);
    }
  }

  &:focus,
  &:active,
  &:focus-visible,
  &:focus-within {
    border: 1px solid var(--color-border-selected);
    border-radius: var(--radius-medium);
    outline: unset;
  }

  &__field {
    background-color: transparent;
    border: none;
    box-shadow: none;
    font-family: var(--text-body-medium-font-family);
    font-size: var(--text-body-medium-font-size);
    font-weight: var(--text-body-medium-font-weight);
    letter-spacing: var(--text-body-medium-letter-spacing);
    line-height: var(--text-body-medium-line-height);
    outline: none;
    width: 100%;
  }

  &__icon {
    color: var(--color-icon-secondary)
  }
}
</style>
