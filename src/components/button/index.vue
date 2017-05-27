<template>
    <button :class="classList">
        <Icon v-if="iconType" :type="iconType" :spin="loading" />
        <slot></slot>
    </button>
</template>
<script src="./index.js"></script>
<style src="./index.less"
       lang="less"></style>
