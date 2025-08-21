import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const SupportForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        emailjs
            .sendForm(
                "service_0jmw8md",       // samma service ID
                "template_supportform",  // ditt nya template i EmailJS
                formRef.current,
                "uLZStVmQA_q_MDGe5"      // public key
            )
            .then(() => setSent(true))
            .catch((err) => {
                console.error(err);
                setError("Kunde inte skicka, försök igen senare.");
            });
    };

    return (
        <form
            ref={formRef}
            onSubmit={sendEmail}
            className="mt-8 w-full max-w-md rounded-lg border border-white/20 p-4 backdrop-blur-sm"
        >
            <h3 className="mb-3 text-lg font-semibold">Support</h3>

            <input
                type="text"
                name="user_name"
                placeholder="Ditt namn"
                required
                className="w-full mb-2 rounded border border-white/30 bg-transparent px-3 py-2 text-white"
            />

            <input
                type="email"
                name="user_email"
                placeholder="Din e-post"
                required
                className="w-full mb-2 rounded border border-white/30 bg-transparent px-3 py-2 text-white"
            />

            <textarea
                name="issue"
                placeholder="Beskriv ditt problem"
                rows={4}
                required
                className="w-full mb-4 rounded border border-white/30 bg-transparent px-3 py-2 text-white"
            />

            <button
                type="submit"
                className="w-full rounded px-4 py-2 font-medium bg-green-600 text-white hover:bg-green-500"
            >
                Skicka supportärende
            </button>

            {sent && <p className="mt-3 text-sm text-emerald-400">Ärendet skickat! ✅</p>}
            {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
        </form>
    );
};

export default SupportForm;
