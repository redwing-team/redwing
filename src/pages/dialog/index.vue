<template>
    <xPage>
        <xPageHeader>Dialog</xPageHeader>
        <xPageContent>
            <uCells>
                <uCellsBody>
                    <uCell>
                        <uCellBody>
                            <uButton @click.native="visible = true"
                                     theme="primary">默认</uButton>
                        </uCellBody>
                    </uCell>
                    <uCell>
                        <uCellBody>
                            <uButton @click.native="visible2 = true"
                                     theme="primary">不显示蒙层</uButton>
                        </uCellBody>
                    </uCell>
                    <uCell>
                        <uCellBody>
                            <uButton @click.native="visible3 = true"
                                     theme="primary">点击蒙层触发事件</uButton>
                        </uCellBody>
                    </uCell>
                </uCellsBody>
            </uCells>
        </xPageContent>
        <uDialog :visible="visible">
            <div style="background: white;padding:1rem">
                <div>默认</div>
                <uButton @click.native="visible = false"
                         theme="primary">关闭</uButton>
            </div>
        </uDialog>
        <uDialog :visible="visible2"
                 :mask="false">
            <div style="background: white;padding:1rem">
                不显示蒙层
                <uButton @click.native="visible2 = false"
                         theme="primary">关闭</uButton>
            </div>
        </uDialog>
        <uDialog :visible="visible3"
                 @touch-mask="visible3 = false">
            <div style="background: white;padding:1rem">
                <div>点击蒙层关闭</div>
            </div>
        </uDialog>


    </xPage>
</template>
<script src="./index.js"></script>
