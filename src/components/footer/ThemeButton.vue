<template>
  <div class="theme-toggle">
    <label
      for="checkbox"
      class="theme-toggle__label"
      aria-label="toggle theme"
      @keydown.enter="toggleTheme"
      tabindex="0">
      <input
        type="checkbox"
        class="theme-toggle__checkbox"
        id="checkbox"
        @change="toggleTheme" />
      <span>🌙</span>
      <span>☀️</span>
      <div
        class="theme-toggle__slider"
        :class="{
          'theme-toggle__slider--checked': userTheme === 'dark-theme',
        }"></div>
    </label>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';

  const userTheme = ref('light-theme');

  const toggleTheme = (): void => {
    const activeTheme = localStorage.getItem('user-theme');
    if (activeTheme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  const getTheme = (): string | null => {
    return localStorage.getItem('user-theme');
  };

  const setTheme = (theme: string): void => {
    localStorage.setItem('user-theme', theme);
    userTheme.value = theme;
    document.documentElement.className = theme;
  };

  const getMediaPreference = (): string => {
    const hasDarkPreference = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    if (hasDarkPreference) {
      return 'dark-theme';
    } else {
      return 'light-theme';
    }
  };

  onMounted(() => {
    const initUserTheme = getTheme() || getMediaPreference();
    setTheme(initUserTheme);
  });
</script>

<style lang="less" scoped>
  .theme-toggle {
    &__checkbox {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      visibility: hidden;
    }
    &__label {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.6rem;
      background-color: var(--background);
      padding: 6px 7px;
      border-radius: 16px;
      transition: background-color @anim-slow;
      z-index: 1;
      cursor: pointer;
      &:focus-visible {
        outline: var(--outline) solid 2px;
      }
    }
    &__slider {
      position: absolute;
      top: 4px;
      left: 6px;
      width: 22px;
      height: 22px;
      background-color: var(--theme-toggle);
      border-radius: 50%;
      transform: translateX(0);
      transition: background-color @anim-slow, transform @anim-slow;
      &--checked {
        transform: translateX(32px);
      }
    }
  }
</style>
