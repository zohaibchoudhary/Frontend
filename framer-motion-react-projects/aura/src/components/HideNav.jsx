import React, { useState } from "react";
import { Rocket } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function HideNav() {
	const { scrollY } = useScroll();
	const [hidden, setHidden] = useState(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		if (latest > previous && latest > 100) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	return (
		<div className="font-fredoka bg-gray-950 text-gray-200">
			<motion.nav
				variants={{
					visible: {
						y: 0,
					},
					hidden: {
						y: "-100%",
					},
				}}
				animate={hidden ? "hidden" : "visible"}
				transition={{ duration: 0.35, ease: "easeInOut" }}
				className="sticky top-0 flex items-center justify-between px-6 py-3 border-b border-gray-950/50 shadow-lg bg-gray-900"
			>
				<Rocket />
				<div className="hidden sm:flex items-center gap-6">
					<a href="#">Home</a>
					<a href="#">Platform</a>
					<a href="#">Pricing</a>
				</div>
				<button className="inline-block rounded-[5px] bg-gray-600/50 px-4 py-1.5">
					Try Free
				</button>
			</motion.nav>
			<div className="space-y-4 p-6">
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
					accusamus libero optio ipsum molestiae in ipsam perferendis quasi
					aliquid repellendus eaque at voluptas, excepturi laborum, quam
					adipisci repudiandae odit impedit illum minus. Quibusdam fuga aliquid
					earum provident deserunt illum vero, rem velit fugiat consequatur
					veniam dignissimos perspiciatis eligendi eum nostrum repellendus
					cupiditate quod nulla praesentium pariatur maiores inventore?
					Accusamus odit nostrum maxime mollitia et sit a. Ratione, animi soluta
					rem nam laboriosam facilis accusantium recusandae natus nesciunt sit,
					harum fuga voluptate id dolorum nihil distinctio accusamus sunt rerum
					vel suscipit ex tempore fugiat necessitatibus? Non nobis nihil
					reiciendis odio, explicabo quos minima laboriosam recusandae sapiente
					voluptatibus quae officiis odit! Quibusdam sint nemo in quis optio
					sapiente? Iusto, voluptas? Maxime doloremque doloribus, molestias
					necessitatibus magni id sit placeat pariatur dicta eum dolor incidunt
					et harum ducimus vel aliquam eaque inventore qui quis neque sequi est
					minima? Quidem numquam, aut saepe officiis minima quis possimus
					blanditiis! Ipsum expedita itaque, veritatis delectus assumenda rem ex
					quae dolorum eligendi earum dolore quo omnis fugit quidem amet debitis
					et optio commodi sapiente reiciendis. Perspiciatis mollitia quod qui
					velit totam rerum, ratione placeat aut incidunt quia nisi deleniti quo
					illo commodi ad vel explicabo fugiat consequuntur.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
					accusamus libero optio ipsum molestiae in ipsam perferendis quasi
					aliquid repellendus eaque at voluptas, excepturi laborum, quam
					adipisci repudiandae odit impedit illum minus. Quibusdam fuga aliquid
					earum provident deserunt illum vero, rem velit fugiat consequatur
					veniam dignissimos perspiciatis eligendi eum nostrum repellendus
					cupiditate quod nulla praesentium pariatur maiores inventore?
					Accusamus odit nostrum maxime mollitia et sit a. Ratione, animi soluta
					rem nam laboriosam facilis accusantium recusandae natus nesciunt sit,
					harum fuga voluptate id dolorum nihil distinctio accusamus sunt rerum
					vel suscipit ex tempore fugiat necessitatibus? Non nobis nihil
					reiciendis odio, explicabo quos minima laboriosam recusandae sapiente
					voluptatibus quae officiis odit! Quibusdam sint nemo in quis optio
					sapiente? Iusto, voluptas? Maxime doloremque doloribus, molestias
					necessitatibus magni id sit placeat pariatur dicta eum dolor incidunt
					et harum ducimus vel aliquam eaque inventore qui quis neque sequi est
					minima? Quidem numquam, aut saepe officiis minima quis possimus
					blanditiis! Ipsum expedita itaque, veritatis delectus assumenda rem ex
					quae dolorum eligendi earum dolore quo omnis fugit quidem amet debitis
					et optio commodi sapiente reiciendis. Perspiciatis mollitia quod qui
					velit totam rerum, ratione placeat aut incidunt quia nisi deleniti quo
					illo commodi ad vel explicabo fugiat consequuntur.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
					accusamus libero optio ipsum molestiae in ipsam perferendis quasi
					aliquid repellendus eaque at voluptas, excepturi laborum, quam
					adipisci repudiandae odit impedit illum minus. Quibusdam fuga aliquid
					earum provident deserunt illum vero, rem velit fugiat consequatur
					veniam dignissimos perspiciatis eligendi eum nostrum repellendus
					cupiditate quod nulla praesentium pariatur maiores inventore?
					Accusamus odit nostrum maxime mollitia et sit a. Ratione, animi soluta
					rem nam laboriosam facilis accusantium recusandae natus nesciunt sit,
					harum fuga voluptate id dolorum nihil distinctio accusamus sunt rerum
					vel suscipit ex tempore fugiat necessitatibus? Non nobis nihil
					reiciendis odio, explicabo quos minima laboriosam recusandae sapiente
					voluptatibus quae officiis odit! Quibusdam sint nemo in quis optio
					sapiente? Iusto, voluptas? Maxime doloremque doloribus, molestias
					necessitatibus magni id sit placeat pariatur dicta eum dolor incidunt
					et harum ducimus vel aliquam eaque inventore qui quis neque sequi est
					minima? Quidem numquam, aut saepe officiis minima quis possimus
					blanditiis! Ipsum expedita itaque, veritatis delectus assumenda rem ex
					quae dolorum eligendi earum dolore quo omnis fugit quidem amet debitis
					et optio commodi sapiente reiciendis. Perspiciatis mollitia quod qui
					velit totam rerum, ratione placeat aut incidunt quia nisi deleniti quo
					illo commodi ad vel explicabo fugiat consequuntur.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
					accusamus libero optio ipsum molestiae in ipsam perferendis quasi
					aliquid repellendus eaque at voluptas, excepturi laborum, quam
					adipisci repudiandae odit impedit illum minus. Quibusdam fuga aliquid
					earum provident deserunt illum vero, rem velit fugiat consequatur
					veniam dignissimos perspiciatis eligendi eum nostrum repellendus
					cupiditate quod nulla praesentium pariatur maiores inventore?
					Accusamus odit nostrum maxime mollitia et sit a. Ratione, animi soluta
					rem nam laboriosam facilis accusantium recusandae natus nesciunt sit,
					harum fuga voluptate id dolorum nihil distinctio accusamus sunt rerum
					vel suscipit ex tempore fugiat necessitatibus? Non nobis nihil
					reiciendis odio, explicabo quos minima laboriosam recusandae sapiente
					voluptatibus quae officiis odit! Quibusdam sint nemo in quis optio
					sapiente? Iusto, voluptas? Maxime doloremque doloribus, molestias
					necessitatibus magni id sit placeat pariatur dicta eum dolor incidunt
					et harum ducimus vel aliquam eaque inventore qui quis neque sequi est
					minima? Quidem numquam, aut saepe officiis minima quis possimus
					blanditiis! Ipsum expedita itaque, veritatis delectus assumenda rem ex
					quae dolorum eligendi earum dolore quo omnis fugit quidem amet debitis
					et optio commodi sapiente reiciendis. Perspiciatis mollitia quod qui
					velit totam rerum, ratione placeat aut incidunt quia nisi deleniti quo
					illo commodi ad vel explicabo fugiat consequuntur.
				</p>
			</div>
			<div className="w-full flex justify-end p-6 overflow-hidden">
				<motion.img
					initial={{
						x: "100%",
						opacity: 0,
					}}
					whileInView={{
						x: 0,
						opacity: 1,
					}}
					transition={{
						duration: 1.25,
						ease: "easeInOut",
					}}
					src="/carbon.png"
					className="w-1/2"
				/>
			</div>
		</div>
	);
}
