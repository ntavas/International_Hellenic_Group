import logo from "@/assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-[#1a2332] text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <img src={logo} alt="International Hellenic Logo" className="h-16 w-auto object-contain" />
                            <span className="font-bold text-lg">International Hellenic</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Group Cleaning Services
                        </p>
                    </div>

                    {/*<div>*/}
                    {/*    <h3 className="font-semibold text-lg mb-4">Επικοινωνία</h3>*/}
                    {/*    <div className="space-y-2 text-gray-300">*/}
                    {/*        <p>+30 6940839572</p>*/}
                    {/*        <p>info@inhg.gr</p>*/}
                    {/*        <p>Αθήνα, Ελλάδα</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div></div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Πληροφορίες</h3>
                        <div className="space-y-2 text-gray-300">
                            <p>International Hellenic Group ΙΚΕ , Παν. Τσαλδάρη 1 , 105 52 , Αθήνα</p>
                            <p>+30 6940839572</p>
                            <p>info@inhg.gr</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-600 pt-8 text-center text-gray-300">
                    <p>© {new Date().getFullYear()} International Hellenic Group Cleaning Services. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
