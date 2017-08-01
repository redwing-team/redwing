<template>
    <xPage>
        <xPageHeader>润•UI 组件列表</xPageHeader>
        <xPageContent>
            <uCells>
                <uCellsBody>
                    <uCell v-for="(item, index) in items"
                           :key="index"
                           @click.native="to(item)"
                           access>
                        <uCellBody>{{item.name}}</uCellBody>
                    </uCell>
                </uCellsBody>
            </uCells>
        </xPageContent>
    </xPage>
</template>
<script src="./index.js"></script>
