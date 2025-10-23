<template>
  <button
    :class="[
      'font-medium',
      'py-2',
      'px-4',
      'rounded-md',
      'transition-colors',
      'duration-200',
      'cursor-pointer',
      variantClasses,
      sizeClasses,
    ]"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  variant?: "primary" | "secondary" | "danger" | "outline";
  size?: "small" | "medium" | "large";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "medium",
});

const variantClasses = computed(() => {
  switch (props.variant) {
    case "primary":
      return "bg-rose-500 text-white hover:bg-rose-600";
    case "secondary":
      return "bg-gray-200 text-gray-800 hover:bg-gray-300";
    case "danger":
      return 'bg-red-500 text-white hover:bg-red-700 hover:shadow-lg hover:text-white';
    case "outline":
      return "border border-rose-500 text-rose-500 hover:bg-rose-50 hover:text-rose-600";
    default:
      return "bg-rose-500 text-white hover:bg-rose-600";
  }
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case "small":
      return "text-sm py-1 px-3";
    case "medium":
      return "text-base py-2 px-4";
    case "large":
      return "text-lg py-3 px-6";
    default:
      return "text-base py-2 px-4";
  }
});

defineEmits(["click"]);
</script>
