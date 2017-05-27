<template>
    <xPage>
        <xPageHeader>Modal</xPageHeader>
        <xPageContent>
            <uCells>
                <uCellsHeader>默认</uCellsHeader>
                <uCellsBody>
                    <uCell>
                        <uCellBody>
                            <uButton @click.native="visible1 = true"
                                     theme="primary">alert</uButton>
                        </uCellBody>
                    </uCell>
                    <uCell>
                        <uCellBody>
                            <uButton @click.native="visible2 = true"
                                     theme="primary">confirm</uButton>
                        </uCellBody>
                    </uCell>
                    <uCell>
                        <uCellBody>
                            <uButton @click.native="visibleDl = true"
                                     theme="primary">dialog</uButton>
                        </uCellBody>
                    </uCell>
                </uCellsBody>
            </uCells>
            <uCells>
                <uCellsHeader>劫持关闭动作</uCellsHeader>
                <uCellsBody>
                    <uCell>
                        <uCellBody>
                            <uButton @click.native="visible3 = true"
                                     theme="primary">同步劫持</uButton>
                        </uCellBody>
                    </uCell>
                    <uCell>
                        <uCellBody>
                            <uButton @click.native="visible4 = true"
                                     theme="primary">手动异步劫持</uButton>
                        </uCellBody>
                    </uCell>
                    <uCell>
                        <uCellBody>
                            <uButton @click.native="visible5 = true"
                                     theme="primary">内置异步劫持</uButton>
                        </uCellBody>
                    </uCell>
                </uCellsBody>
            </uCells>
            <uCells>
                <uCellsHeader>点击蒙层关闭</uCellsHeader>
                <uCellsBody>
                    <uCell>
                        <uCellBody>
                            <uButton @click.native="visible6 = true"
                                     theme="primary">点击蒙层关闭</uButton>
                        </uCellBody>
                    </uCell>
                </uCellsBody>
            </uCells>
        </xPageContent>
        <uModal v-model="visible1"
                title="alert" />
        <uModal v-model="visible2"
                type="confirm"
                title="confirm" />
        <uModal v-model="visible3"
                title="同步劫持"
                type="confirm"
                @close="close" />
        <uModal v-model="visible4"
                title="手动异步劫持"
                @close="close2">
            延时3秒后再决定是否关闭
        </uModal>
        <uModal v-model="visible5"
                title="内置异步劫持"
                :async="close3">
            延时3秒关闭
            <br> async 必须返回 Promise 对象
        </uModal>
        <uModal v-model="visible6"
                touch-mask-close
                title="点击蒙层关闭">
        </uModal>
        <uDialog :visible="visibleDl"
                 mask>
            <div style="background: white;padding:1rem">
                1233213
            </div>
        </uDialog>
    </xPage>
</template>
<script src="./index.js"></script>
