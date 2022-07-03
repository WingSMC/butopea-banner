<script lang="ts" setup>
import BannerComponent from "./components/BannerComponent.vue";
</script>

<template>
  <BannerComponent
    mode="square"
    :carousel-on-mobile="false"
    :items="[
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
        link: 'https://example.com/link2',
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
    mode="square"
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
    :carousel-on-mobile="false"
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

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
