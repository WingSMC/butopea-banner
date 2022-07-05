<script lang="ts" setup>
import { computed } from "vue";
import { CTABannerItem, GeneralBannerItem, ImageBannerItem } from "../types/BannerItem";
import BannerCTA from "./BannerCTA.vue";
import BannerImage from "./BannerImage.vue";

const { items } = withDefaults(
  defineProps<{
    items: GeneralBannerItem[];
  }>(),
  {
    items: () => [] as GeneralBannerItem[],
  }
);

const images = computed(
  () => items.filter((i) => i.type === "image") as ImageBannerItem[]
);
const cta = computed(() => items.find((i) => i.type === "cta") as CTABannerItem);
</script>

<template>
  <div class="carousel">
    <BannerCTA v-if="cta" :item="cta" />

    <div class="carousel-slides">
      <BannerImage
        v-for="(image, i) in images"
        class="carousel-slide"
        :id="`${$.uid}-${i}`"
        :item="image"
      />
    </div>

    <div class="carousel-thumbnails">
      <a
        v-for="(image, i) in images"
        class="carousel-thumbnail"
        :href="`#${$.uid}-${i}`"
        :style="`background-image: url(${image.src});`"
      ></a>
    </div>
  </div>
</template>

<style lang="scss">
@use "../style/vars" as vars;

.carousel {
  display: block;
  background-color: white;
  &-slides {
    scroll-snap-type: x mandatory;
    display: flex;
    aspect-ratio: 1;
    overflow-x: scroll;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &-slide {
    scroll-snap-align: start;
  }
  &-thumbnails {
    display: flex;
    padding: vars.$xs-gap;
    gap: vars.$xs-gap;
    overflow-x: scroll;
    height: calc(20vw + 1px);
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &-thumbnail {
    aspect-ratio: 1;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
  }
}

@media screen and (min-width: vars.$screen-s-desktop) {
  .carousel {
    display: none;
  }
}
</style>
