import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [isNavToggled, setIsNavToggled] = useState(false);

    return (
        <header className="text-primary w-full">
            <div className="px-4 sm:px-10 md:px-14 lg:px-18 xl:px-32 flex flex-row justify-between items-center border-b border-gray-200">
                <div className="flex gap-6 text-sm">
                    <div className="flex items-center gap-2 font-bold">
                        <img className="h-4" src="assets/phone.svg" />
                        <span className="text-sm md:text-base">0800-555-444</span>
                    </div>
                    <div className="hidden lg:flex items-center gap-2">
                        <img className="h-4" src="assets/email.svg" />
                        <span>estudio@castillomilanesi.com</span>
                    </div>
                    <div className="hidden xl:flex items-center gap-2">
                        <img className="h-4" src="assets/calendar.svg" />
                        <span>Lun - Vie 8am - 6pm</span>
                    </div>
                </div>
                <div className="flex gap-6">
                    <ul className="hidden md:flex gap-5 items-center" role="List" aria-label="Social Icons">
                        <li>
                            <a href="" aria-label="Facebook">
                                <img className="h-4" src="assets/facebook-dark.svg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="" aria-label="Instagram">
                                <img className="h-4" src="assets/instagram-dark.svg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="" aria-label="Linked In">
                                <img className="h-4" src="assets/linkedin-dark.svg" alt="" />
                            </a>
                        </li>
                    </ul>
                    <a className="bg-accent text-white py-4 px-6 md:px-8 font-bold text-sm" href="#contacto">AGENDAR CONSULTA</a>
                </div>
            </div>
            <div className="flex justify-between items-center py-8 px-4 sm:px-10 md:px-14 lg:px-18 xl:px-32">
                <Link href="/">
                    <a className="text-5xl font-bold uppercase">Home</a>
                </Link>
                {/*<Image
                    src="/example2.png"
                    width={170}
                    height={90}
                    alt="logo"
                />*/}
                <nav>
                    <ul aria-label="Primary" role="list" className="hidden lg:flex gap-8 font-medium text-sm text-gray-700">
                        <a href="#publicaciones">
                            <li>Publicaciones</li>
                        </a>
                        <a href="#contacto">
                            <li>Contacto</li>
                        </a>
                        <a href="#profesionales">
                            <li>Profesionales</li>
                        </a>
                        <a href="#areas-de-actuacion">
                            <li>Areas de Actuación</li>
                        </a>
                    </ul>
                    <a href=""><img className="h-6 lg:hidden" src="assets/bars.svg" /></a>
                </nav>
            </div>
        </header>
    );
}
