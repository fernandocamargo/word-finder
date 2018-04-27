<template>
  <nav aria-label="Breadcrumb" class="breadcrumb">
    <h4 class="title">Where am I?</h4>
    <ol class="items">
      <li
        v-for="(fragment, index) in fragments"
        v-bind:key="index"
        class="item"
      >
        <a :href="fragment.url" :title="fragment.label">{{ fragment.label }}</a>
        <span v-if="fragment.active">(&laquo; you are here)</span>
      </li>
    </ol>
  </nav>
</template>

<script src="./composition.js"></script>

<style lang="scss" src="./styles.scss" scoped></style>
