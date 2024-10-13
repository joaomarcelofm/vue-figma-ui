<script setup lang="ts">
import FButton from "./components/f-button/f-button.vue";
import FInput from "./components/f-input/f-input.vue";
import { Variant } from "./components/f-button/f-button";
import { ref } from "vue";
import FIcon from "./components/f-icon/f-icon.vue";
import { FIconSize } from "./components/f-icon/f-icon.ts";

const text = ref("button");
</script>

<template>
  <div>
    <h1>Components</h1>

    <h2>Buttons</h2>
    <h3>Standard</h3>
    <FButton>Button</FButton>
    <FButton iconName="notice">Button</FButton>
    <FButton disabled>Button</FButton>
    <FButton danger>Button</FButton>
    <FButton disabled danger>Button</FButton>
    <FButton fullWidth danger>Button</FButton>
    <h3>Primary</h3>
    <FButton :variant="Variant.primary">Button</FButton>
    <FButton disabled :variant="Variant.primary">Button</FButton>
    <FButton danger :variant="Variant.primary">Button</FButton>
    <FButton danger disabled :variant="Variant.primary">Button</FButton>
    <FButton danger fullWidth :variant="Variant.primary">Button</FButton>

    <h4>large</h4>
    <FButton large>Button</FButton>
    <FButton :variant="Variant.primary" large>Button</FButton>
    <FButton :variant="Variant.primary" large iconName="notice">Button</FButton>

    <h2>Input</h2>
    Value: {{ text }}
    <FInput placeholder="Placeholder" v-model="text" /><br />
    <FInput placeholder="Placeholder" disabled v-model="text"  /><br />
    <FInput placeholder="Placeholder" /><br />
    <FInput placeholder="Placeholder" iconName="notice" /><br />

    <h2>Icon</h2>
    <FIcon name="notice" :size="FIconSize.large" />
  </div>
</template>
