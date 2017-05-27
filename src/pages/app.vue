<template>
    <div id="app">
        <transition>
            <keep-alive>
                <router-view />
            </keep-alive>
        </transition>
    </div>
</template>
<script src="./app.js"></script>
<style lang="less"
       src="./app.less"></style>
