import { Mail, Instagram, Spotify, Youtube } from "lucide-react";

export default function OminyraSite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans p-6 space-y-12">
      <section className="text-center space-y-4">
        <img src="/logo.png" alt="Ominyra Logo" className="mx-auto h-48 w-auto" />
        <p className="text-lg text-gray-300">Psychedelic Bass | Sonic Alchemy</p>
        <a href="mailto:contact@ominyra.com" className="inline-flex items-center gap-2 mt-4 text-lg">
          <Mail /> Bookings & Inquiries
        </a>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <a href="https://spotify.com" target="_blank"><Spotify className="mx-auto mb-2" size={32} /><p>Listen on Spotify</p></a>
        <a href="https://youtube.com" target="_blank"><Youtube className="mx-auto mb-2" size={32} /><p>Watch on YouTube</p></a>
        <a href="https://instagram.com/ominyra" target="_blank"><Instagram className="mx-auto mb-2" size={32} /><p>Follow on Instagram</p></a>
      </section>

      <section className="max-w-2xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-semibold">About</h2>
        <p className="text-gray-400">
          Ominyra is an experimental bass project exploring sonic introspection and
          psychedelic healing through sound. Fusing hip hop, dubstep, and spiritual
          textures, Ominyra’s mission is to move both body and mind.
        </p>
      </section>

      <footer className="text-center text-gray-500 text-sm pt-8 border-t border-gray-700">
        © {new Date().getFullYear()} Ominyra. All rights reserved.
      </footer>
    </div>
  );
}
