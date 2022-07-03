<script lang="ts" setup>
import { GeneralCarouselItem } from "../types/CarouselItem";

defineProps<{
  mode: "square" | "rectangle";
  carouselOnMobile: boolean;
  items: Array<GeneralCarouselItem>;
}>();
</script>

<template>
  <div class="banner" v-once>
    <template class="" v-for="(item, i) in items">
      <a
        class="banner-item banner-image"
        v-if="item.type === 'image'"
        :href="item.link"
        :style="`background-image: url(${item.src});`"
      ></a>
      <div v-else-if="item.type === 'cta'" class="banner-item banner-cta">
        <h3>{{ item.title }}</h3>
        <a :href="item.link">{{ item.button }}</a>
      </div>
    </template>
  </div>
</template>

<style lang="scss">
.banner {
  width: 100%;
  display: grid;
  .banner-item {
    width: 100%;
    aspect-ratio: 1;
  }

  .banner-image {
    display: block;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .banner-cta {
    display: block;
    background-color: #000;
    cursor: pointer;
    display: grid;
    place-items: center;

    a {
      display: block;
      color: #fff;
      text-align: center;
      text-decoration: none;
      padding: 1rem;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
}

@media screen and (orientation: landscape) and (min-width: 1280px) {
  .banner {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
