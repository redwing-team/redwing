<template>
    <input class="ui-switch"
           type="checkbox"
           :checked="checked"
           :disabled="disabled"
           :value="value"
           @change="change">
</template>
<script src="./index.js"></script>
<style src="./index.less"
       lang="less"></style>
