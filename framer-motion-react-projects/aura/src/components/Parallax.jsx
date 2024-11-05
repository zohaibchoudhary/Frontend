import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});
	const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
	const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

	return (
		<>
			<div
				ref={ref}
				className="relative w-full min-h-screen grid place-items-center font-fredoka"
			>
				<motion.h1 
        style={{ y: textY }}
        className="font-bold text-white text-7xl z-10 md:text-9xl">
					Parallax
				</motion.h1>
				<motion.div
					className="absolute inset-0 z-0"
					style={{
						backgroundImage: `url(/image-full.png)`,
						backgroundSize: "cover",
						backgroundPosition: "bottom",
					}}
				/>
				<div
					className="absolute inset-0 z-20"
					style={{
						backgroundImage: `url(/image-bottom.png)`,
						backgroundSize: "cover",
						backgroundPosition: "bottom",
            y: backgroundY
					}}
				/>
			</div>
			<Paragraphs />
		</>
	);
}

const Paragraphs = () => {
	return (
		<div className="bg-gray-950 text-gray-200 py-8 w-full px-3 sm:px-6 space-y-4 font-fredoka">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
				temporibus. Quod harum animi veniam ipsum deserunt? Eaque recusandae
				ipsa molestias eos, doloremque quas earum autem corrupti, fuga odio et
				quasi temporibus, nisi non! Blanditiis minima quisquam at nesciunt ut
				veritatis autem facilis ex iure accusamus cum aspernatur perspiciatis
				voluptatum enim odio nam, unde iste architecto exercitationem explicabo
				eligendi omnis libero nobis impedit? In optio totam expedita,
				accusantium modi dignissimos? Nam rem non cumque laudantium velit
				cupiditate nulla dolorum enim doloribus accusantium. Sapiente mollitia
				fugiat vel, minus et, inventore saepe, laboriosam hic delectus eius
				voluptatibus minima rerum ipsam. Quis, odio totam!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
				temporibus. Quod harum animi veniam ipsum deserunt? Eaque recusandae
				ipsa molestias eos, doloremque quas earum autem corrupti, fuga odio et
				quasi temporibus, nisi non! Blanditiis minima quisquam at nesciunt ut
				veritatis autem facilis ex iure accusamus cum aspernatur perspiciatis
				voluptatum enim odio nam, unde iste architecto exercitationem explicabo
				eligendi omnis libero nobis impedit? In optio totam expedita,
				accusantium modi dignissimos? Nam rem non cumque laudantium velit
				cupiditate nulla dolorum enim doloribus accusantium. Sapiente mollitia
				fugiat vel, minus et, inventore saepe, laboriosam hic delectus eius
				voluptatibus minima rerum ipsam. Quis, odio totam!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
				temporibus. Quod harum animi veniam ipsum deserunt? Eaque recusandae
				ipsa molestias eos, doloremque quas earum autem corrupti, fuga odio et
				quasi temporibus, nisi non! Blanditiis minima quisquam at nesciunt ut
				veritatis autem facilis ex iure accusamus cum aspernatur perspiciatis
				voluptatum enim odio nam, unde iste architecto exercitationem explicabo
				eligendi omnis libero nobis impedit? In optio totam expedita,
				accusantium modi dignissimos? Nam rem non cumque laudantium velit
				cupiditate nulla dolorum enim doloribus accusantium. Sapiente mollitia
				fugiat vel, minus et, inventore saepe, laboriosam hic delectus eius
				voluptatibus minima rerum ipsam. Quis, odio totam!
			</p>
		</div>
	);
};
