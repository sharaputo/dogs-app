<template>
  <button :type="type" @click="$emit('customAction')">
    <slot />
  </button>
</template>

<script setup lang="ts">
  interface BaseButtonProps {
    type?: 'button' | 'submit';
  }

  withDefaults(defineProps<BaseButtonProps>(), {
    type: 'button',
  });

  defineEmits<{
    (e: 'customAction'): void;
  }>();
</script>

<style lang="less" scoped>
  button {
    display: block;
    font-size: 1.6rem;
    font-weight: 700;
    text-align: center;
    color: var(--text);
    background-color: var(--button-background);
    padding: 10px 20px;
    border-radius: 5px;
    &:focus-visible {
      outline: var(--outline) solid 2px;
    }
  }

  @media @md {
    button {
      font-size: 1.8rem;
    }
  }
</style>
