import { useState, useEffect } from "react";
import { Link } from "react-router";
import { App, fetchApps } from "../data/api";

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

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);

    // Simple AI response logic
    setTimeout(() => {
      let response = "";
      let suggestedAppIds: string[] = [];

      const query = input.toLowerCase();

      if (query.includes("earn") || query.includes("money") || query.includes("reward")) {
        response = "Here are the top earning apps on Pi Network:";
        suggestedAppIds = ["1", "5", "8"];
      } else if (query.includes("game")) {
        response = "Check out these popular games:";
        suggestedAppIds = ["3", "8"];
      } else if (query.includes("wallet") || query.includes("finance")) {
        response = "Here are finance and wallet apps:";
        suggestedAppIds = ["2", "7", "11"];
      } else if (query.includes("social") || query.includes("chat")) {
        response = "Connect with these social apps:";
        suggestedAppIds = ["4", "12"];
      } else {
        response = "Here are some popular apps you might like:";
        suggestedAppIds = ["1", "2", "3", "4"];
      }

      const aiMessage: Message = {
        role: "ai",
        content: response,
        suggestedApps: suggestedAppIds
      };

      setMessages(prev => [...prev, aiMessage]);
    }, 500);

    setInput("");
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
            className="flex-1 px-4 py-2 rounded-xl bg-input-background border border-border focus:border-primary outline-none"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="px-6 py-2 rounded-xl bg-primary text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
