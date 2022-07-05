<script lang="ts" setup>
import { ImageBannerItem } from "../types/BannerItem";
defineProps<{
  item: ImageBannerItem;
}>();
</script>

<template>
  <a
    class="banner-item banner-image"
    :class="`banner-image-${item.aspectRatio}`"
    :href="item.link"
    :style="`background-image: url(${item.src});`"
  ></a>
</template>

<style lang="scss">
@use "../style/vars" as vars;

.banner {
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
}

@media screen and (min-width: vars.$screen-s-desktop) {
  .banner-rectangle {
    .banner-image {
      &-square {
        display: none;
      }
      &-rectangle {
        grid-column: 1 / 4;
        display: block;
      }
    }
  }
}
</style>
