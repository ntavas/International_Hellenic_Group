import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Demonstration = () => {
    const demos = [
        {
            id: 1,
            title: "Καθαρισμός Εκκλησίας",
            description: "Επαγγελματικός καθαρισμός Ιερού Ναού",
        },
        {
            id: 2,
            title: "Βιολογικός Καθαρισμός Σαλλονιού",
            description: "Αφαίρεση λεκέδων και απολύμανση",
        },
        {
            id: 3,
            title: "Γυάλισμα Δαπέδων",
            description: "Κρυσταλλοποίηση και γυάλισμα μαρμάρων",
        },
        {
            id: 4,
            title: "Καθαρισμός Επαγγελματικού Χώρου",
            description: "Ολοκληρωμένη φροντίδα γραφείων",
        },
        {
            id: 5,
            title: "Καθαρισμός Χαλιών",
            description: "Βαθύς καθαρισμός και ζωντάνεμα χρωμάτων",
        },
        {
            id: 6,
            title: "Αδιαβροχοποίηση",
            description: "Προστασία επιφανειών από λεκέδες",
        }
    ];

    return (
        <section id="demonstration" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        Φωτογραφικό Υλικό
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Στιγμιότυπα από τις εργασίες και τις επιδείξεις μας
                    </p>
                </div>

                <div className="px-12">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full max-w-5xl mx-auto"
                    >
                        <CarouselContent>
                            {demos.map((demo) => (
                                <CarouselItem key={demo.id} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                                            <div className="aspect-square bg-muted flex items-center justify-center text-muted-foreground">
                                                <span className="text-lg font-medium">Φωτογραφία {demo.id}</span>
                                            </div>
                                            <CardContent className="p-4">
                                                <h3 className="font-semibold text-lg mb-2">{demo.title}</h3>
                                                <p className="text-sm text-muted-foreground">{demo.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Demonstration;
