<template>
    <select v-model="currentValue"
            @focus="focus"
            @blur="blur"
            class="ui-select"
            :class="{
                'ui-select--placeholder': placeholder && currentValue === ''
            }">
            <option v-if="placeholder" value="">{{placeholder}}</option>
            <option v-for="item in items" :value="item.value">
                {{item.label}}
            </option>
    </select>
</template>
<script src="./index.js"></script>
<style src="./index.less"
       lang="less"></style>
