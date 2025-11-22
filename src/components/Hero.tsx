import { Button } from "@/components/ui/button";
import { Sparkles, Droplets } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";

const Hero = () => {
    const scrollToContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20">
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `linear-gradient(to right, hsl(var(--background) / 0.95), hsl(var(--background) / 0.7)), url(${heroImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl">
                    <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
                        <Sparkles className="w-5 h-5 text-accent" />
                        <span className="text-accent font-medium">Βιολογικός Καθαρισμός</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
                        Επαγγελματικός Καθαρισμός
                        <span className="block text-primary">Τώρα πιο Απλός</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                        Εξειδικευμένος βιολογικός καθαρισμός με Αυστραλιανή τεχνολογία.
                        <span className="block mt-2 font-semibold text-foreground">
              Καθαρό και στεγνό επί τόπου!
            </span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <Button
                            size="lg"
                            onClick={scrollToContact}
                            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
                        >
                            Ζητήστε Προσφορά
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => {
                                const element = document.getElementById("services");
                                if (element) element.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="text-lg px-8 py-6 border-2 hover:bg-secondary"
                        >
                            Δείτε τις Υπηρεσίες
                        </Button>
                    </div>

                    <div className="flex items-center space-x-2 text-accent">
                        <Droplets className="w-5 h-5" />
                        <span className="font-medium">Eco-friendly & Safe Products</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
