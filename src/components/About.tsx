import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Plane, ShieldCheck, Zap, Star, History } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-64 bg-slate-50 skew-y-3 transform -translate-y-20 z-0" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/20 text-primary bg-primary/5">
                        Since 2014
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
                        Ποιοι Είμαστε
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Φέρνουμε τα <span className="font-bold text-primary">Αυστραλιανά πρότυπα καθαρισμού</span> στην Ελλάδα.
                        Μια διαδρομή ποιότητας και καινοτομίας.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">

                    {/* Card 1: The Origin (Australia) */}
                    <Card className="border-none shadow-xl shadow-indigo-100/50 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <MapPin className="w-48 h-48" />
                        </div>
                        <CardContent className="p-8 md:p-10 relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                                    <History className="w-6 h-6 text-blue-300" />
                                </div>
                                <h3 className="text-2xl font-bold">Η Ιστορία μας</h3>
                            </div>

                            <div className="space-y-4 text-slate-300 leading-relaxed">
                                <p>
                                    Όλα ξεκίνησαν το <strong className="text-white">2014 στην Μελβούρνη</strong>.
                                    Σε μια αγορά όπου ο καθαρισμός είναι η 2η μεγαλύτερη βιομηχανία, μάθαμε από τους καλύτερους.
                                </p>
                                <ul className="space-y-3 mt-4">
                                    <li className="flex items-start gap-3">
                                        <Star className="w-5 h-5 text-yellow-400 shrink-0 mt-1" />
                                        <span>Εξειδίκευση σε μοκέτες, στρώματα & σαλόνια χωρίς αφαίρεση.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Star className="w-5 h-5 text-yellow-400 shrink-0 mt-1" />
                                        <span>Εκπαίδευση σε αυστηρά πρότυπα υγιεινής και ασφάλειας.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Star className="w-5 h-5 text-yellow-400 shrink-0 mt-1" />
                                        <span>Χρήση τεχνολογίας αιχμής με τεράστια επένδυση σε R&D.</span>
                                    </li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card 2: The Mission (Greece) */}
                    <Card className="border-slate-100 shadow-xl shadow-slate-200/40 bg-white">
                        <CardContent className="p-8 md:p-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-emerald-50 rounded-xl">
                                    <Plane className="w-6 h-6 text-emerald-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Η Εταιρεία Σήμερα</h3>
                            </div>

                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    Από τον Μάρτιο του 2023, μεταφέραμε αυτή τη γνώση στην <strong className="text-emerald-700">Ελλάδα και την Ολλανδία</strong>.
                                    Δεν φέραμε απλά μηχανήματα, φέραμε μια νέα φιλοσοφία.
                                </p>
                                <p>
                                    Η International Hellenic Group εναρμονίζεται πλήρως με τα αυστηρά στάνταρ της Αυστραλίας, προσφέροντας:
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                                        <h4 className="font-semibold text-slate-900 mb-1">Εξάλειψη Οσμών</h4>
                                        <p className="text-sm text-slate-500">Ολοκληρωτική αφαίρεση βιολογικών ρύπων.</p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                                        <h4 className="font-semibold text-slate-900 mb-1">Μακροζωία</h4>
                                        <p className="text-sm text-slate-500">Παράταση ζωής των υφασμάτων σας.</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Tech Section - The "Secret Sauce" */}
                <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                    {/* Abstract background glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-full mb-6 ring-1 ring-blue-500/30">
                            <Zap className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-6">
                            Τεχνολογία Βαθέος Καθαρισμού
                        </h3>
                        <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                            Χρησιμοποιούμε προηγμένο εξοπλισμό εισαγωγής από την Αυστραλία που συνδυάζει
                            <span className="text-white font-semibold"> υψηλή πίεση ζεστού νερού </span>
                            και
                            <span className="text-white font-semibold"> ισχυρή ταυτόχρονη αναρρόφηση</span>.
                            Αυτό μας επιτρέπει να αφαιρούμε λεκέδες, αλλεργιογόνα και βακτήρια από το βάθος της ίνας,
                            εκεί που οι κοινές μέθοδοι αδυνατούν να φτάσουν.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm backdrop-blur-sm border border-white/10">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" /> Πιστοποιημένα Προϊόντα
                    </span>
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm backdrop-blur-sm border border-white/10">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" /> Ασφαλές για Κατοικίδια
                    </span>
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm backdrop-blur-sm border border-white/10">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Υγιεινό Αποτέλεσμα
                    </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
