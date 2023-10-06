import React, { useState } from 'react';
import './ChatbotInterface.css';

const ChatbotInterface = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            setMessages([...messages, { type: 'user', text: inputValue.trim() }]);
            setInputValue('');

            // Ici, vous pouvez ajouter l'appel à l'API du chatbot et ajouter la réponse à la liste des messages.
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault(); // Empêche le saut de ligne par défaut lors de l'appui sur "Entrée"
            handleSendMessage();
        }
    };

    return (
        <div className="chatbot-box">
            <div className="chatbot-container">
                <div className="messages">
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.type}`}>
                            {message.text}
                        </div>
                    ))}
                </div>
                <div className="input-area">
                    <input 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type your message..."
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default ChatbotInterface;
