import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

import churchImg from "@/assets/church.png";
import livingRoomImg from "@/assets/living_room.png";
import floorImg from "@/assets/floor.png";
import officeImg from "@/assets/office.png";
import carpetImg from "@/assets/carpet.png";
import waterproofingImg from "@/assets/waterproofing.png";

const Demonstration = () => {
    const demos = [
        {
            id: 1,
            title: "Καθαρισμός Εκκλησίας",
            description: "Επαγγελματικός καθαρισμός Ιερού Ναού",
            image: churchImg,
        },
        {
            id: 2,
            title: "Βιολογικός Καθαρισμός Σαλλονιού",
            description: "Αφαίρεση λεκέδων και απολύμανση",
            image: livingRoomImg,
        },
        {
            id: 3,
            title: "Γυάλισμα Δαπέδων",
            description: "Κρυσταλλοποίηση και γυάλισμα μαρμάρων",
            image: floorImg,
        },
        {
            id: 4,
            title: "Καθαρισμός Επαγγελματικού Χώρου",
            description: "Ολοκληρωμένη φροντίδα γραφείων",
            image: officeImg,
        },
        {
            id: 5,
            title: "Καθαρισμός Χαλιών",
            description: "Βαθύς καθαρισμός και ζωντάνεμα χρωμάτων",
            image: carpetImg,
        },
        {
            id: 6,
            title: "Αδιαβροχοποίηση",
            description: "Προστασία επιφανειών από λεκέδες",
            image: waterproofingImg,
        }
    ];

    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

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
                        setApi={setApi}
                        opts={{
                            align: "center",
                            loop: true,
                        }}
                        className="w-full max-w-5xl mx-auto"
                    >
                        <CarouselContent className="-ml-4 py-4 md:py-8">
                            {demos.map((demo, index) => (
                                <CarouselItem key={demo.id} className="basis-[85%] md:basis-1/2 lg:basis-1/3 pl-4">
                                    <div className={cn(
                                        "p-1 h-full transition-all duration-300 ease-in-out",
                                        index === current ? "scale-100 md:scale-125 z-10" : "scale-90 md:scale-90 opacity-70"
                                    )}>
                                        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full border-2 border-transparent hover:border-primary/20">
                                            <div className="aspect-square bg-muted flex items-center justify-center text-muted-foreground relative overflow-hidden group">
                                                <img
                                                    src={demo.image}
                                                    alt={demo.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </div>
                                            <CardContent className="p-4">
                                                <h3 className="font-semibold text-lg mb-2 text-primary">{demo.title}</h3>
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
