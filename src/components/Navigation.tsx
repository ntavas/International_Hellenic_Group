import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-lg border-b border-white/10" : ""
                    } bg-[#1a2332]`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center space-x-3">
                            <img src={logo} alt="International Hellenic Logo" className="h-20 w-auto object-contain" />
                            <span className="font-bold text-lg text-white">International Hellenic</span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <button
                                onClick={() => scrollToSection("home")}
                                className="text-white hover:text-gray-300 transition-colors font-medium"
                            >
                                Αρχική
                            </button>
                            <button
                                onClick={() => scrollToSection("videos")}
                                className="text-white hover:text-gray-300 transition-colors font-medium"
                            >
                                Βίντεο
                            </button>
                            <button
                                onClick={() => scrollToSection("demonstration")}
                                className="text-white hover:text-gray-300 transition-colors font-medium"
                            >
                                Φωτογραφίες
                            </button>
                            <button
                                onClick={() => scrollToSection("services")}
                                className="text-white hover:text-gray-300 transition-colors font-medium"
                            >
                                Υπηρεσίες
                            </button>
                            <button
                                onClick={() => scrollToSection("about")}
                                className="text-white hover:text-gray-300 transition-colors font-medium"
                            >
                                Σχετικά
                            </button>
                            <Button onClick={() => scrollToSection("contact")} className="bg-accent hover:bg-accent/90">
                                Επικοινωνία
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-white z-50"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Mobile Navigation Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="pt-24 px-6 space-y-6">
                    <button
                        onClick={() => scrollToSection("home")}
                        className="block w-full text-left py-3 text-foreground hover:text-primary transition-colors font-medium border-b border-border"
                    >
                        Αρχική
                    </button>
                    <button
                        onClick={() => scrollToSection("videos")}
                        className="block w-full text-left py-3 text-foreground hover:text-primary transition-colors font-medium border-b border-border"
                    >
                        Βίντεο
                    </button>
                    <button
                        onClick={() => scrollToSection("demonstration")}
                        className="block w-full text-left py-3 text-foreground hover:text-primary transition-colors font-medium border-b border-border"
                    >
                        Φωτογραφίες
                    </button>
                    <button
                        onClick={() => scrollToSection("services")}
                        className="block w-full text-left py-3 text-foreground hover:text-primary transition-colors font-medium border-b border-border"
                    >
                        Υπηρεσίες
                    </button>
                    <button
                        onClick={() => scrollToSection("about")}
                        className="block w-full text-left py-3 text-foreground hover:text-primary transition-colors font-medium border-b border-border"
                    >
                        Σχετικά
                    </button>
                    <Button
                        onClick={() => scrollToSection("contact")}
                        className="w-full bg-accent hover:bg-accent/90 mt-4"
                    >
                        Επικοινωνία
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Navigation;
