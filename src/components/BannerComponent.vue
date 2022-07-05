<script lang="ts" setup>
import { computed } from "vue";
import { GeneralBannerItem } from "../types/BannerItem";

interface Props {
  mode?: "square" | "rectangle";
  carouselOnMobile?: boolean;
  items: Array<GeneralBannerItem>;
}

const { mode } = withDefaults(defineProps<Props>(), {
  mode: "square",
  carouselOnMobile: false,
});

const bannerIsRectangle = computed(() => mode === "rectangle");
</script>

<template>
  <div class="banner" :class="`banner-${mode}`">
    <template v-for="item in items">
      <a
        v-if="item.type === 'image'"
        class="banner-item banner-image"
        :class="bannerIsRectangle ? `banner-image-${item.aspectRatio}` : ''"
        :href="item.link"
        :style="`background-image: url(${item.src});`"
      ></a>

      <a v-else class="banner-item banner-cta" :href="item.link">
        <h3 class="banner-cta-title">{{ item.title }}</h3>
        <button class="banner-cta-button">{{ item.button }}</button>
      </a>
    </template>
  </div>
</template>

<style lang="scss">
@use "../style/vars" as vars;

.banner {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;

  &-item {
    width: 100%;
  }

  &-image {
    display: block;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    aspect-ratio: 1;
    &-rectangle {
      display: none;
      aspect-ratio: 3;
    }
  }

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
    grid-template-columns: 1fr 1fr 1fr;
    &-cta {
      aspect-ratio: 1;
      font-size: 1.4vw;
    }
    &-image {
      &-square {
        display: none;
      }
      &-rectangle {
        grid-column: 1 / 4;
        display: block;
      }
    }
  }

  .banner-rectangle {
    position: relative;
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
