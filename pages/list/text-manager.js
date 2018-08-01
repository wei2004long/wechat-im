import IMOperator from "./im-operator";

export default class TextManager {
    constructor(page) {
        this._page = page;
    }

    /**
     * 接收到消息时，通过UI类的管理进行渲染
     * @param msg
     */
    showMsg({msg}) {
        //UI类是用于管理UI展示的类。
        this._page.UI.updateViewWhenReceive(msg);
    }

    /**
     * 发送消息时，通过UI类来管理发送状态的切换和消息的渲染
     * @param content 输入组件获取到的原始文本信息
     */
    sendText({content}) {
        this._page.UI.showItemForMoment(this._page.imOperator.createNormalChatItem({
            type: IMOperator.TextType,
            content
        }), (itemIndex) => {
            this._page.sendMsg(IMOperator.createChatItemContent({type: IMOperator.TextType, content}), itemIndex);
        });
    }
}