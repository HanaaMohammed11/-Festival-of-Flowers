import { FaSquareWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="relative bottom-0 lg:mt-44 xs:mt-20">
      <div className="bg-slate-700 w-full h-20  flex justify-center items-center mt-auto">
        <div className="flex gap-4 justify-center items-center">
          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/"
            className="relative flex items-center justify-center text-white text-xl rounded-full transition-all duration-300 hover:bg-[#25D366] hover:scale-110 w-12 h-12"
          >
            <FaSquareWhatsapp size={32} />
          </a>

          {/* Facebook Icon */}
          <a
            href="https://facebook.com/"
            className="relative flex items-center justify-center text-white text-xl rounded-full transition-all duration-300 hover:bg-[#1877f2] hover:scale-110 w-12 h-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M22.675 0H1.325C.595 0 0 .595 0 1.325v21.351c0 .73.595 1.325 1.325 1.325h11.495v-9.278h-3.138v-3.622h3.138v-2.673c0-3.107 1.84-4.827 4.711-4.827 1.373 0 2.808.271 2.808.271v3.032h-1.58c-1.338 0-1.754.831-1.754 1.682v2.102h3.138l-.503 3.622h-2.635v9.278h5.197c.73 0 1.325-.595 1.325-1.325V1.325C24 .595 23.405 0 22.675 0z" />
            </svg>
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://linkedin.com/"
            className="relative flex items-center justify-center text-white text-xl rounded-full transition-all duration-300 hover:bg-[#0077b5] hover:scale-110 w-12 h-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M2 0C.895 0 0 .895 0 2v20c0 1.105.895 2 2 2h20c1.105 0 2-.895 2-2V2c0-1.105-.895-2-2-2H2zm7.91 18H4.74v-8h3.17v8zM6.305 8.74c-1.07 0-1.93-.86-1.93-1.93 0-1.07.86-1.93 1.93-1.93 1.07 0 1.93.86 1.93 1.93 0 1.07-.86 1.93-1.93 1.93zM18.26 18h-3.16v-4.48c0-1.06-.021-2.44-1.48-2.44-1.5 0-1.73 1.17-1.73 2.39V18h-3.17v-8h3.03v1.1h.04c.42-.79 1.45-1.61 2.98-1.61 3.18 0 3.77 2.09 3.77 4.79v3.71h.01z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
