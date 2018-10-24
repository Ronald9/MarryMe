// components/com/topevery/home-list/home-list.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        mListItemObj: Object,
    },

    /**
     * 组件的初始数据
     */
    data: {
        mViewDetailText: "查看详情"
    },

    /**
     * 组件的方法列表
     */
    methods: {
        toViewDetail: function(e) {
            this.triggerEvent("viewdetail", {
                index: this.properties.mListItemObj.index
            }, {});
        }
    }
})