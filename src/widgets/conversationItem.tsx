import React from 'react';
import ConversationInterface from './../models/conversation_model';

interface props {
    ps: ConversationInterface
}

export default function ConversationWidget(msgProp: props) {
    const info = msgProp.ps;
    return (
        <div className="conversation center">
            <div className='avatar'>
                <h1>
                    {info.Id}
                </h1>
            </div>
            <div className='conversation__content'>
                <h3>
                    {info.Title}
                </h3>
                <h5>
                    {info.LastMessage.substring(0, 50)}
                </h5>
                <div className='row'>
                    <div className='spacer'></div>
                    <h6>
                        {info.LastMessageTime}
                    </h6>
                </div>
            </div>
        </div>
    )
};
