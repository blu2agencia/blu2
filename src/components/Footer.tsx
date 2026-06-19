import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary px-8 md:py-32 py-16 rounded-t-4x md:mt-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-8">
          <div>
            <h3 className="text-white font-roboto-black mb-4 heading-letterspacing-sm">
              Dirección
            </h3>
            <div className="text-white space-y-1 font-roboto-regular">
              <div>Oaxaca #96 int. 103</div>
              <div>Col. Roma Norte</div>
              <div>CDMX</div>
              <div>C.P. 06700</div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-roboto-black mb-4 heading-letterspacing-sm">
              Contáctanos
            </h3>
            <div className="text-white space-y-2 font-roboto-regular">
              <div className="flex items-center gap-2">
                <Icon icon="mdi:whatsapp" className="w-4 h-4 text-white" />
                <span className="font-roboto-regular">Próximamente</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="mdi:email" className="w-4 h-4 text-white" />
                <a
                  href="mailto:info@blu2.mx"
                  className="font-roboto-regular hover:underline"
                >
                  info@blu2.mx
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-roboto-black mb-4 heading-letterspacing-sm">
              Talento
            </h3>
            <div className="text-white space-y-1 font-roboto-regular">
              <div>
                <Link
                  href="/artist/miguel-bose"
                  className="hover:underline"
                >
                  Miguel Bosé
                </Link>
              </div>
              <div>
                <Link href="/artist/flans" className="hover:underline">
                  Flans
                </Link>
              </div>
            </div>
          </div>

          <div className="text-right flex flex-col md:items-end">
            <div className="relative md:w-48 w-24 md:h-32 h-24 mb-4">
              <Image
                src="/images/logo-white.png"
                alt="Blu2 Logo"
                className="object-contain"
                fill
              />
            </div>
            <div className="flex md:justify-end gap-4">
              <a
                href="https://www.instagram.com/blu2entretenimiento/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Icon icon="mdi:instagram" className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.facebook.com/Blu2EG"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Icon icon="mdi:facebook" className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://x.com/blu2mx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Icon icon="simple-icons:x" className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
