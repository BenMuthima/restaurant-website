import { MessageCircle } from "lucide-react";
import { waLink } from "../utils/whatsapp";
import { SITE } from "../config";
export default function WhatsAppButton() {
  return (
    <a href={waLink(`Hello ${SITE.name}, I have a question.`)} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-5 left-5 z-30 rounded-full bg-green-600 p-4 text-white shadow-lg transition-transform hover:scale-110">
      <MessageCircle />
    </a>
  );
}
