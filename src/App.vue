<script lang="ts" setup>
import BannerComponent from "./components/BannerComponent.vue";
</script>

<template>
  <BannerComponent
    mode="square"
    style="--theme-color-2: #a9f0ff"
    :items="[
      {
        type: 'image',
        aspectRatio: 'square',
        src: 'https://picsum.photos/400',
        link: '#',
      },
      {
        type: 'cta',
        title: 'CTA Title',
        button: 'CTA Button',
        link: '#',
      },
      {
        type: 'image',
        aspectRatio: 'square',
        src: 'https://picsum.photos/400',
        link: '#',
      },
    ]"
  />
  <hr />
  <BannerComponent
    style="--theme-color-2: #c8ffaa"
    :carousel-on-mobile="true"
    :items="[
      {
        type: 'cta',
        title: 'CTA Title',
        button: 'CTA Button',
        link: 'https://example.com/link1',
      },
      {
        type: 'image',
        aspectRatio: 'square',
        src: 'https://picsum.photos/400',
        link: 'https://example.com/link2',
      },
      {
        type: 'image',
        aspectRatio: 'square',
        src: 'https://picsum.photos/400',
        link: 'https://example.com/link3',
      },
      {
        type: 'image',
        aspectRatio: 'square',
        src: 'https://picsum.photos/400',
        link: 'https://example.com/link3',
      },
      {
        type: 'image',
        aspectRatio: 'square',
        src: 'https://picsum.photos/400',
        link: 'https://example.com/link3',
      },
      {
        type: 'image',
        aspectRatio: 'square',
        src: 'https://picsum.photos/400',
        link: 'https://example.com/link3',
      },
    ]"
  />
  <hr />
  <BannerComponent
    mode="rectangle"
    style="--theme-color-1: #fff; --theme-color-2: #707070"
    :items="[
      {
        type: 'image',
        aspectRatio: 'rectangle',
        src: 'https://picsum.photos/1200/400',
        link: 'https://example.com/link1',
      },
      {
        type: 'image',
        aspectRatio: 'square',
        src: 'https://picsum.photos/400',
        link: 'https://example.com/link1',
      },
      {
        type: 'cta',
        title: 'CTA Title',
        button: 'CTA Button',
        link: 'https://example.com/link1',
      },
    ]"
  />
</template>

<style lang="scss">
@use "./style/vars" as vars;
@use "./style/global";
</style>
