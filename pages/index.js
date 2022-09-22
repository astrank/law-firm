import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import * as Accordion from '@radix-ui/react-accordion';

export default function Home({ posts }) {
    return (
        <div className="font-poppins">
            <Head>
                <title>Estudio de Abogados</title>
                <meta
                    name="description"
                    content="Estudio de abogados"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className="flex flex-col gap-8 text-primary">
                {/* LANDING */}
                <section className="relative flex flex-col gap-4 py-36 mb-10">
                    <div className="z-10 flex flex-col gap-6 px-4 sm:px-10 md:px-14 lg:px-18 xl:px-32">
                        <div>
                            <span className="text-white font-medium text-base md:text-lg">SIRVIENDO EN ROSARIO</span>
                            <div className="mt-1">
                                <h1 className="text-white text-4xl md:text-6xl font-bold font-merriweather">Castillo-Milanesi</h1>
                                <hr className="divider mt-2" />
                            </div>
                        </div>
                        <p className="text-gray-400 max-w-xl leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet accusantium reprehenderit officia, voluptatem nesciunt ipsa hic voluptates obcaecati</p>
                        <div className="flex gap-6 mt-4">
                            <button className="bg-white text-primary text-sm font-medium px-6 py-4 rounded border-b border-dark_border self-start">PUBLICACIONES</button>
                            <button className="bg-accent text-white text-sm font-medium px-6 py-4 rounded border-b border-accent_darkest self-start">CONSULTAS</button>
                        </div>
                    </div>
                    <Image className="z-0" src="/assets/images/ali-morshedlou-WMD64tMfc4k-unsplash2.png" layout="fill" objectPosition="right center" objectFit="cover" alt="image" />
                </section>

                {/* AREAS */}
                <section className="flex flex-col items-center gap-14 px-4 sm:px-10 md:px-14 lg:px-18 xl:px-32 mb-10" id="areas-de-actuacion">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold font-lora">
                            Areas de Actuación
                        </h2>
                        <hr className="divider mt-2 mx-auto" />
                    </div>
                    <div className="grid grid-flow-row lg:grid-cols-3 gap-10 lg:gap-14">
                        <div className="flex flex-col">
                            <h3 className="text-xl md:text-xl font-lora font-bold">Derecho Familiar</h3>
                            <p className="text-gray-600 text-sm mt-4 mb-8 leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet.</p>
                            <a href="" className="self-start">
                                <span className="text-sm font-medium text-accent mr-2">Saber mas</span>
                                <svg className="h-5 text-accent inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </a>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-xl md:text-xl font-lora font-bold">Derecho Familiar</h3>
                            <p className="text-gray-600 text-sm mt-4 mb-8 leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet.</p>
                            <a href="" className="self-start">
                                <span className="text-sm font-medium text-accent mr-2">Saber mas</span>
                                <svg className="h-5 text-accent inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </a>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-xl md:text-xl font-lora font-bold">Derecho Familiar</h3>
                            <p className="text-gray-600 text-sm mt-4 mb-8 leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque.</p>
                            <a href="" className="self-start">
                                <span className="text-sm font-medium text-accent mr-2">Saber mas</span>
                                <svg className="h-5 text-accent inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                {/* PROFESIONALES */}
                <section className="flex flex-col items-center gap-14 mb-10 px-4 sm:px-10 md:px-14 lg:px-18 xl:px-32 " id="profesionales">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold font-lora">Profesionales</h1>
                        <hr className="divider mt-2 mx-auto" />
                    </div>
                    <div className="grid grid-rows-4 gap-8 md:grid-rows-none md:grid-cols-2 xl:grid-cols-4">
                        <div className="flex flex-col gap-6 relative">
                            <div className="relative w-full h-48">
                                <Image src="/assets/images/brian-tromp-oyoKfOhYtZI-unsplash.jpg" layout="fill" objectFit="cover" alt="image" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-xl font-bold">Dr. Silvio Milanesi</h3>
                                <span className="text-sm text-gray-600 tracking-wider font-medium">ABOGADO</span>
                            </div>
                            <p className="text-gray-600 leading-7 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aperiam nam nisi optio, odit temporibus</p>
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                    <ul className="flex gap-4 items-center" role="List" aria-label="Social Icons">
                                        <li>
                                            <a href="" aria-label="Facebook">
                                                <img className="h-6" src="assets/facebook-dark.svg" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" aria-label="Instagram">
                                                <img className="h-6" src="assets/instagram-dark.svg" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" aria-label="Linked In">
                                                <img className="h-6" src="assets/linkedin-dark.svg" alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 relative">
                            <div className="relative w-full h-48">
                                <Image src="/assets/images/brian-tromp-mw4u9Qm6CHQ-unsplash.jpg" objectFit="cover" layout="fill" alt="image" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-xl font-bold">Dr. Silvio Milanesi</h3>
                                <span className="text-sm text-gray-600 tracking-wider font-medium">ABOGADO</span>
                            </div>
                            <p className="text-gray-600 leading-7 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aperiam nam nisi optio, odit temporibus</p>
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                    <ul className="flex gap-4 items-center" role="List" aria-label="Social Icons">
                                        <li>
                                            <a href="" aria-label="Facebook">
                                                <img className="h-6" src="assets/facebook-dark.svg" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" aria-label="Instagram">
                                                <img className="h-6" src="assets/instagram-dark.svg" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" aria-label="Linked In">
                                                <img className="h-6" src="assets/linkedin-dark.svg" alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 relative">
                            <div className="relative w-full h-48">
                                <Image src="/assets/images/brian-tromp-MxkYQ39KFmE-unsplash.jpg" objectFit="cover" layout="fill" alt="image" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-xl font-bold">Dr. Silvio Milanesi</h3>
                                <span className="text-sm text-gray-600 tracking-wider font-medium">ABOGADO</span>
                            </div>
                            <p className="text-gray-600 leading-7 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aperiam nam nisi optio, odit temporibus</p>
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                    <ul className="flex gap-4 items-center" role="List" aria-label="Social Icons">
                                        <li>
                                            <a href="" aria-label="Facebook">
                                                <img className="h-6" src="assets/facebook-dark.svg" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" aria-label="Instagram">
                                                <img className="h-6" src="assets/instagram-dark.svg" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" aria-label="Linked In">
                                                <img className="h-6" src="assets/linkedin-dark.svg" alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 relative">
                            <div className="relative w-full h-48">
                                <Image src="/assets/images/brian-tromp-Kepb83eqqOk-unsplash.jpg" objectFit="cover" layout="fill" alt="image" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-xl font-bold">Dr. Silvio Milanesi</h3>
                                <span className="text-sm text-gray-600 tracking-wider font-medium">ABOGADO</span>
                            </div>
                            <p className="text-gray-600 leading-7 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aperiam nam nisi optio, odit temporibus</p>
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                    <ul className="flex gap-4 items-center" role="List" aria-label="Social Icons">
                                        <li>
                                            <a href="" aria-label="Facebook">
                                                <img className="h-6" src="assets/facebook-dark.svg" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" aria-label="Instagram">
                                                <img className="h-6" src="assets/instagram-dark.svg" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" aria-label="Linked In">
                                                <img className="h-6" src="assets/linkedin-dark.svg" alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ + CONTACTO */}
                <div id="contacto" className="flex flex-col mb-10 lg:grid lg:grid-cols-2">
                    <div className="flex flex-col gap-10 py-10 px-4 md:px-20 bg-primary text-white">
                        <div>
                            <span className="uppercase">¿Tiene dudas?</span>
                            <h2 className="text-2xl md:text-3xl font-bold font-lora">Preguntas frecuentes</h2>
                        </div>
                        <Accordion.Root className="flex flex-col gap-3" type="single" defaultValue="item-1" collapsible>
                            <Accordion.Item value="item-1">
                                <Accordion.Trigger className="w-full flex justify-between px-4 py-6 bg-white text-primary">
                                    <div>¿Cuando consultar a un abogado?</div>
                                    <span href="">+</span>
                                </Accordion.Trigger>
                                <Accordion.Content className="bg-white text-gray-500 px-4 py-6 rounded-b">Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
                            </Accordion.Item>
                            <Accordion.Item value="item-2">
                                <Accordion.Trigger className="w-full flex justify-between px-4 py-6 bg-white text-primary">
                                    <div>¿Cuando consultar a un abogado?</div>
                                    <span href="">+</span>
                                </Accordion.Trigger>
                                <Accordion.Content className="bg-white text-gray-500 px-4 py-6 rounded-b">Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
                            </Accordion.Item>
                            <Accordion.Item value="item-3">
                                <Accordion.Trigger className="w-full flex justify-between px-4 py-6 bg-white text-primary">
                                    <div>¿Cuando consultar a un abogado?</div>
                                    <span href="">+</span>
                                </Accordion.Trigger>
                                <Accordion.Content className="bg-white text-gray-500 px-4 py-6 rounded-b">Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
                            </Accordion.Item>
                            <Accordion.Item value="item-4">
                                <Accordion.Trigger className="w-full flex justify-between px-4 py-6 bg-white text-primary">
                                    <div>¿Cuando consultar a un abogado?</div>
                                    <span href="">+</span>
                                </Accordion.Trigger>
                                <Accordion.Content className="bg-white text-gray-500 px-4 py-6 rounded-b">Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
                            </Accordion.Item>
                            <Accordion.Item value="item-5">
                                <Accordion.Trigger className="w-full flex justify-between px-4 py-6 bg-white text-primary">
                                    <div>¿Cuando consultar a un abogado?</div>
                                    <span href="">+</span>
                                </Accordion.Trigger>
                                <Accordion.Content className="bg-white text-gray-500 px-4 py-6">Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
                            </Accordion.Item>
                        </Accordion.Root>
                    </div>
                    <form
                        className="flex flex-col gap-10 py-10 px-4 md:px-20 bg-gray-200"
                        action="https://formsubmit.co/46c8e5f4ab3f3c79b050148e5511b3cd"
                        method="POST"
                    >
                        <div>
                            <span className="uppercase text-accent">Comencemos a hablar</span>
                            <h2 className="text-2xl md:text-3xl font-bold font-lora">Realizar consulta</h2>
                        </div>
                        <div className="flex flex-col gap-4">
                            <input
                                className="p-2"
                                type="text"
                                name="name"
                                placeholder="Nombre"
                                required
                            />
                            <input
                                className="p-2"
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                            <input
                                className="p-2"
                                type="text"
                                name="phone-number"
                                placeholder="Telefono"
                                required
                            />
                            <textarea
                                className="p-2"
                                name="message"
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="Mensaje"
                                required
                            ></textarea>
                        </div>
                        <button className="bg-primary text-white px-6 py-4 rounded self-start" type="submit">Realizar consulta</button>
                    </form>
                </div>
                
                {/* PUBLICACIONES */}
                <section className="mb-10 m-auto px-4 sm:px-10 md:px-14 lg:px-18 xl:px-32 " id="publicaciones">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold font-lora">Publicaciones</h2>
                        <hr className="divider mt-2 mx-auto" />
                    </div>
                    {posts &&
                        posts.map((post, index) => (
                            <article key={index} className="">
                                <header className="">
                                    {post.title}
                                </header>
                                <footer className="">
                                    {post.author}
                                </footer>
                                <a
                                    href={`/posts/${post.slug}`}
                                    className=""
                                ></a>
                            </article>
                        ))}
                </section>

                <Footer />
            </main>
        </div>
    );
}

/*
export const getStaticProps = async () => {
    const posts = await import("../public/data/posts.json").then(
        (res) => res.default
    );

    return {
        props: { posts },
        //revalidate: 60,
    };
};*/