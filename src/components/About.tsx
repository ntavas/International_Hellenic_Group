import { MapPin, Zap } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-4">

                {/* The "Page" Container - Narrow width for reading comfort */}
                <div className="max-w-3xl mx-auto space-y-16">

                    {/* Header */}
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Ποιοι Είμαστε
                        </h2>
                        <div className="h-1 w-16 bg-primary rounded-full mx-auto opacity-80" />
                    </div>

                    {/* Part 1: The History - Clean Text */}
                    <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-justify md:text-left">
                        <div className="flex items-center gap-3 mb-4 text-slate-900">
                            <div className="p-2 bg-blue-50 rounded-full">
                                <MapPin className="w-5 h-5 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold">Από την Μελβούρνη στην Αθήνα</h3>
                        </div>

                        <p>
                            Η εταιρεία μας δραστηριοποιείται από το 2014 στην Μελβούρνη της Αυστραλίας. Η Αυστραλία είναι μία από τις πρωτοπόρες χώρες στον τομέα της καθαριότητας, με τον κλάδο να καταλαμβάνει τη δεύτερη θέση στον τζίρο της οικονομίας. Εκεί δαπανώνται τεράστια ποσά για έρευνα και ανάπτυξη με σκοπό την παροχή υψηλής ποιότητας υπηρεσιών.
                        </p>
                        <p>
                            Η εταιρεία μας εναρμονίζεται πλήρως με τα αυστηρά στάνταρ της Αυστραλίας. Αυτή τη γνώση και την τεχνολογία μεταφέραμε στην Ευρώπη, και από τον Μάρτιο του 2023 δραστηριοποιούμαστε στην Ελλάδα με έδρα την Αθήνα, αλλά και στην Ολλανδία.
                        </p>
                    </div>

                    {/* Part 2: The Technology - Highlighted lightly */}
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                        <div className="flex items-center gap-3 mb-4 text-slate-900">
                            <div className="p-2 bg-amber-50 rounded-full">
                                <Zap className="w-5 h-5 text-amber-500" />
                            </div>
                            <h3 className="text-xl font-bold">Η Τεχνολογία μας</h3>
                        </div>

                        <p className="text-lg text-slate-600 leading-relaxed text-justify md:text-left">
                            Στην εταιρεία μας χρησιμοποιούμε προηγμένο εξοπλισμό ειδικά σχεδιασμένο για βαθύ καθαρισμό. Τα μηχανήματά μας έχουν την δυνατότητα
                            <strong className="text-slate-900"> εξαγωγής υψηλής πίεσης ζεστού νερού </strong>
                            και
                            <strong className="text-slate-900"> ταυτόχρονης αναρρόφησης</strong>.
                        </p>

                        <p className="text-lg text-slate-600 leading-relaxed mt-4 text-justify md:text-left">
                            Αυτός ο συνδυασμός εξασφαλίζει την αποτελεσματική αφαίρεση λεκέδων, αλλεργιογόνων και βακτηρίων, ακόμη κι αν βρίσκονται βαθιά μέσα στις ίνες, αφήνοντας τις επιφάνειες καθαρές και υγιεινές.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
