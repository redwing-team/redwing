<template>
    <div :class="classList">
        <slot></slot>
        <uIcon v-if="access"
               type="right"
               class="ui-cell__icon" />
    </div>
</template>
<script src="./index.js"></script>
<style src="./index.less"
       lang="less"></style>
