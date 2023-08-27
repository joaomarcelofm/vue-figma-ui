<script setup>
import { computed } from "vue";
import { Variant } from "./types";

const props = defineProps({
  destructive: {
    type: Boolean,
    default: false,
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
  },
  variant: {
    type: String,
    default: Variant.standard,
  },
});

const classes = computed(() => {
  return {
    "f-button": true,
    "f-button--destructive": props.destructive,
    "f-button--full-width": props.fullWidth,
    "f-button--primary": props.variant === Variant.primary,
    "f-button--standard": props.variant === Variant.standard,
  };
});
</script>

<template>
  <button :class="classes" :disabled="$attrs.disabled">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.f-button {
  align-items: center;
  background-color: var(--color-white);
  border-radius: calc(var(--base-design-unit) * 0.75);
  border: 1px solid var(--color-black-8);
  box-sizing: border-box;
  color: var(--color-black-8);
  display: block;
  font-size: calc(var(--base-design-unit) * 1.5);
  font-weight: 500;
  height: calc(var(--base-design-unit) * 4);
  gap: var(--base-design-unit);
  line-height: calc(var(--base-design-unit) * 2);
  padding: 0 calc(var(--base-design-unit) * 1.5);
  text-align: center;

  &:disabled {
    color: var(--color-black-3);
    border: 1px solid var(--color-black-3);

    &:active {
      background-color: var(--color-white);
    }
  }

  &--full-width {
    width: 100%;
  }

  &--standard {
    &:focus {
      padding: 0 calc(var(--base-design-unit) * 1.5 - 1px);
      border: 2px solid var(--color-blue);
    }

    &:active {
      background-color: var(--color-bg-grey-f0);
    }

    &.f-button--destructive {
      color: var(--color-red);
      border: 1px solid var(--color-red);

      &:focus {
        padding: 0 calc(var(--base-design-unit) * 1.5 - 1px);
        border: 2px solid var(--color-red);
      }

      &:disabled {
        color: var(--color-black-3);
        border: 1px solid var(--color-black-3);

        &:active {
          background-color: var(--color-white);
        }
      }
    }
  }

  &--primary {
    background-color: var(--color-blue);
    color: var(--color-white);
    border: 2px solid var(--color-blue);

    &:focus {
      border: 2px solid var(--color-black-3);
    }

    &:disabled {
      color: var(--color-white);
      background-color: var(--color-black-3);
      border: 2px solid transparent;

      &:active {
        background-color: var(--color-black-3);
      }
    }

    &.f-button--destructive {
      background-color: var(--color-red);
      border: 2px solid var(--color-red);
      color: var(--color-white);

      &:focus {
        border: 2px solid var(--color-black-3);
      }

      &:disabled {
        color: var(--color-white);
        background-color: var(--color-black-3);
        border: 2px solid transparent;

        &:active {
          background-color: var(--color-black-3);
        }
      }
    }
  }
}
</style>
