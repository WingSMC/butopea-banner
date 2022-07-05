<script lang="ts" setup>
import { CTABannerItem } from "../types/BannerItem";
defineProps<{
  item: CTABannerItem;
}>();
</script>

<template>
  <a class="banner-item banner-cta" :href="item.link">
    <h3 class="banner-cta-title">{{ item.title }}</h3>
    <button class="banner-cta-button">{{ item.button }}</button>
  </a>
</template>

<style lang="scss">
@use "../style/vars" as vars;

.banner {
  &-cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: vars.$theme-color-2;
    padding: 2em 4em;
    font-size: 1rem;

    &-title {
      margin: 0 0 vars.$l-gap 0;
      color: vars.$theme-color-1;
      font-size: 3em;
      font-weight: 500;
      letter-spacing: 0.05em;
    }

    &-button {
      font-size: 1.5em;
      padding: 1em 2em;
    }
  }
}

.banner-rectangle {
  .banner-cta {
    --theme-color-1: black;
    --theme-color-2: white;
  }
}

@media screen and (min-width: vars.$screen-s-desktop) {
  .banner {
    &-cta {
      aspect-ratio: 1;
      font-size: 1.4vw;
    }
  }

  .banner-rectangle {
    .banner-cta {
      --theme-color-1: white;
      --theme-color-2: rgba(255 255 255 / 0.3);
      position: absolute;
      right: 0;
      top: 0;
      width: auto;
      height: 100%;
      &-button {
        &:hover,
        &:focus {
          --theme-color-1: black;
          --theme-color-2: white;
        }
      }
    }
  }
}
</style>
