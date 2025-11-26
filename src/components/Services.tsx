import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const services = [
    {
        title: "Δάπεδα, μοκέτες, χαλιά",
        price: "2,50 - 4,00€",
        unit: "ανά τ.μ.",
    },
    {
        title: "Καρέκλες, πολυθρόνες",
        price: "5,00 - 15,00€",
        unit: "ανά τεμάχιο",
        note: "ανάλογα το μέγεθος",
    },
    {
        title: "Καναπές διθέσιος-τριθέσιος",
        price: "40,00 - 80,00€",
        unit: "ανά τεμάχιο",
        note: "ανάλογα το μέγεθος",
    },
    {
        title: "Στρώμα μονό-διπλό",
        price: "30,00 - 45,00€",
        unit: "ανά τεμάχιο",
    },
    {
        title: "Κουρτίνες σταθερές",
        price: "Κατόπιν συνεννόησης",
        unit: "ελαφρώς & βαρέως τύπου",
        isSpecial: true,
    },
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">

                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                        Τιμοκατάλογος
                    </h2>
                    <p className="text-slate-600">
                        Βιολογικός καθαρισμός με επαγγελματική φροντίδα
                    </p>
                </div>

                {/* The Container: Narrower, cleaner, single surface */}
                <div className="max-w-3xl mx-auto">
                    <Card className="bg-white shadow-xl shadow-slate-200/60 rounded-2xl overflow-hidden border-0 ring-1 ring-slate-100">

                        {/* Optional: Decorative Header Strip */}
                        <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-600 w-full" />

                        <div className="p-6 md:p-8 space-y-8">
                            {services.map((item, idx) => (
                                <div key={idx} className="group relative">

                                    {/* Top Row: Title ---- Price */}
                                    <div className="flex items-end justify-between w-full">

                                        {/* Title Section */}
                                        <div className="relative z-10 bg-white pr-4">
                                            <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                                                {item.isSpecial && <Sparkles className="w-4 h-4 text-amber-500" />}
                                                {item.title}
                                            </h3>
                                        </div>

                                        {/* The Magic Dotted Line: Fills the space between title and price */}
                                        <div className="flex-grow border-b-2 border-dotted border-slate-200 mb-1.5 mx-2 relative -z-0" />

                                        {/* Price Section */}
                                        <div className="relative z-10 bg-white pl-4 text-right">
                                            <span className="block font-bold text-emerald-600 text-lg whitespace-nowrap">
                                                {item.price}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Bottom Row: Details & Unit (Subtle) */}
                                    <div className="flex justify-between items-start mt-1">
                                        <p className="text-xs text-slate-400 pl-0 md:pl-6">
                                            {item.note && <span>{item.note}</span>}
                                        </p>
                                        <p className="text-sm font-medium text-slate-500 text-right">
                                            {item.unit}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>

                        {/* Footer Note */}
                        <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
                            <p className="text-xs text-slate-400 font-medium">
                                *Οι τιμές δεν περιλαμβάνουν Φ.Π.Α.
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Services;
