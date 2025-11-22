import { Card } from "@/components/ui/card";
import { Award, Globe, Shield } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Ποιοι Είμαστε
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Από την Αυστραλία στην Ελλάδα, φέρνοντας την καλύτερη τεχνολογία καθαρισμού
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Διεθνής Εμπειρία</h3>
            <p className="text-muted-foreground">Από το 2014 στην Αυστραλία</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Πιστοποιημένος Εξοπλισμός</h3>
            <p className="text-muted-foreground">Ασφαλή & αποτελεσματικά προϊόντα</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Αυστραλιανά Standards</h3>
            <p className="text-muted-foreground">Υψηλή ποιότητα υπηρεσιών</p>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
              <div className="w-2 h-8 bg-primary rounded-full"></div>
              Η Ιστορία μας
            </h3>
            <p className="text-muted-foreground leading-relaxed text-justify">
              Η εταιρεία μας ιδρύθηκε και δραστηριοποιείται από το 2014 στην Μελβούρνη της Αυστραλίας με αντικείμενο τους βιολογικούς καθαρισμούς στον χώρο σας σε μοκέτες δαπέδου, χάλια, στρώματα, καναπέδες, σαλόνια, πολυθρόνες, καρέκλες, καθίσματα, κουρτίνες βαρέως τυπού οι οποίες καθαρίζονται χωρίς να χρειάζεται να αφαιρεθούν. Η Αυστραλία είναι μία από τις πρωτοπόρες χώρες στον τομέα της καθαριότητας με αποτέλεσμα ο τομέας του cleaning να γνωρίζει ραγδαία αύξηση τα τελευταία χρόνια καταλαμβάνοντας μάλιστα την δεύτερη θέση του τζίρου της Αυστραλιανής οικονομίας. Για τον σκοπό αυτό δαπανώνται κάθε χρόνο τεράστια χρηματικά ποσά για έρευνα και ανάπτυξη της τεχνολογίας με σκοπό την παροχή υψηλής ποιότητας υπηρεσιών. Κατόπιν τούτου και η εταιρεία μας εναρμονίζεται πλήρως και δρα με βάση τα αυστηρά στάνταρ της Αυστραλίας. Αυτή λοιπόν την γνώση και την τεχνολογία θέλαμε να μεταφέρουμε και στην Ευρώπη για αυτό και από τον Μάρτιο του 2023 δραστηριοποιούμαστε και στην Ελλάδα με έδρα μας την Αθήνα, άλλα και στην Ολλανδία.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-secondary/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
              <div className="w-2 h-8 bg-accent rounded-full"></div>
              Η Εταιρία μας Σήμερα
            </h3>
            <p className="text-muted-foreground leading-relaxed text-justify">
              Ο επαγγελματικός βιολογικός καθαρισμός από το έμπειρο προσωπικό International Hellenic Group Cleaning Services εξασφαλίζει την πλήρη απομάκρυνση των βιολογικών ρύπων, εξαλείφει τις οσμές και παρατείνει τη διάρκεια ζωής των καθαριζόμενων επιφανειών. Με όπλο την δεκαετή μας εμπειρία, την τεχνογνωσία, τον εξειδικευμένο εξοπλισμό και τα αποτελεσματικά προϊόντα καθαρισμού, παρέχουμε υπηρεσίες υψηλής ποιότητας. Η εταιρεία μας διαθέτει πιστοποιημένα και ασφαλή μηχανήματα και προϊόντα τα οποία εισάγονται απευθείας από την Αυστραλία. Στην εταιρεία μας χρησιμοποιούμε προηγμένο εξοπλισμό ειδικά σχεδιασμένο για βαθύ καθαρισμό. Αυτά τα μηχανήματα έχουν την δυνατότητα εξαγωγής υψηλής πίεσης ζεστού νερού και ταυτόχρονης αναρρόφησης, εξασφαλίζοντας έτσι την αποτελεσματική και ενδελεχή αφαίρεση λεκέδων, αλλεργιογόνων, βακτηρίων, ιών και άλλων ρύπων, ακόμη κι αν βρίσκονται βαθιά μέσα στις ίνες της καθαριζόμενης επιφάνειας. Χρησιμοποιούμε εξειδικευμένα προϊόντα καθαρισμού που είναι ασφαλή για χρήση.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
