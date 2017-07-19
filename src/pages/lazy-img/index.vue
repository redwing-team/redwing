<template>
    <div>
        <div v-for="item in items">
            <uLazyImg :src="item" />
        </div>
    </div>
</template>
<script src="./index.js"></script>
