import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Videos = () => {
    return (
        <section id="videos" className="py-20 bg-gradient-to-b from-background to-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        Δείτε μας σε Δράση
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Ανακαλύψτε την αποτελεσματικότητα των υπηρεσιών μας μέσα από τα βίντεό μας
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <div className="aspect-video">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/3KdJdVbt-qA"
                                title="Cleaning Services Video 1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                        <CardHeader>
                            <CardTitle>Καθαρισμός Σαλονιού Αυτοκινήτου</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Δείτε την διαδικασία βιολογικού καθαρισμού σε ένα σαλόνι αυτοκινήτου.</p>
                        </CardContent>
                    </Card>

                    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <div className="aspect-video">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://youtu.be/o1VrwcsTuFw"
                                title="Cleaning Services Video 2"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                        <CardHeader>
                            <CardTitle>Καθαρισμός Καναπέ</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Επαγγελματικός καθαρισμός καναπέ με την μέθοδο ψεκασμού-αναρρόφησης.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Videos;
