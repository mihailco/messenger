import React from "react";
import { getId } from "../data/constants";
import { GetConversations } from "../data/external_data_soursces/conversations";
import { getMessages } from "../data/external_data_soursces/messages_data";
import ConversationWidget from "../widgets/conversationItem";
import { MessageWidget } from './../widgets/message_widget';
import UserInformation from './../widgets/user_information';


export default function MessengerPage() {
    const msges = getMessages();
    const conversations = GetConversations();
    const id = getId();
    console.log(msges);
    return (
        <>
            <div className="layout">


                <div className="layout__chat chat box-scroll">
                    <div className=" chat-header">
                        {/* TODO: добавить появление окна, показывающего информацию о пользователе */}
                        {/* пока плохо работает */}
                        <a href={UserInformation()} >
                            <div className="avatar">101</div>
                        </a>
                        <div className="chat-header-text">RandomName a;sdjlansflknKSNafln</div>
                        <div className="spacer"></div>
                        <div className="icon">#iconStatus</div>
                    </div>
                    <div className="box-scroll__content messages">
                        {msges.map(ms => <MessageWidget ps={ms} isYours={(id === ms.userIdFrom)} />)}
                    </div>
                    <div className="box-scroll__footer">
                        <div className="row">
                            <input className="textfield-message-input" size={40} type="text" placeholder="time to speak up"/>
                            <div className="spacer"></div>
                            <div className="icon">
                            ##
                            </div>

                        </div>
                    </div>
                </div>


                <div className="layout__conversations conversations box-scroll">
                    <div className="conversation-header">
                        <div className="icon">#</div>
                        <input className="textfield" placeholder="search" size={15} type="search" />
                    </div>
                    <div className="box-scroll__content ">
                        {conversations.map(cv => <ConversationWidget ps={cv} />)}
                    </div>

                </div>
            </div>

        </>
    )
}