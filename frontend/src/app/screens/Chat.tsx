import { useState, useEffect } from "react";
import { Link } from "react-router";
import { App, fetchApps, chat } from "../data/api";

interface Message {
  role: "user" | "ai";
  content: string;
  suggestedApps?: string[];
}

export default function Chat() {
  const [apps, setApps] = useState<App[]>([]);

  useEffect(() => {
    const loadApps = async () => {
      const data = await fetchApps();
      setApps(data);
    };
    loadApps();
  }, []);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      content: "Hi! I'm your Pi app discovery assistant. Ask me anything like 'Find earning apps' or 'Best games to play'.",
      suggestedApps: []
    }
  ]);
  const [input, setInput] = useState("");
  const [isBusy, setIsBusy] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isBusy) return;
    
    setIsBusy(true);

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    
    // Send message to server
    const response = await chat(input);
    setMessages(prev => [...prev, { role: "ai", content: response.message, suggestedApps: response.suggestedApps.map(a => a.id) }]);

    setInput("");
    
    setIsBusy(false);
    
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="flex items-center gap-3 p-4">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            ←
          </Link>
          <h2>AI Assistant</h2>
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index}>
            <div className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card"
                }`}
              >
                {message.content}
              </div>
            </div>

            {/* Suggested Apps */}
            {message.suggestedApps && message.suggestedApps.length > 0 && (
              <div className="mt-3 space-y-2">
                {message.suggestedApps.map(appId => {
                  const app = apps.find(a => a.id === appId);
                  if (!app) return null;
                  return (
                    <Link
                      key={app.id}
                      to={`/app/${app.id}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-card hover:bg-secondary transition-colors"
                    >
                      <div className="text-2xl">{app.icon}</div>
                      <div className="flex-1 min-w-0">
                        <h4 className="truncate">{app.name}</h4>
                        <p className="text-muted-foreground text-sm truncate">
                          {app.description}
                        </p>
                      </div>
                      <div className="text-muted-foreground">→</div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="sticky bottom-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-t border-border p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type message..."
            disabled={isBusy}
            className="flex-1 px-4 py-2 rounded-xl bg-input-background border border-border focus:border-primary outline-none"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isBusy}
            className="px-6 py-2 rounded-xl bg-primary text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
