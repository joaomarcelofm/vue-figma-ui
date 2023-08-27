<script setup lang="ts">
import FButton from './components/f-button/f-button.vue';
import FInput from './components/f-input/f-input.vue';

let text = "Button";
</script>

<template>
  <div>
    <h1>Components</h1>

    <h2>Buttons</h2>
    <h3>Standard</h3>
    <FButton>Button</FButton>
    <FButton disabled>Button</FButton>
    <FButton destructive>Button</FButton>
    <FButton disabled destructive>Button</FButton>
    <FButton fullWidth destructive>Button</FButton>
    <h3>Primary</h3>
    <FButton variant="primary">Button</FButton>
    <FButton disabled variant="primary">Button</FButton>
    <FButton destructive variant="primary">Button</FButton>
    <FButton destructive disabled variant="primary">Button</FButton>
    <FButton destructive fullWidth variant="primary">Button</FButton>

    <h2>Input</h2>
    <FInput placeholder="Placeholder" v-model="text" /><br />
    <FInput placeholder="Placeholder" disabled /><br />
    <FInput placeholder="Placeholder" /><br />
  </div>
</template>
