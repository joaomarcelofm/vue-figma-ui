<script setup lang="ts">
import FIcon from "../f-icon/f-icon.vue";
import { FSegmentedControlProps } from "./f-segmented-control.ts";
import { computed, ref, watch, onMounted } from "vue";

// Define props and defaults
const props = withDefaults(defineProps<FSegmentedControlProps>(), {
  disabled: false,
  options: () => [],
  modelValue: "",
});

// Emit event to parent
const emit = defineEmits<{
  (name: "update:modelValue", value: string): void;
}>();

// Internal value to keep track of selected radio button
const internalValue = ref<string>("");

// Watch for changes in v-model from the parent
watch(
  () => internalValue.value,
  (newValue) => {
    emit("update:modelValue", newValue);
  }
);

// Update wrapper classes based on disabled state
const wrapperClasses = computed(() => {
  return {
    "f-option-strip": true,
    "f-option-strip--disabled": props.disabled,
  };
});

// Method to handle change and emit value
const updateModelValue = (value: string) => {
  internalValue.value = value;
};

onMounted(() => {
  if (!props.modelValue) {
    internalValue.value = props.options[0].value;
  }
});
</script>

<template>
  <div :class="wrapperClasses">
    <label
      v-for="option in props.options"
      :key="option.value"
      class="f-option-strip__item"
      :class="{ 'f-option-strip__item--selected': internalValue === option.value }"
    >
      <input
        type="radio"
        :value="option.value"
        :disabled="props.disabled"
        v-model="internalValue"
        class="f-option-strip__input"
        @change="updateModelValue(option.value)"
      />
      <FIcon v-if="option.iconName" :name="option.iconName" class="f-option-strip__icon" />
      <span  v-if="option.label" class="f-option-strip__label">{{ option.label }}</span>
    </label>
  </div>
</template>

<style scoped lang="scss">
.f-option-strip {
  background-color: var(--color-bg-secondary);
  border-radius: var(--radius-medium);
  padding: var(--spacer-0);
  display: inline-flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  color: var(--color-text);

  &--disabled {
    cursor: not-allowed;
    color: var(--color-text-disabled);
  }

  &__item {
    display: flex;
    gap: var(--spacer-1);
    flex-grow: 1;
    text-align: center;
    align-items: center;
    justify-content: center;

    &--selected {
      border-radius: var(--radius-medium);
      background-color: var(--color-bg);
      box-shadow: inset 0 0 0 .0625rem var(--color-border);
    }
  }

  &__input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  &__label {
    font-family: var(--text-body-medium-font-family);
    font-size: var(--text-body-medium-font-size);
    font-weight: var(--text-body-medium-font-weight);
    letter-spacing: var(--text-body-medium-letter-spacing);
    line-height: var(--text-body-medium-line-height);
  }
}
</style>
