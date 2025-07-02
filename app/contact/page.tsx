import ContactForm from "../../components/ContactForm";
import { LegalBackgroundPattern } from "@/components/background-elements";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden font-inter">
      <LegalBackgroundPattern />
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 py-20 sm:py-32 flex flex-col items-center">
        <h1 className="text-4xl xs:text-5xl sm:text-6xl font-black mb-4 text-white leading-tight tracking-tight text-center font-inter">
          Get in Touch <span className="text-terracotta-400">with GammaLex</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-10 text-center max-w-2xl font-inter">
          Whether you have questions, partnership ideas, or just want to say hello, our team is here for you. Fill out the form and we'll respond soon.
        </p>
        <div className="w-full bg-white/90 rounded-2xl shadow-xl border border-sage-200 p-8 sm:p-12 backdrop-blur-md">
          <ContactForm />
        </div>
      </div>
    </main>
  );
} 