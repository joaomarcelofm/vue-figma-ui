<template>
  <label class="f-property-label">
    <slot />
  </label>
</template>

<style lang="scss" scoped>
.f-property-label {
  color: var(--color-text-secondary);
  font-family: var(--text-body-small-strong-font-family);
  font-size: var(--text-body-small-strong-font-size);
  letter-spacing: var(--text-body-small-strong-letter-spacing);
  line-height: var(--text-body-small-strong-line-height);
  font-weight: 500;
}
</style>
