<template>
    <div class="ui-dialog"
         @touchmove="onTouchMove">
        <transition :name="maskTransition"
                    v-if="mask">
            <div v-show="visible"
                 class="ui-dialog__mask"
                 @click="touchMask"></div>
        </transition>
        <transition :name="boxTransition">
            <div class="ui-dialog__box"
                 v-show="visible">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script src="./index.js"></script>
<style src="./index.less"
       lang="less"></style>
