import { Card } from "@/components/ui/card";
import { Award, Globe, Shield, History, Star, CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Ποιοι Είμαστε
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Από την Αυστραλία στην Ελλάδα, φέρνοντας την επανάσταση στον βιολογικό καθαρισμό με τεχνολογία αιχμής και σεβασμό στο περιβάλλον.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: History (Timeline style) */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <History className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">Η Ιστορία μας</h3>
            </div>

            <div className="relative border-l-2 border-slate-200 pl-8 ml-4 space-y-12">
              <div className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                <h4 className="text-xl font-bold text-slate-800 mb-2">2014 - Μελβούρνη, Αυστραλία</h4>
                <p className="text-slate-600 leading-relaxed">
                  Η εταιρεία μας ιδρύθηκε με στόχο την παροχή κορυφαίων υπηρεσιών βιολογικού καθαρισμού. Σε μια αγορά με τεράστιο ανταγωνισμό και υψηλά standards, καταφέραμε να ξεχωρίσουμε επενδύοντας στην έρευνα και την καινοτομία.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                <h4 className="text-xl font-bold text-slate-800 mb-2">Ανάπτυξη & Τεχνογνωσία</h4>
                <p className="text-slate-600 leading-relaxed">
                  Υιοθετήσαμε τις αυστηρότερες προδιαγραφές της Αυστραλιανής αγοράς, χρησιμοποιώντας εξοπλισμό που εξασφαλίζει βαθύ καθαρισμό και ταυτόχρονη απολύμανση, χωρίς να φθείρει τις επιφάνειες.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white bg-accent shadow-sm" />
                <h4 className="text-xl font-bold text-slate-800 mb-2">2023 - Άφιξη στην Ελλάδα</h4>
                <p className="text-slate-600 leading-relaxed">
                  Μεταφέραμε την εμπειρία και την τεχνολογία μας στην Ευρώπη, με έδρα την Αθήνα. Στόχος μας είναι να προσφέρουμε την ίδια κορυφαία ποιότητα υπηρεσιών που μας καθιέρωσε στην Αυστραλία.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Today (Feature highlights) */}
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-accent/10 rounded-2xl">
                  <Star className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Η Εταιρία Σήμερα</h3>
              </div>

              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                Ο επαγγελματικός βιολογικός καθαρισμός από το International Hellenic Group εξασφαλίζει υγιεινή, καθαριότητα και μακροζωία για τον χώρο σας.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 mt-1 shrink-0" />
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">Προηγμένος Εξοπλισμός</h5>
                    <p className="text-sm text-slate-500">Μηχανήματα υψηλής πίεσης και αναρρόφησης για βαθύ καθαρισμό.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 mt-1 shrink-0" />
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">Ασφαλή Προϊόντα</h5>
                    <p className="text-sm text-slate-500">Οικολογικά και υποαλλεργικά καθαριστικά, ασφαλή για παιδιά και κατοικίδια.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 mt-1 shrink-0" />
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">Διεθνής Πιστοποίηση</h5>
                    <p className="text-sm text-slate-500">Υπηρεσίες που ακολουθούν τα αυστηρά πρότυπα της Αυστραλίας.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
