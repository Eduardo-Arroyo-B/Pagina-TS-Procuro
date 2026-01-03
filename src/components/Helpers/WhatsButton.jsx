import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
    return (
        <a
            href="https://wa.me/526643371026?text=Hola,%20quiero%20información%20del%20curso"
            target="_blank"
            rel="noopener noreferrer"
            className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-14 h-14 rounded-full
        bg-[#25D366]
        text-white
        shadow-lg
        hover:scale-110
        hover:shadow-xl
        transition
      "
            aria-label="WhatsApp"
        >
            <MessageCircle size={28} />
        </a>
    );
}
