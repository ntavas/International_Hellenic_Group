import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const contactSchema = z.object({
    name: z.string().trim().min(1, { message: "Το όνομα είναι υποχρεωτικό" }).max(100),
    surname: z.string().trim().min(1, { message: "Το επώνυμο είναι υποχρεωτικό" }).max(100),
    email: z.string().trim().email({ message: "Μη έγκυρη διεύθυνση email" }).max(255),
    phone: z.string().trim().min(1, { message: "Το τηλέφωνο είναι υποχρεωτικό" }).max(50),
    company: z.string().trim().max(200).optional(),
    message: z.string().trim().min(1, { message: "Το μήνυμα είναι υποχρεωτικό" }).max(2000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            surname: "",
            email: "",
            phone: "",
            company: "",
            message: "",
        },
    });

    const onSubmit = async (data: ContactFormValues) => {
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log("Form submitted:", data);
        toast.success("Το μήνυμά σας στάλθηκε επιτυχώς!", {
            description: "Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.",
        });

        form.reset();
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        Επικοινωνήστε Μαζί μας
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Είμαστε εδώ για να απαντήσουμε σε κάθε σας ερώτηση
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                    <Card className="p-8">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Όνομα *</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Το όνομά σας" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="surname"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Επώνυμο *</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Το επώνυμό σας" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email *</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="email@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Τηλέφωνο *</FormLabel>
                                            <FormControl>
                                                <Input placeholder="+30 6940839572" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="company"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Εταιρεία (Προαιρετικό)</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Το όνομα της εταιρείας σας" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Μήνυμα *</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Πείτε μας πώς μπορούμε να σας βοηθήσουμε..."
                                                    className="min-h-[120px]"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary/90"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Αποστολή..." : "Αποστολή Μηνύματος"}
                                </Button>
                            </form>
                        </Form>
                    </Card>

                    <div className="space-y-6">
                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2 text-foreground">Τηλέφωνο</h3>
                                    <p className="text-muted-foreground">+30 6940839572</p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2 text-foreground">Email</h3>
                                    <p className="text-muted-foreground">info@inhg.gr</p>
                                    <p className="text-muted-foreground">Απαντάμε εντός 24 ωρών</p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2 text-foreground">Τοποθεσία</h3>
                                    <p className="text-muted-foreground">Αθήνα, Ελλάδα</p>
                                    <p className="text-muted-foreground">Εξυπηρετούμε όλη την Ελλάδα</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
