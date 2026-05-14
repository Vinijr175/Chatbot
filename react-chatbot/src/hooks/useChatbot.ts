import { useState } from 'react';
import axios from 'axios';

interface Message {
    text: string;
    sender: 'user' | 'bot';
}

const useChatbot = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    const sendMessage = async (message: string) => {
        const newMessages: Message[] = [
            ...messages,
            { text: message, sender: "user" },
        ];
        setMessages(newMessages);

        try {
            const response = await axios.post(
                "https://openrouter.ai/api/v1/chat/completions",
                {
                     model: "google/gemma-3-12b-it",
    
                    messages: newMessages.map(msg => ({
                        role: msg.sender === 'user' ? 'user' : 'assistant',
                        content: msg.text
                    })),
                },
                {
                    headers: {
                       'Authorization': `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
                        'Content-Type': "application/json",
                    },
                }
            );

            
            const botMessage = response.data.choices[0].message.content;
            setMessages([...newMessages, { text: botMessage, sender: "bot" }]);

        } catch (error) {
            console.error("Error fetching AI response", error);
        }
    };

    return { messages, sendMessage };
};

export default useChatbot;
