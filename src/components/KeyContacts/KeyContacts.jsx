import React from "react";
import keyContactsData from "./data";
import messageIcon from "../../images/envelope.png"
import callIcon from "../../images/call.png"

function KeyContacts() {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 px-6">
            <h3 className="text-gray-800 font-semibold mb-4 text-xl">Key Contacts</h3>
            {keyContactsData.map((contact) => (
                <div className="flex items-start mb-3 last:mb-0 pt-3" key={contact.id}>
                    <img
                        src={contact.image}
                        alt={contact.name}
                        className="w-10 h-10 rounded-full mr-6"
                    />
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-400 font-semibold text-xl">{contact.name}</span>
                            <img src={messageIcon} alt="message" style={{ width: '12px', height: '12px', marginLeft: '8px' }} />
                            <img src={callIcon} alt="call" style={{ width: '12px', height: '12px' }} />
                        </div>
                        <p className="text-sm text-gray-400">{contact.role}</p>
                        <p className="text-sm text-gray-500 mt-2">
                            Last talked: {contact.lastTalked}<br />
                            {contact.details}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default KeyContacts;
