import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const PriceCalculator = () => {
    const [value, setValue] = useState(15);
    const [selectedOptions, setSelectedOptions] = useState({
        option1: false,
        option2: false,
        option3: false,
        option4: false,
    });

    const pricePerUnit = 170;

    // Baspris
    let basePrice = pricePerUnit * 1.05;

    for (let i = 16; i <= value; i++) {
        basePrice *= 1.01;
    }

    let totalPrice = basePrice * value;

    const meters = (value * 0.3048).toFixed(2);

    const percentageOptions = Object.entries(selectedOptions).reduce((acc, [key, isChecked]) => {
        if (isChecked) {
            acc += key === "option4" ? 350 : totalPrice * 0.25;
        }
        return acc;
    }, 0);

    totalPrice += percentageOptions;
    const totalPriceRounded = Math.round(totalPrice / 50) * 50;

    const handleCheckboxChange = (option: string) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [option]: !prev[option],
        }));
    };

    // --- FORMULÄR FÖR EMAILJS ---
    const formRef = useRef<HTMLFormElement>(null);
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const chosenOptions = [
        selectedOptions.option1 ? "Ligger i vattnet (+30%)" : null,
        selectedOptions.option2 ? "Flybridge (+25%)" : null,
        selectedOptions.option3 ? "Segelbåt med mast (+15%)" : null,
        selectedOptions.option4 ? "Dörr med dragkedja (+450 SEK)" : null,
    ]
        .filter(Boolean)
        .join(", ");

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current || sending) return;

        setSending(true);
        setSent(false);
        setError(null);

        emailjs
            .sendForm(
                "service_0jmw8md",       // Din Service ID
                "template_p815ty9",    // Skapa en ny template i EmailJS
                formRef.current,
                "uLZStVmQA_q_MDGe5"      // Din Public Key
            )
            .then(() => setSent(true))
            .catch(() => setError("Kunde inte skicka, försök igen."))
            .finally(() => setSending(false));
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-gray-900 text-white border rounded-lg w-80 mt-20">
            <h2 className="text-xl font-bold mb-4">Prisräknare!</h2>

            <label className="mb-2 text-lg">Hur många fot:</label>
            <input
                type="number"
                value={value}
                min="15"
                max="60"
                className="p-2 border rounded text-center w-24 mb-4"
                onChange={(e) => {
                    const newValue = Math.min(60, Math.max(15, Number(e.target.value)));
                    setValue(newValue);
                }}
            />
            <p className="mb-4 text-gray-400">≈ {meters} meter</p>

            <input
                type="range"
                min="15"
                max="60"
                step="1"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="w-64 mb-4 accent-blue-500"
            />

            <div className="flex flex-col items-start w-full mb-4">
                <label className="flex items-center mb-2">
                    <input
                        type="checkbox"
                        checked={selectedOptions.option1}
                        onChange={() => handleCheckboxChange("option1")}
                        className="mr-2"
                    />
                    Ligger båten i vattnet? (+30%)
                </label>
                <label className="flex items-center mb-2">
                    <input
                        type="checkbox"
                        checked={selectedOptions.option2}
                        onChange={() => handleCheckboxChange("option2")}
                        className="mr-2"
                    />
                    Flybridge (+25%)
                </label>
                <label className="flex items-center mb-2">
                    <input
                        type="checkbox"
                        checked={selectedOptions.option3}
                        onChange={() => handleCheckboxChange("option3")}
                        className="mr-2"
                    />
                    Segelbåt med masten på (+15%)
                </label>
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        checked={selectedOptions.option4}
                        onChange={() => handleCheckboxChange("option4")}
                        className="mr-2"
                    />
                    Dörr med dragkedja (75x121cm) (+450)
                </label>
            </div>

            {/* <p className="text-lg font-semibold">
                Pris: <span className="font-bold">{totalPrice.toFixed(2)} SEK</span>
            </p> */}
            <p className="text-lg font-semibold">
                Pris: <span className="font-bold">{totalPriceRounded.toLocaleString('sv-SE')} SEK</span>
            </p>


            {/* --- NYTT: EmailJS-formulär --- */}
            <form ref={formRef} onSubmit={sendEmail} className="mt-6 w-full flex flex-col gap-2">
                <h3 className="mb-3 text-lg font-semibold">Intresseanmälan</h3>
                <input type="text" name="user_name" placeholder="Ditt namn" required className="p-2 rounded text-white" />
                <input type="email" name="user_email" placeholder="Din e-post" required className="p-2 rounded text-white" />
                <textarea name="message" placeholder={`Båtmodell\nPlats\nÖnskad period\nTelefonnummer`} rows={4} className="p-2 rounded text-white" />

                {/* Dolda fält med beräkningsdata */}
                <input type="hidden" name="fot" value={value} />
                <input type="hidden" name="meter" value={meters} />
                <input type="hidden" name="options" value={chosenOptions || "Inga tillval"} />
                {/* <input type="hidden" name="price" value={totalPrice.toFixed(2)} /> */}
                <input type="hidden" name="price" value={String(totalPriceRounded)} />



                <button
                    type="submit"
                    disabled={sending}
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
                >
                    {sending ? "Skickar..." : "Skicka förfrågan"}
                </button>

                {sent && <p className="text-green-400 text-sm mt-2"> Tack! Vi kontaktarar dig så snabbt vi kan!</p>}
                {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
            </form>
        </div>
    );
};

export default PriceCalculator;
