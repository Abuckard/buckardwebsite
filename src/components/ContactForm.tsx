// import { useRef } from "react";
// import emailjs from "emailjs-com";

// const ContactForm = ({ designData }: { designData: any }) => {
//     const formRef = useRef<HTMLFormElement>(null);

//     const sendEmail = (e: React.FormEvent) => {
//         e.preventDefault();
//         if (!formRef.current) return;

//         emailjs.sendForm(
//             "service_0jmw8md",
//             "template_fajoazn",
//             formRef.current,
//             "uLZStVmQA_q_MDGe5"
//         )
//             .then(() => {
//                 alert("Meddelandet skickat! 🎉");
//             })
//             .catch((err) => {
//                 console.error(err);
//                 alert("Kunde inte skicka, försök igen senare.");
//             });
//     };

//     return (
//         <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-2">
//             <input type="text" name="user_name" placeholder="Ditt namn" required />
//             <input type="email" name="user_email" placeholder="Din e-post" required />
//             <textarea name="message" placeholder="Meddelande" />

//             {/* Skicka med designinfo */}
//             <input type="hidden" name="designData" value={JSON.stringify(designData)} />

//             <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
//                 Skicka
//             </button>
//         </form>
//     );
// };

// export default ContactForm;


import { useRef, useState, useMemo } from "react";
import emailjs from "emailjs-com";

type ContactFormProps = {
    designData: any;
};

const ContactForm = ({ designData }: ContactFormProps) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Plocka fram säkra default-värden så vi slipper undefined i templaten
    const fields = useMemo(() => {
        const d = designData || {};
        return {
            main_text: d.text ?? "",
            main_font: d.selectedFont ?? "",
            main_color: d.selectedColor ?? "",
            main_glow: d.selectedGlow ?? "none",
            main_rotation: typeof d.rotation === "number" ? d.rotation : 0,
            main_position_top: d.textPosition?.top ?? 50,
            main_position_left: d.textPosition?.left ?? 50,
            main_size_px: d.fontSize ?? 16,

            extra_text: d.text2 ?? "",
            extra_font: d.selectedFont2 ?? "",
            extra_color: d.selectedColor2 ?? "",
            extra_glow: d.selectedGlow2 ?? "none",
            extra_rotation: typeof d.rotation2 === "number" ? d.rotation2 : 0,
            extra_position_top: d.textPosition2?.top ?? 65,
            extra_position_left: d.textPosition2?.left ?? 50,
            extra_size_px: d.fontSize2 ?? 14,
            extra_enabled: d.showExtra ? "Ja" : "Nej",

            size_choice: d.selectedSize ?? "",
            price_sek: typeof d.totalPrice === "number" ? d.totalPrice : "",
            bg_scale: d.bgScale ?? 1,
        };
    }, [designData]);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current || sending) return;

        setSending(true);
        setSent(false);
        setError(null);

        emailjs
            .sendForm(
                "service_0jmw8md",     // <-- din Service ID
                "template_fajoazn",    // <-- din Template ID
                formRef.current,
                "uLZStVmQA_q_MDGe5"    // <-- din Public Key
            )
            .then(() => {
                setSent(true);
            })
            .catch((err) => {
                console.error(err);
                setError("Kunde inte skicka, försök igen senare.");
            })
            .finally(() => setSending(false));
    };

    return (
        <form
            ref={formRef}
            onSubmit={sendEmail}
            className="mt-8 w-full max-w-md rounded-lg border border-white/20 p-4 backdrop-blur-sm"
        >
            <h3 className="mb-3 text-lg font-semibold">Kontakta oss</h3>

            <div className="mb-2">
                <label className="mb-1 block text-sm text-white/80">Ditt namn</label>
                <input
                    type="text"
                    name="user_name"
                    placeholder="Ditt namn"
                    required
                    className="w-full rounded border border-white/30 bg-transparent px-3 py-2 text-white placeholder-white/50 focus:outline-none"
                />
            </div>

            <div className="mb-2">
                <label className="mb-1 block text-sm text-white/80">Din e-post</label>
                <input
                    type="email"
                    name="user_email"
                    placeholder="namn@exempel.se"
                    required
                    className="w-full rounded border border-white/30 bg-transparent px-3 py-2 text-white placeholder-white/50 focus:outline-none"
                />
            </div>

            <div className="mb-4">
                <label className="mb-1 block text-sm text-white/80">Meddelande</label>
                <textarea
                    name="message"
                    placeholder="Berätta gärna mer om båten eller önskemål."
                    rows={4}
                    className="w-full rounded border border-white/30 bg-transparent px-3 py-2 text-white placeholder-white/50 focus:outline-none"
                />
            </div>

            {/* ---- DOLDA FÄLT: snygg struktur till templaten ---- */}
            <input type="hidden" name="main_text" value={fields.main_text} />
            <input type="hidden" name="main_font" value={fields.main_font} />
            <input type="hidden" name="main_color" value={fields.main_color} />
            <input type="hidden" name="main_glow" value={fields.main_glow} />
            <input type="hidden" name="main_rotation" value={String(fields.main_rotation)} />
            <input type="hidden" name="main_position_top" value={String(fields.main_position_top)} />
            <input type="hidden" name="main_position_left" value={String(fields.main_position_left)} />
            <input type="hidden" name="main_size_px" value={String(fields.main_size_px)} />

            <input type="hidden" name="extra_enabled" value={fields.extra_enabled} />
            <input type="hidden" name="extra_text" value={fields.extra_text} />
            <input type="hidden" name="extra_font" value={fields.extra_font} />
            <input type="hidden" name="extra_color" value={fields.extra_color} />
            <input type="hidden" name="extra_glow" value={fields.extra_glow} />
            <input type="hidden" name="extra_rotation" value={String(fields.extra_rotation)} />
            <input type="hidden" name="extra_position_top" value={String(fields.extra_position_top)} />
            <input type="hidden" name="extra_position_left" value={String(fields.extra_position_left)} />
            <input type="hidden" name="extra_size_px" value={String(fields.extra_size_px)} />

            <input type="hidden" name="size_choice" value={fields.size_choice} />
            <input type="hidden" name="price_sek" value={String(fields.price_sek)} />
            <input type="hidden" name="bg_scale" value={String(fields.bg_scale)} />

            {/* ---- Knapp & states ---- */}
            <button
                type="submit"
                disabled={sending}
                className={`w-full rounded px-4 py-2 font-medium ${sending ? "bg-white/30 text-white/60 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-500"
                    }`}
            >
                {sending ? "Skickar…" : "Skicka"}
            </button>

            {sent && <p className="mt-3 text-sm text-emerald-400">Meddelandet skickat! 🎉</p>}
            {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
        </form>
    );
};

export default ContactForm;
