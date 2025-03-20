import React from "react";
import Header from "../../components/header";
import backgroundCity from "../../Images/background/backgroundCity.jpg";
import AssemblyGuide from "../../components/AssemblyGuide";

const Montering = () => {
    return (
        <>
            <Header />

            <div
                className="flex flex-col items-center justify-center min-h-screen p-6"
                style={{
                    backgroundImage: `url(${backgroundCity})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className="flex flex-col items-center p-5 bg-gray-900 border rounded-lg mt-30">
                    <h2 className="text-3xl font-bold text-center text-white mb-6">Hur monterar man?</h2>
                    <p className="text-l text-left text-white">Med varje skylt vi tillverkar så ingår en supersmidig mall. Mallen är i tunn genomskinlig plast som ni enkelt tejpar upp på akterspegeln.
                        Varje bokstav kommer med stark och vattentålig tejp på baksidan. Så när mallen sitter på plats så tar ni bort skyddet från baksidan av bokstaven och
                        häftar enkelt fast den i sin plats.
                        Har ni beställt med belysning så får ni med en liten borrmall för där sladden från varje bokstav ska gå in i båten. Lägg dit borrmallen först, borra, sen är det bara att följa stegen som vanligt.
                    </p>
                    <p className="text-xl text-left text-white">
                        Montering några enkla steg:
                    </p>
                    <ol className="text-l text-left text-white">
                        <li> 1. Torka rent ytan noga med de medföljande våtservetterna</li>
                        <li> 2. Mät upp och tejpa fast mallen</li>
                        <li> 3. Lägg i de lösa borrmallsbokstäverna, en i taget och borra i det förborrade hålet 5 mm, ta bort och fortsätt med nästa bokstav.</li>
                        <li> 4. Trä igenom sladden , spara ca 5 cm och lägg en klick silikon i hålet innan sladden dras igenom helt.</li>
                        <li> 5. Ta bort tapen från bokstaven och tryck fast ordentligt. Kyla och fukt försämrar vidhäftningen. </li>
                        <li> 6. Koppla ihop alla bokstävers plus sladdar med varandra med de medföljande kopplingsplintarna, samma med minussladdarna, lägg sedan alltihop i den medföljande kopplingslådan. </li>
                        <li> 7. Anslut plus och minussladdarna till batteriet, närliggande strömkälla( t.ex. närmaste inner/ utebelysning, trappstegsbelysning el. liknande)
                            alt. anslut till vår trådlösa strömbrytare med dimmer (rekomenderas då skenet kan upplevas som ganska starkt när det är riktigt mörkt ) </li>
                        <li> 8. Klart! </li>
                    </ol>
                </div>
                <AssemblyGuide />
            </div >
        </>
    );
};

export default Montering;