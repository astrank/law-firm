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
                    <Image className="z-0" src="/assets/images/ali-morshedlou-WMD64tMfc4k-unsplash2.png" layout="fill" objectPosition="right center" objectFit="cover" priority alt="image" />
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
                                    <ul className="flex gap-4 items-center" role="list" aria-label="social icons">
                                        <li>
                                            <a href="" aria-label="facebook">
                                                <svg className="h-6 text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" aria-label="instagram">
                                                <svg className="h-6 text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" aria-label="linkedin">
                                                <svg className="h-6 text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
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
                                    <ul className="flex gap-4 items-center" role="list" aria-label="social icons">
                                        <li>
                                            <a href="" aria-label="facebook">
                                                <svg className="h-6 text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" aria-label="instagram">
                                                <svg className="h-6 text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" aria-label="linkedin">
                                                <svg className="h-6 text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
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
                                    <ul className="flex gap-4 items-center" role="list" aria-label="social icons">
                                        <li>
                                            <a href="" aria-label="facebook">
                                                <svg className="h-6 text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" aria-label="instagram">
                                                <svg className="h-6 text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" aria-label="linkedin">
                                                <svg className="h-6 text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
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
                                    <ul className="flex gap-4 items-center" role="list" aria-label="social icons">
                                        <li>
                                            <a href="" aria-label="facebook">
                                                <svg className="h-6 text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" aria-label="instagram">
                                                <svg className="h-6 text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" aria-label="linkedin">
                                                <svg className="h-6 text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
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