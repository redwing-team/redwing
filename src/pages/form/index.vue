<template>
    <xPage>
        <xPageHeader>Form</xPageHeader>
        <xPageContent>
            <uCells>
                <uCellsHeader>radio</uCellsHeader>
                <uCellsBody>
                    <uCell>
                        <uCellHeader>
                            <uLabel>list</uLabel>
                        </uCellHeader>
                        <uCellBody>
                            <uRadio v-for="(item, index) in radio.items"
                                    :key="index"
                                    v-model="radio.value"
                                    :value="item" /> {{radio.value}}
                        </uCellBody>
                    </uCell>
                    <uCell>
                        <uCellHeader>
                            <uLabel>disabled</uLabel>
                        </uCellHeader>
                        <uCellBody>
                            <uRadio v-for="(item, index) in radio.items"
                                    :key="index"
                                    v-model="radio.value"
                                    disabled
                                    :value="item" /> {{radio.value}}
                        </uCellBody>
                    </uCell>
                </uCellsBody>
            </uCells>
            <uCells>
                <uCellsHeader>checkbox</uCellsHeader>
                <uCellsBody>
                    <uCell>
                        <uCellHeader>
                            <uLabel>disabled</uLabel>
                        </uCellHeader>
                        <uCellBody>
                            <uCheckbox v-model="checkbox.boolean"
                                       disabled/>
                            <br> {{checkbox.boolean}}
                        </uCellBody>
                    </uCell>
                    <uCell>
                        <uCellHeader>
                            <uLabel>boolean</uLabel>
                        </uCellHeader>
                        <uCellBody>
                            <uCheckbox v-model="checkbox.boolean" />
                            <br>{{checkbox.boolean}}
                        </uCellBody>
                    </uCell>
                    <uCell>
                        <uCellHeader>
                            <uLabel>boolean2</uLabel>
                        </uCellHeader>
                        <uCellBody>
                            <uCheckbox v-model="checkbox.boolean2"
                                       :true-value="1"
                                       :false-value="2" />
                            <br>{{checkbox.boolean2}}
                        </uCellBody>
                    </uCell>
                    <uCell>
                        <uCellHeader>
                            <uLabel>array</uLabel>
                        </uCellHeader>
                        <uCellBody>
                            <uCheckbox v-for="(item, index) in checkbox.items"
                                       :key="item"
                                       v-model="checkbox.array"
                                       :value="item" />
                            <br> {{checkbox.array}}
                        </uCellBody>
                    </uCell>
                </uCellsBody>
            </uCells>
            <uCells>
                <uCellsHeader>switch</uCellsHeader>
                <uCellsBody>
                    <uCell>
                        <uCellHeader>
                            <uLabel>disabled</uLabel>
                        </uCellHeader>
                        <uCellBody>
                            <uSwitch v-model="switchData.boolean"
                                     disabled/>
                            <br>{{switchData.boolean}}
                        </uCellBody>
                    </uCell>
                    <uCell>
                        <uCellHeader>
                            <uLabel>boolean</uLabel>
                        </uCellHeader>
                        <uCellBody>
                            <uSwitch v-model="switchData.boolean" />
                            <br> {{switchData.boolean}}
                        </uCellBody>
                    </uCell>
                    <uCell>
                        <uCellHeader>
                            <uLabel>boolean2</uLabel>
                        </uCellHeader>
                        <uCellBody>
                            <uSwitch v-model="switchData.boolean2"
                                     :true-value="1"
                                     :false-value="2" />
                            <br>{{switchData.boolean2}}
                        </uCellBody>
                    </uCell>
                    <uCell>
                        <uCellHeader>
                            <uLabel>array</uLabel>
                        </uCellHeader>
                        <uCellBody>
                            <uSwitch v-for="(item, index) in switchData.items"
                                     :key="item"
                                     v-model="switchData.array"
                                     :value="item" />
                            <br>{{switchData.array}}
                        </uCellBody>
                    </uCell>
                </uCellsBody>
            </uCells>
            <uCells>
                <uCellsHeader>input</uCellsHeader>
                <uCellsBody>
                    <uCell>
                        <uCellHeader>
                            <uLabel>text</uLabel>
                        </uCellHeader>
                        <uCellBody>
                            <uInput v-model="input.text" />
                        </uCellBody>
                    </uCell>
                    <uCell>
                        <uCellHeader>
                            <uLabel>disabled</uLabel>
                        </uCellHeader>
                        <uCellBody>
                            <uInput v-model="input.text"
                                    disabled/>
                        </uCellBody>
                    </uCell>
                    <uCell>
                        <uCellHeader>
                            <uLabel>password</uLabel>
                        </uCellHeader>
                        <uCellBody>
                            <uInput v-model="input.text"
                                    type="password" />
                        </uCellBody>
                    </uCell>
                    <uCell>
                        <uCellHeader>
                            <uLabel>number</uLabel>
                        </uCellHeader>
                        <uCellBody>
                            <uInput v-model="input.number"
                                    type="number" />
                        </uCellBody>
                    </uCell>
                    <uCell>
                        <uCellHeader>
                            <uLabel>month</uLabel>
                        </uCellHeader>
                        <uCellBody>
                            <uInput v-model="input.month"
                                    type="month" />
                        </uCellBody>
                    </uCell>
                    <uCell>
                        <uCellHeader>
                            <uLabel>week</uLabel>
                        </uCellHeader>
                        <uCellBody>
                            <uInput v-model="input.week"
                                    type="week" />
                        </uCellBody>
                    </uCell>
                    <uCell>
                        <uCellHeader>
                            <uLabel>date</uLabel>
                        </uCellHeader>
                        <uCellBody>
                            <uInput v-model="input.date"
                                    type="date" />
                        </uCellBody>
                    </uCell>
                    <uCell>
                        <uCellHeader>
                            <uLabel>datetime-local</uLabel>
                        </uCellHeader>
                        <uCellBody>
                            <uInput v-model="input['datetime-local']"
                                    type="datetime-local" />
                        </uCellBody>
                    </uCell>
                    <uCell>
                        <uCellHeader>
                            <uLabel>time</uLabel>
                        </uCellHeader>
                        <uCellBody>
                            <uInput v-model="input.time"
                                    type="time" />
                        </uCellBody>
                    </uCell>
                </uCellsBody>
            </uCells>
            <uCells>
                <uCellsHeader>select</uCellsHeader>
                <uCellsBody>
                    <uCell>
                        <uCellHeader>
                            <uLabel>default</uLabel>
                        </uCellHeader>
                        <uCellBody>
                            <uSelect :items="select.items"
                                     v-model="select.value"
                                     placeholder="" />
                        </uCellBody>
                    </uCell>
                    <uCell>
                        <uCellHeader>
                            <uLabel>placeholder</uLabel>
                        </uCellHeader>
                        <uCellBody>
                            <uSelect :items="select.items"
                                     v-model="select.value" />
                        </uCellBody>
                    </uCell>
                    <uCell>
                        <uCellHeader>
                            <uLabel>disabled</uLabel>
                        </uCellHeader>
                        <uCellBody>
                            <uSelect :items="select.items"
                                     v-model="select.value"
                                     disabled
                                     placeholder="" />
                        </uCellBody>
                    </uCell>
                </uCellsBody>
            </uCells>
            <uCells>
                <uCellsHeader>textarea</uCellsHeader>
                <uCellsBody>
                    <uCell align="top">
                        <uCellHeader>
                            <uLabel>default</uLabel>
                        </uCellHeader>
                        <uCellBody>
                            <uTextarea v-model="textarea" />
                        </uCellBody>
                    </uCell>
                    <uCell align="top">
                        <uCellHeader>
                            <uLabel>disabled</uLabel>
                        </uCellHeader>
                        <uCellBody>
                            <uTextarea v-model="textarea"
                                       disabled />
                        </uCellBody>
                    </uCell>
                </uCellsBody>
            </uCells>
        </xPageContent>
    </xPage>
</template>
<script src="./index.js"></script>
