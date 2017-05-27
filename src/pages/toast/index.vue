<template>
    <xPage>
        <xPageHeader>Toast</xPageHeader>
        <xPageContent>
            <uCells>
                <uCellsHeader>默认</uCellsHeader>
                <uCellsBody>
                    <uCell>
                        <uCellBody>
                            <uButton @click.native="visible1 = true"
                                     theme="primary">默认</uButton>
                        </uCellBody>
                    </uCell>
                </uCellsBody>
            </uCells>
            <uCells>
                <uCellsHeader>自动、手动关闭</uCellsHeader>
                <uCellsBody>
                    <uCell>
                        <uCellBody>
                            <uButton @click.native="visible2 = true"
                                     theme="primary">延时 5 秒消失</uButton>
                        </uCellBody>
                    </uCell>
                    <uCell>
                        <uCellBody>
                            <uButton @click.native="visible3 = !visible3"
                                     theme="primary">手动：点击{{visible3?'隐藏':'显示'}}</uButton>
                        </uCellBody>
                    </uCell>
                </uCellsBody>
            </uCells>
            <uCells>
                <uCellsHeader>状态图标</uCellsHeader>
                <uCellsBody>
                    <uCell>
                        <uCellBody>
                            <uButton @click.native="visible4 = true"
                                     theme="primary">成功</uButton>
                        </uCellBody>
                    </uCell>
                    <uCell>
                        <uCellBody>
                            <uButton @click.native="visible5 = true"
                                     theme="primary">警告</uButton>
                        </uCellBody>
                    </uCell>
                    <uCell>
                        <uCellBody>
                            <uButton @click.native="visible6 = true"
                                     theme="primary">错误</uButton>
                        </uCellBody>
                    </uCell>
                </uCellsBody>
                <uCells>
                    <uCellsHeader>loading</uCellsHeader>
                    <uCellsBody>
                        <uCell>
                            <uCellBody>
                                <uButton @click.native="visible7 = !visible7"
                                         theme="primary">loading：点击{{visible7?'隐藏':'显示'}}</uButton>
                            </uCellBody>
                        </uCell>
                    </uCellsBody>
                </uCells>
            </uCells>
        </xPageContent>
        <uToast v-model="visible1">默认：纯文本，2 秒消失</uToast>
        <uToast v-model="visible2"
                :duration="5">延时 5 秒消失</uToast>
        <uToast v-model="visible3"
                :duration="0">不会自动消失</uToast>
        <uToast v-model="visible4"
                type="success">成功</uToast>
        <uToast v-model="visible5"
                type="warn">失败</uToast>
        <uToast v-model="visible6"
                type="error">错误</uToast>
        <uToast v-model="visible7"
                type="loading">loading 需要手动关闭</uToast>
    </xPage>
</template>
<script src="./index.js"></script>
