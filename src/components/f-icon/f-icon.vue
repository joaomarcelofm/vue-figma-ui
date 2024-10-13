<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import { FIconProps, FIconSize } from './f-icon';

const props = withDefaults(defineProps<FIconProps>(), {
  name: '',
  size: FIconSize.medium,
});

const iconContent = ref<string | null>(null);

watchEffect(async () => {
  try {
    const svgModule = await import(`./icons/${props.name}.svg?raw`);
    iconContent.value = svgModule.default;
  } catch (e) {
    console.error(`Failed to load the Icon: ${props.name}`, e);
  }
});

const classes = computed(() => {
  return {
    "f-icon": true,
    [`f-icon--${props.size}`]: true,
  };
});
</script>

<template>
  <div v-if="iconContent" v-html="iconContent" :class="classes"></div>
</template>

<style lang="scss" scoped>
.f-icon {
  line-height: 0;

  &--small {
    width: 16px;
    height: 16px;
  }

  &--medium {
    width: 24px;
    height: 24px;
  }

  &--large {
    width: 32px;
    height: 32px;
  }
}
</style>
