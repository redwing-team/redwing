<template>
    <img :src="visible ? src: defaultSrc"
         :width="width"
         :height="height"
         @error="error">
</template>
<script src="./index.js"></script>
