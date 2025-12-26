import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Volume2, VolumeX, Mic, Bot } from 'lucide-react';

const script = `नमस्कार!
आपका स्वागत है Vijay Electronics, Unnao में — आपकी सुरक्षा का भरोसेमंद नाम।

अगर आप CCTV कैमरा लगवाने, CP Plus CCTV camera price जानने, या CCTV कैमरा सर्विस की तलाश में हैं, तो आप बिल्कुल सही जगह पर हैं।

Vijay Electronics में आपको मिलते हैं Original CP Plus CCTV Cameras,
Bullet और Dome Cameras,
Best CCTV camera price,
और Professional Installation Service — वो भी पूरे Unnao में।

हम प्रदान करते हैं:
घर, दुकान, ऑफिस, स्कूल और फैक्ट्री के लिए
CP Plus CCTV Installation,
CCTV Repair & Maintenance,
और CP Plus Service Centre Support।

अगर आपका कैमरा काम नहीं कर रहा, DVR में समस्या है, या नेटवर्क इश्यू है —
तो हमारी expert technical team तुरंत समाधान देती है।

आज ही जानिए Vijay Electronics online offers today और पाएं
भरोसेमंद सर्विस, सही दाम और तेज़ सपोर्ट।

पता: Purani Bazar, Unnao
कॉल करें: 8090090051

Vijay Electronics —
सुरक्षा भी, सर्विस भी, भरोसे के साथ।`;

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [hasSpoken, setHasSpoken] = useState(false);
    const utteranceRef = useRef(null);

    useEffect(() => {
        // Auto-open after 1.5 seconds
        const timer = setTimeout(() => {
            if (!hasSpoken) {
                setIsOpen(true);
                speakScript();
                setHasSpoken(true);
            }
        }, 1500);

        return () => {
            clearTimeout(timer);
            cancelSpeech();
        };
    }, [hasSpoken]);

    const speakScript = () => {
        if (!window.speechSynthesis) return;

        cancelSpeech(); // Stop any previous speech

        const utterance = new SpeechSynthesisUtterance(script);
        utterance.lang = 'hi-IN';
        utterance.rate = 1.0;
        utterance.pitch = 1.0;

        // Try to find a Hindi Female voice
        const voices = window.speechSynthesis.getVoices();
        const hindiVoice = voices.find(v =>
            (v.lang.includes('hi') || v.lang.includes('HI')) &&
            (v.name.includes('Female') || v.name.includes('Girl') || v.name.includes('Google') || v.name.includes('Lekha'))
        ) || voices.find(v => v.lang.includes('hi'));

        if (hindiVoice) {
            utterance.voice = hindiVoice;
        }

        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);

        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
    };

    const cancelSpeech = () => {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
    };

    const toggleSpeech = () => {
        if (isSpeaking) {
            cancelSpeech();
        } else {
            speakScript();
        }
    };

    return (
        <>
            {/* Floating Toggle Button */}
            {!isOpen && (
                <button
                    onClick={() => { setIsOpen(true); speakScript(); }}
                    className="fixed bottom-6 right-6 bg-amazon-orange text-white p-4 rounded-full shadow-lg z-50 hover:bg-yellow-500 transition-transform hover:scale-110 flex items-center justify-center animate-bounce"
                    aria-label="Open AI Assistant"
                >
                    <Bot size={28} className="text-gray-900" />
                </button>
            )}

            {/* AI Assistant Window */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 w-80 md:w-96 bg-white rounded-lg shadow-2xl z-50 overflow-hidden border border-gray-200 flex flex-col font-sans animate-slide-up">
                    {/* Header */}
                    <div className="bg-amazon-light text-white p-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="bg-white/20 p-2 rounded-full">
                                <Bot size={24} className="text-amazon-orange" />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">Vijay AI Assistant</h3>
                                <div className="flex items-center gap-1">
                                    <span className={`w-2 h-2 rounded-full ${isSpeaking ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></span>
                                    <span className="text-xs text-gray-300">{isSpeaking ? 'Speaking...' : 'Online'}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button onClick={toggleSpeech} className="p-1 hover:bg-white/10 rounded">
                                {isSpeaking ? <Volume2 size={18} /> : <VolumeX size={18} />}
                            </button>
                            <button onClick={() => { setIsOpen(false); cancelSpeech(); }} className="p-1 hover:bg-white/10 rounded">
                                <X size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 bg-gray-50 max-h-[60vh] overflow-y-auto">
                        <div className="flex gap-3 mb-4">
                            <div className="w-8 h-8 rounded-full bg-amazon-orange flex items-center justify-center flex-shrink-0">
                                <Bot size={16} className="text-gray-900" />
                            </div>
                            <div className="bg-white p-3 rounded-r-lg rounded-bl-lg shadow-sm border text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">
                                {script}
                            </div>
                        </div>
                    </div>

                    {/* Footer / Input (Mock) */}
                    <div className="p-3 bg-white border-t flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="Ask about CCTV..."
                            className="flex-1 bg-gray-100 border-none rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-amazon-orange outline-none"
                        />
                        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-amazon">
                            <Mic size={18} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AIAssistant;
