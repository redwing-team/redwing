<template>
    <label :class="classList">
        <Icon type="check-circle-o" class="ui-checkbox__icon"/>
        <input type="checkbox"
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
