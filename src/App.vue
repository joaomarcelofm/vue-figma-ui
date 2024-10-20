<script setup lang="ts">
import FButton from "./components/f-button/f-button.vue";
import FSegmentedControl from "./components/f-option-strip/f-segmented-control.vue";
import FInput from "./components/f-input/f-input.vue";
import { Variant } from "./components/f-button/f-button";
import { ref } from "vue";
import FIcon from "./components/f-icon/f-icon.vue";
import FPropertyLabel from "./components/f-property-label/f-property-label.vue";
import { FIconSize } from "./components/f-icon/f-icon.ts";

const text = ref("button");

const options = [
  { iconName: "text-align-center", label: "Center", value: "center" },
  { iconName: "text-align-left", label: "Left", value: "left" },
  { iconName: "text-align-right", label: "Right", value: "right" },
];

// v-model to capture the selected option
const selectedOption = ref<string>("");
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

    <h2>Option Strip</h2>
    <FPropertyLabel for="segmented-control">Text Alignment</FPropertyLabel>
    <div style="width: 300px">
      <FSegmentedControl v-model="selectedOption" :options="options" />
      <FSegmentedControl v-model="selectedOption" :options="options" disabled />
    </div>
    <p>Selected Option: {{ selectedOption }}</p>
  </div>
</template>
