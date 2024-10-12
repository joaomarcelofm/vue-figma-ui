<script setup lang="ts">
import FButton from "./components/f-button/f-button.vue";
import FInput from "./components/f-input/f-input.vue";
import { Variant } from "./components/f-button/types";
import { ref } from "vue";

const text = ref("button");
</script>

<template>
  <div>
    <h1>Components</h1>

    <h2>Buttons</h2>
    <h3>Standard</h3>
    <FButton>Button</FButton>
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

    <h2>Input</h2>
    Value: {{ text }}
    <FInput placeholder="Placeholder" v-model="text" /><br />
    <FInput placeholder="Placeholder" disabled /><br />
    <FInput placeholder="Placeholder" /><br />
  </div>
</template>
