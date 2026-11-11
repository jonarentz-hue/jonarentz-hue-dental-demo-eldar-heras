import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  X, 
  Sparkles, 
  ChevronRight, 
  Calendar, 
  Smile, 
  Phone, 
  HelpCircle,
  RefreshCw,
  Star
} from 'lucide-react';
import { ChatMessage } from '../types';
import { getSmartLocalDentalResponse, getFollowUpSuggestions } from '../data/mockData';

interface DentalChatbotProps {
  onOpenBooking: (serviceId?: string) => void;
  onNavigateTab: (tab: 'overview' | 'reviews' | 'gallery' | 'booking' | 'portal') => void;
}

export const DentalChatbot: React.FC<DentalChatbotProps> = ({
  onOpenBooking,
  onNavigateTab
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasUnread, setHasUnread] = useState<boolean>(true);
  
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm-1',
      sender: 'bot',
      text: "Hello! I'm Pearl, your AI Dental Concierge at Heras Dental for Dr. Eldar Heras, DDS. How can I help you today? Feel free to ask about our patient reviews on Yelp & Google, painless numbing with The Wand®, porcelain veneers, insurance, or emergency care.",
      timestamp: 'Just now',
      suggestions: [
        'What do Yelp & Google reviews say about Dr. Heras?',
        'How much does teeth whitening cost?',
        'Do you accept Delta Dental / PPO?',
        'Severe toothache (Emergency)',
        'Tell me about porcelain veneers',
        'I have severe dental anxiety'
      ]
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [isOpen, messages]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Call backend /api/chat
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: messages.slice(-5)
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      const botReply = data.reply || getSmartLocalDentalResponse(query);

      const botMsg: ChatMessage = {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: botReply,
        timestamp: 'Just now',
        source: data.source || 'gemini',
        suggestions: getFollowUpSuggestions(query)
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      // Instant intelligent fallback if backend is unavailable
      const localReply = getSmartLocalDentalResponse(query);
      const botMsg: ChatMessage = {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: localReply,
        timestamp: 'Just now',
        source: 'local-faq',
        suggestions: getFollowUpSuggestions(query)
      };
      setMessages(prev => [...prev, botMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
        {!isOpen && (
          <button
            id="chatbot-open-btn"
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all"
            aria-label="Open Dental AI Assistant"
          >
            <div className="relative">
              <Bot className="w-6 h-6" />
              {hasUnread && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 border-2 border-blue-700 rounded-full animate-ping" />
              )}
            </div>
            
            <div className="hidden sm:block text-left">
              <span className="block text-xs font-black tracking-tight leading-none">Ask Pearl AI</span>
              <span className="text-[10px] text-blue-200 font-medium">Heras Dental FAQ & Triage</span>
            </div>

            {hasUnread && (
              <span className="absolute -top-2 -left-2 bg-rose-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-sm animate-bounce">
                1
              </span>
            )}
          </button>
        )}
      </div>

      {/* Expandable Chat Drawer / Window */}
      {isOpen && (
        <div 
          id="chatbot-window"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[580px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                <Sparkles className="w-5 h-5 text-blue-200" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-extrabold text-sm">Pearl • Dental AI</h3>
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                </div>
                <p className="text-[11px] text-blue-200">Heras Dental Concierge & Reviews</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  setMessages([messages[0]]);
                }}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10"
                title="Clear Chat History"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                id="chatbot-close-btn"
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Notice Banner */}
          <div className="bg-blue-50 px-3 py-1.5 text-[10px] text-blue-900 border-b border-blue-100 flex items-center justify-between">
            <span>✨ Powered by Dental AI Triage</span>
            <span className="text-blue-700 font-bold">Confidential Demo</span>
          </div>

          {/* Message Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.map((msg) => {
              const isBot = msg.sender === 'bot';
              return (
                <div 
                  key={msg.id}
                  className={`flex flex-col ${isBot ? 'items-start' : 'items-end'}`}
                >
                  <div className={`flex gap-2 max-w-[85%] ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
                    {isBot && (
                      <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs shrink-0 mt-1 shadow-2xs">
                        <Bot className="w-4 h-4" />
                      </div>
                    )}
                    
                    <div className={`p-3.5 rounded-2xl text-xs leading-relaxed ${
                      isBot 
                        ? 'bg-white text-slate-800 border border-slate-200/90 shadow-2xs rounded-tl-sm'
                        : 'bg-blue-600 text-white font-medium shadow-2xs rounded-tr-sm'
                    }`}>
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                    </div>
                  </div>

                  {/* Suggestion Chips */}
                  {isBot && msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2 pl-9">
                      {msg.suggestions.map((sug, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            if (sug.toLowerCase().includes('book')) {
                              setIsOpen(false);
                              onOpenBooking();
                            } else if (sug.toLowerCase().includes('review') || sug.toLowerCase().includes('yelp')) {
                              setIsOpen(false);
                              onNavigateTab('reviews');
                            } else if (sug.toLowerCase().includes('gallery') || sug.toLowerCase().includes('smile')) {
                              setIsOpen(false);
                              onNavigateTab('gallery');
                            } else {
                              handleSendMessage(sug);
                            }
                          }}
                          className="text-[11px] font-semibold bg-white hover:bg-blue-50 text-blue-800 border border-blue-200 px-2.5 py-1 rounded-full shadow-2xs transition-colors flex items-center gap-1"
                        >
                          <span>{sug}</span>
                          <ChevronRight className="w-3 h-3 opacity-60" />
                        </button>
                      ))}
                    </div>
                  )}

                  <span className="text-[9px] text-slate-400 mt-1 px-1">
                    {msg.timestamp}
                  </span>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex items-center gap-2 pl-2">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs shrink-0">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <div className="bg-white border border-slate-200 px-3.5 py-2 rounded-2xl rounded-tl-sm text-xs text-slate-500 shadow-2xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '300ms' }} />
                  <span className="ml-1 text-[11px]">Pearl is thinking...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Dock */}
          <div className="px-3 py-1.5 bg-slate-100/90 border-t border-slate-200 flex items-center justify-between text-[11px]">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="text-blue-700 font-bold hover:underline flex items-center gap-1"
            >
              <Calendar className="w-3 h-3" />
              <span>Book Appointment</span>
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                onNavigateTab('reviews');
              }}
              className="text-blue-700 font-bold hover:underline flex items-center gap-1"
            >
              <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
              <span>Reviews</span>
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                onNavigateTab('gallery');
              }}
              className="text-blue-700 font-bold hover:underline flex items-center gap-1"
            >
              <Smile className="w-3 h-3" />
              <span>Smile Gallery</span>
            </button>
            <a
              href="tel:9098824988"
              className="text-rose-600 font-bold hover:underline flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>Call (909) 882-4988</span>
            </a>
          </div>

          {/* Input Box */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input 
              type="text"
              id="chatbot-input"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask a question about Dr. Heras, reviews, or treatments..."
              className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-blue-600 bg-slate-50/50"
            />
            <button
              id="chatbot-send-btn"
              type="submit"
              disabled={isLoading || !inputMessage.trim()}
              className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 text-white transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
