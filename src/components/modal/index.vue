<template>
    <cDialog :visible="visible"
             :mask-transition="maskTransition"
             :box-transition="boxTransition"
             @touch-mask="touchMask">
        <div class="ui-modal">
            <div v-if="$slots.header || title"
                 class="ui-modal__hd">
                <slot name="header">{{title}}</slot>
            </div>
            <div class="ui-modal__bd">
                <slot>{{content}}</slot>
            </div>
            <div class="ui-modal__ft">
                <slot name="footer">
                    <button v-if="type ==='confirm'"
                            class="ui-modal__btn ui-modal__btn-cancel"
                            @click="cancel">
                        {{cancelText}}
                    </button>
                    <button class="ui-modal__btn"
                            @click="confirm">
                        <cIcon v-if="loading" type="loading" spin />
                        {{confirmText}}
                    </button>
                </slot>
            </div>
        </div>
    </cDialog>
</template>
<script src="./index.js"></script>
<style src="./index.less"
       lang="less"></style>
