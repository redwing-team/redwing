<template>
    <label :class="classList">
        <Icon type="check" class="ui-radio__icon"/>
        <input type="radio"
               :checked="checked"
               :disabled="disabled"
               :value="value"
               @change="change">
        <slot></slot>
    </label>
</template>
<script src="./index.js"></script>
<style src="./index.less"
       lang="less"></style>
