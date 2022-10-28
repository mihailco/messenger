import React from "react";
import { InterfaceMessages } from "../models/message_model";

interface props {
    ps: InterfaceMessages
    isYours: boolean
}

export function MessageWidget(msgProp: props) {
    let msg = msgProp.ps;
    let isYours = msgProp.isYours;
    return (
        <div className="message">
            {isYours && <div className="spacer"></div>}
            {/* Почитай еще раз о том как называть элементы по БЭМу (подсказка, через __) + элемент не может быть вне блока, как messages_message у тебя */}
            <div className={!isYours? "message-content messages_message":"messages_message message-from"}>
                {msg.messageText}
            </div>

            {!isYours &&<div className="spacer"></div>}
        </div>
    )


}
