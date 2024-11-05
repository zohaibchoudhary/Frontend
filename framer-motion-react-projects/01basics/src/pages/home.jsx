import React, { useEffect, useState } from "react";
import Container from "@/container";
import {
	ArrowRight,
	Link as LinkIcon,
	QrCode,
	CircleCheck,
} from "lucide-react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import heroImage from "../assets/heroImage.png";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ShortURLForm from "@/components/short-url-form";
import QRCodeForm from "@/components/qr-code-form";

import freeplan from "@/json/freeplan.json";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import Star from "@/components/star";
import feedbacks from "@/json/feedback.json";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Main from "@/components/main";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { useAuth } from "@/context/AuthContext";
import Loader from "@/components/loader";

import { motion, useInView, useAnimation, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";


export default function Home() {
	const heroRef = useRef(null);
	const formRef = useRef(null);
	const box1Ref = useRef(null);
	const box2Ref = useRef(null);

	const heroSectionInView = useInView(heroRef, { once: true });
	const formSectionInView = useInView(formRef, { once: true });
	const boxOneInView = useInView(box1Ref, { once: true });
	const boxTwoInView = useInView(box2Ref, { once: true });

	const heroControls = useAnimation(); 
	const formControls = useAnimation(); 
	const box1Controls = useAnimation(); 
	const box2Controls = useAnimation(); 

	useEffect(() => {
		if (heroSectionInView) {
			console.log("hero", heroSectionInView);

			heroControls.start({ opacity: 1, y: 0 });
		}
	}, [heroSectionInView]);

	useEffect(() => {
		if (formSectionInView) {
			console.log("form", formSectionInView);

			formControls.start({ opacity: 1, y: 0 });
		}
	}, [formSectionInView]);

	useEffect(() => {
		if (boxOneInView) {
			console.log("box 1", boxTwoInView);
			box1Controls.start({ opacity: 1, y: 0 });
		}
	}, [boxOneInView]);

	useEffect(() => {
		if (boxTwoInView) {
			console.log("box 2", boxTwoInView);

			box2Controls.start({ opacity: 1, y: 0 });
		}
	}, [boxTwoInView]);

	return (
		<>
			<div className="py-10 font-poppins space-y-10">
				<div className="w-full">
					{/* Hero */}
					<Container>
						<motion.div
							ref={heroRef}
							initial={{ opacity: 0, y: 75 }}
							animate={heroControls}
							transition={{ duration: 1 }}
							className="w-full grid lg:grid-cols-12 sm:gap-4 gap-7 md:mt-4"
						>
							<div className="grid lg:col-span-7 h-max mt-6">
								<h1 className="text-3xl md:text-5xl text-dark font-bold tracking-tight md:leading-tight">
									Build stronger digital connections
								</h1>
								<p className="md:text-lg text-base text-dark/95 tracking-tight py-2">
									Use our URL shortener and QR Codes to engage your audience and
									connect them to the right information. Build, edit, and track
									everything inside the TrimLink Connections Platform.
								</p>
								<Link
									to="/pricing"
									className="flex items-center justify-center gap-2 text-base sm:text-lg mt-3 bg-orange-500 hover:bg-orange-600 text-center sm:w-max px-8 py-3 font-medium text-dark rounded-full tracking-tight"
								>
									Get Started For Free <ArrowRight className="h-5 w-5" />
								</Link>
							</div>
							<div className="grid lg:col-span-5">
								<img
									className="w-full object-cover object-center"
									src={heroImage}
									alt=""
								/>
							</div>
						</motion.div>
					</Container>
					{/* Form */}
					<motion.div
						ref={formRef}
						initial={{ opacity: 0, y: 75 }}
						animate={formControls}
						transition={{ duration: 1 }}
						className="w-full bg-dark my-10 text-white py-14 text-center"
					>
						<Container>
							<div className="flex flex-col items-center gap-2">
								<h3 className="text-lg md:text-xl font-medium tracking-tight text-orange-500 uppercase">
									Great connections start with a click or scan
								</h3>
								<h1 className="text-2xl md:text-4xl max-w-xl font-semibold tracking-tight md:leading-snug">
									Sign up for a free account and put TrimLink to work
								</h1>
								<div className="w-full mt-10">
									<Tabs defaultValue="shortLink" className="">
										<TabsList>
											<TabsTrigger value="shortLink">
												<LinkIcon className="h-7 w-6 mr-2 text-orange-500" />{" "}
												Short Link
											</TabsTrigger>
											<TabsTrigger value="qrCode">
												<QrCode className="h-7 w-6 mr-2 text-orange-500" /> QR
												Code
											</TabsTrigger>
										</TabsList>
										<TabsContent
											value="shortLink"
											className="md:w-[80%] mx-auto"
										>
											<ShortURLForm />
										</TabsContent>
										<TabsContent value="qrCode" className="md:w-[80%] mx-auto">
											<QRCodeForm />
										</TabsContent>
									</Tabs>
								</div>
								<h2 className="w-full text-start text-xl md:text-2xl font-semibold tracking-tighter mt-7 md:text-center">
									Sign up for free. Your free plan includes:
								</h2>
								<div className="w-full md:w-max">
									<div className="flex gap-5 flex-col md:flex-row mt-4">
										{freeplan &&
											freeplan.map((message) => (
												<div className="flex items-center gap-2">
													<span>
														<CircleCheck className="h-6 w-6 text-orange-500" />
													</span>
													<p className="text-sm md:text-base tracking-tighter">
														{message.content}
													</p>
												</div>
											))}
									</div>
								</div>
							</div>
						</Container>
					</motion.div>
				</div>

				<motion.div
					ref={box1Ref}
					initial={{ opacity: 0, y: 75 }}
					animate={box1Controls}
					transition={{ duration: 1 }}
					className="bg-orange-500 py-8"
				>
					<Container>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
						repudiandae facilis, ullam ut omnis maiores. Soluta qui at eveniet
						sequi reprehenderit fugit quaerat consectetur nihil laudantium
						ratione sit iusto accusamus quisquam autem cumque assumenda maiores
						quia quod aspernatur eaque dolores, fugiat dolorem. Asperiores
						consectetur totam accusantium soluta repellendus quo vitae saepe
						quia? Nobis vel pariatur aperiam modi facere magni animi, labore
						mollitia sit qui fugiat ab illum ipsam quod excepturi esse inventore
						neque harum distinctio praesentium ex. Voluptatum nam doloremque
						velit ipsum tempora, suscipit maiores eaque labore totam, doloribus
						corrupti ducimus, autem qui debitis consequuntur corporis quaerat.
						Nam, quaerat placeat sed nulla temporibus magnam, rerum tenetur
						fugiat libero eligendi ipsum quas dolore hic itaque. Aliquid
						provident laboriosam impedit maiores sit alias cupiditate commodi
						nesciunt? Impedit quas maiores iusto atque hic quasi unde fugiat,
						dolorem alias, praesentium corporis, enim molestiae qui animi
						laboriosam cumque nostrum quidem fuga aliquam assumenda eligendi!
						Temporibus assumenda beatae omnis doloremque impedit sed totam non,
						expedita officia illo obcaecati doloribus suscipit atque
						perferendis, magni ut accusamus veritatis harum similique aut enim
						odit incidunt dolorem labore. Alias doloribus aspernatur commodi
						vero. Excepturi sint error odit non ea nemo natus quisquam
						praesentium voluptatem recusandae, beatae aperiam est ex sequi?
					</Container>
				</motion.div>
				<motion.div
					ref={box2Ref}
					initial={{ opacity: 0, y: 75 }}
					animate={box2Controls}
					transition={{ duration: 1 }}
					className="bg-dark text-white/90 py-8"
				>
					<Container>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
						distinctio ad porro reiciendis itaque quo. Assumenda sed labore
						accusamus eligendi nulla. Culpa, quibusdam doloribus officiis, vero
						tempore provident error assumenda rem dolore nemo cupiditate nobis
						doloremque dolor ex laboriosam ab aspernatur? In eum beatae iusto
						eaque rerum excepturi blanditiis esse nobis fugiat dicta odio
						obcaecati natus omnis adipisci expedita, sed qui id fuga praesentium
						pariatur reprehenderit totam tenetur nam voluptate. Nemo odit
						commodi ipsam nobis hic consequatur nam maiores sequi minus earum
						tempora aspernatur delectus unde veritatis nostrum provident quam
						voluptates quisquam laboriosam molestiae excepturi explicabo, modi,
						dolores ea. Nisi error, sit inventore aliquam tenetur voluptatum.
						Rerum, qui veniam porro perferendis dignissimos assumenda quasi,
						aliquid eum tenetur vero maiores ratione. Ipsa quis aperiam
						exercitationem incidunt, iste eveniet porro adipisci fugiat harum
						consectetur hic corrupti aliquam eum, nesciunt ut vitae quisquam
						soluta repellat necessitatibus maxime laboriosam illo, quos delectus
						quae? Vero harum debitis deserunt dolores sequi aspernatur
						assumenda, enim consectetur at sapiente doloribus aut soluta,
						eveniet laboriosam nemo labore reiciendis! Nobis omnis est ab
						aperiam officia repellendus mollitia, eveniet saepe doloremque
						veritatis esse repudiandae libero eum harum eligendi labore.
						Eligendi ducimus animi magnam temporibus alias esse incidunt, sit
						dolorum et tenetur.
					</Container>
				</motion.div>
			</div>
		</>
	);
}
