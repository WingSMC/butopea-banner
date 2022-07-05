<script lang="ts" setup>
import { GeneralBannerItem } from "../types/BannerItem";
import BannerCTA from "./BannerCTA.vue";
import BannerImage from "./BannerImage.vue";
import Carousel from "./Carousel.vue";

interface Props {
  mode?: "square" | "rectangle";
  carouselOnMobile?: boolean;
  items: Array<GeneralBannerItem>;
}

withDefaults(defineProps<Props>(), {
  mode: "square",
  carouselOnMobile: false,
});
</script>

<template>
  <div>
    <div
      class="banner"
      :class="`banner-${mode} ${carouselOnMobile ? 'banner-carousel' : ''}`"
      v-once
    >
      <component
        v-for="item in items"
        :is="item.type === 'cta' ? BannerCTA : BannerImage"
        :item="item"
      />
    </div>
    <Carousel v-if="carouselOnMobile" :items="items" />
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

  &-carousel {
    display: none;
  }
}

@media screen and (min-width: vars.$screen-s-desktop) {
  .banner {
    grid-template-columns: 1fr 1fr 1fr;
    &-rectangle {
      position: relative;
    }

    &-carousel {
      display: grid;
    }
  }
}
</style>
