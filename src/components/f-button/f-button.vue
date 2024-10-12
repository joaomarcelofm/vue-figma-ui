<script setup lang="ts">
import { computed } from "vue";
import { Variant } from "./types";

const props = withDefaults(defineProps<{
  danger: boolean;
  fullWidth: boolean;
  icon: string;
  variant: Variant;
  disabled: boolean;
}>(), {
  danger: false,
  fullWidth: false,
  icon: "",
  variant: Variant.standard,
  disabled: false,
});

const classes = computed(() => {
  return {
    "f-button": true,
    "f-button--danger": props.danger,
    "f-button--full-width": props.fullWidth,
    "f-button--primary": props.variant === Variant.primary,
    "f-button--standard": props.variant === Variant.standard,
  };
});
</script>

<template>
  <button :class="classes" :disabled="disabled">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.f-button {
  align-items: center;
  background-color: var(--color-bg);
  border-radius: var(--radius-medium);
  border: 1px solid var(--color-border);
  box-sizing: border-box;
  color: var(--color-text);
  display: block;
  gap: var(--spacer-2);
  height: var(--spacer-4);
  padding: 0 var(--spacer-2);
  text-align: center;

  font-family: var(--text-body-medium-font-family);
  font-size: var(--text-body-medium-font-size);
  font-weight: var(--text-body-medium-font-weight);
  letter-spacing: var(--text-body-medium-letter-spacing);
  line-height: var(--text-body-medium-line-height);

  &:disabled {
    color: var(--color-text-disabled);
    border: 1px solid var(--color-border-disabled);

    &:active {
      background-color: var(--color-bg);
    }
  }

  &--full-width {
    width: 100%;
  }

  &--standard {
    &:active {
      background-color: var(--color-bghovertransparent);
    }

    &.f-button--danger {
      color: var(--color-text-danger);
      border: 1px solid var(--color-border-danger);

      &:active {
        background-color: var(--color-bghovertransparent);
      }

      &:disabled {
        color: var(--color-text-disabled);
        border: 1px solid var(--color-border-disabled);

        &:active {
          background-color: var(--color-bg);
        }
      }
    }
  }

  &--primary {
    background-color: var(--color-bg-brand);
    border: 1px solid var(--color-bg-brand);
    color: var(--color-text-onbrand);
    height: var(--spacer-5);

    &:active {
      background-color: var(--color-bg-brand-pressed);
      border: 1px solid var(--color-bg-brand-pressed);
    }

    :hover {
      background-color: var(--color-bg-brand-hover);
    }

    &:disabled {
      background-color: var(--color-bg-disabled);
      border: 1px solid var(--color-border-disabled);
      color: var(--color-text-ondisabled);

      &:active {
        background-color: var(--color-bg-disabled);
      }
    }

    &.f-button--danger {
      background-color: var(--color-bg-danger);
      border: 1px solid var(--color-bg-danger);
      color: var(--color-text-ondanger);

      &:active {
        background-color: var(--color-bg-danger-pressed);
        border: 1px solid var(--color-bg-danger-pressed);
      }

      &:disabled {
        color: var(--color-text-ondisabled);
        border: 1px solid var(--color-border-disabled);
        background-color: var(--color-bg-disabled);

        &:active {
          background-color: var(--color-bg-disabled);
        }
      }
    }
  }
}
</style>
