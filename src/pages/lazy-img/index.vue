<template>
    <div>
        <div v-for="item in items"
             v-if="parents">
            <uLazyImg :src="item"
                      :height="1000"
                      :parents="parents" />
        </div>
    </div>
</template>
<script src="./index.js"></script>
