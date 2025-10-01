'use client';

import { Facebook, Twitter, Linkedin, Share2, MessageCircle } from "lucide-react";

export default function ShareButtons({ url, title }) {
  const shareText = encodeURIComponent(title);
  const shareUrl = encodeURIComponent(url);

  return (
    <div className="mt-8 flex flex-wrap gap-3 justify-center">
      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
      >
        <Facebook size={18} /> Facebook
      </a>

      {/* Twitter / X */}
      <a
        href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-full shadow hover:bg-sky-600 transition"
      >
        <Twitter size={18} /> Twitter
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-full shadow hover:bg-blue-800 transition"
      >
        <Linkedin size={18} /> LinkedIn
      </a>

      {/* WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition"
      >
        <MessageCircle size={18} /> WhatsApp
      </a>

      {/* Native Web Share API */}
      <button
        onClick={() => {
          if (navigator.share) {
            navigator.share({ title, text: title, url });
          } else {
            alert("Sharing not supported in this browser.");
          }
        }}
        className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-full shadow hover:bg-gray-700 transition"
      >
        <Share2 size={18} /> Share
      </button>
    </div>
  );
}
