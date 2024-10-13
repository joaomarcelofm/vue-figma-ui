<script setup lang="ts">
import { computed } from "vue";
import { Variant } from "./f-button.ts";
import FIcon from "../f-icon/f-icon.vue";
import { FIconSize } from "../f-icon/f-icon";

const props = withDefaults(defineProps<{
  danger?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  iconName?: string;
  large?: boolean;
  variant?: Variant;
}>(), {
  danger: false,
  disabled: false,
  fullWidth: false,
  iconName: "",
  large: false,
  variant: Variant.standard,
});

const classes = computed(() => {
  return {
    "f-button--danger": props.danger,
    "f-button--full-width": props.fullWidth,
    "f-button--large": props.large,
    "f-button--primary": props.variant === Variant.primary,
    "f-button--standard": props.variant === Variant.standard,
    "f-button": true,
  };
});
</script>

<template>
  <button :class="classes" :disabled="disabled">
    <FIcon v-if="iconName" :name="iconName" :size="props.variant === Variant.standard ? FIconSize.small : FIconSize.medium" />
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
  display: flex;
  gap: var(--spacer-1);
  height: var(--spacer-4);
  justify-content: center;
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

  &--large {
    height: var(--spacer-5);
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
