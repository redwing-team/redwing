<template>
    <uCell>
        <uCellBody>
            <h1>按钮</h1>
            <h2>base</h2>
            <uButton>default</uButton>
            <uButton theme="primary">primary</uButton>
            <uButton theme="danger">danger</uButton>
            <uButton theme="ghost">ghost</uButton>
            <h2>disabled</h2>
            <uButton disabled>disabled</uButton>
            <uButton theme="primary"
                     disabled>disabled</uButton>
            <uButton theme="danger"
                     disabled>disabled</uButton>
            <uButton theme="ghost"
                     disabled>disabled</uButton>

            <h2>loading</h2>
            <uButton loading>loading</uButton>
            <uButton theme="primary"
                     loading>loading</uButton>
            <uButton theme="danger"
                     loading>loading</uButton>
            <uButton theme="ghost"
                     loading>loading</uButton>

            <h2>icon</h2>
            <uButton icon="right">icon</uButton>
            <uButton theme="primary"
                     icon="right">icon</uButton>
            <uButton theme="danger"
                     icon="right">icon</uButton>
            <uButton theme="ghost"
                     icon="right">icon</uButton>

            <h2>inline / small</h2>
            <uButton inline>inline</uButton>
            <uButton size="small">small</uButton>
        </uCellBody>
    </uCell>
</template>
<style lang="less">
    .ui-btn {
        &+& {
            margin-top: 0.2rem;
        }
    }
</style>
