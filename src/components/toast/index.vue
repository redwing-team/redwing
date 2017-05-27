<template>
    <transition :name="maskTransition">
        <div class="ui-toast"
             v-show="visible">
            <Icon v-if="icon"
                  :type="icon"
                  :spin="type==='loading'"
                  class="ui-toast__icon" />
            <slot>{{message}}</slot>
        </div>
    </transition>
</template>
<script src="./index.js"></script>
<style src="./index.less"
       lang="less"></style>
