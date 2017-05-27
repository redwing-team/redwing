<template>
    <div class="ui-header">
        <div class="ui-header__left">
            <slot name="left"></slot>
        </div>
        <div class="ui-header__title">
            <slot></slot>
        </div>
        <div class="ui-header__right">
            <slot name="right"></slot>
        </div>
    </div>
</template>
<style src="./index.less"
       lang="less"></style>
