import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollBasedAnimations() {
	const { scrollYProgress } = useScroll();

	const scaleX = useSpring(scrollYProgress);

	const background = useTransform(
		scrollYProgress,
		[0, 1],
		["rgb(220, 38, 38)", "rgb(1, 245, 13)"]
	);
	return (
		<div>
			<motion.div
				style={{
					// scaleX: scrollYProgress,
					scaleX,
          background
				}}
				className="sticky w-full h-1 top-0 bg-red-600  origin-left"
			/>

			<div className="w-full max-w-xl mx-auto font-poppins space-y-4 py-4">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut autem
					maiores odit maxime voluptas rem eum odio reprehenderit nobis minima
					laudantium dicta quasi eaque esse, a quia optio excepturi mollitia
					commodi hic earum. Voluptates enim blanditiis fugit porro dolore vel
					recusandae, iste modi consequatur, eius fugiat nam quae necessitatibus
					voluptas dolorem, aliquid dicta exercitationem suscipit provident.
					Corporis autem consectetur esse consequuntur libero optio quos dolore
					pariatur nisi quia sunt voluptate tenetur tempora amet, quas, nesciunt
					cum illo, distinctio eligendi? Similique esse porro alias inventore
					labore quo perferendis delectus et aperiam quis? In numquam harum quos
					error quisquam non, doloribus qui?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut autem
					maiores odit maxime voluptas rem eum odio reprehenderit nobis minima
					laudantium dicta quasi eaque esse, a quia optio excepturi mollitia
					commodi hic earum. Voluptates enim blanditiis fugit porro dolore vel
					recusandae, iste modi consequatur, eius fugiat nam quae necessitatibus
					voluptas dolorem, aliquid dicta exercitationem suscipit provident.
					Corporis autem consectetur esse consequuntur libero optio quos dolore
					pariatur nisi quia sunt voluptate tenetur tempora amet, quas, nesciunt
					cum illo, distinctio eligendi? Similique esse porro alias inventore
					labore quo perferendis delectus et aperiam quis? In numquam harum quos
					error quisquam non, doloribus qui?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut autem
					maiores odit maxime voluptas rem eum odio reprehenderit nobis minima
					laudantium dicta quasi eaque esse, a quia optio excepturi mollitia
					commodi hic earum. Voluptates enim blanditiis fugit porro dolore vel
					recusandae, iste modi consequatur, eius fugiat nam quae necessitatibus
					voluptas dolorem, aliquid dicta exercitationem suscipit provident.
					Corporis autem consectetur esse consequuntur libero optio quos dolore
					pariatur nisi quia sunt voluptate tenetur tempora amet, quas, nesciunt
					cum illo, distinctio eligendi? Similique esse porro alias inventore
					labore quo perferendis delectus et aperiam quis? In numquam harum quos
					error quisquam non, doloribus qui?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut autem
					maiores odit maxime voluptas rem eum odio reprehenderit nobis minima
					laudantium dicta quasi eaque esse, a quia optio excepturi mollitia
					commodi hic earum. Voluptates enim blanditiis fugit porro dolore vel
					recusandae, iste modi consequatur, eius fugiat nam quae necessitatibus
					voluptas dolorem, aliquid dicta exercitationem suscipit provident.
					Corporis autem consectetur esse consequuntur libero optio quos dolore
					pariatur nisi quia sunt voluptate tenetur tempora amet, quas, nesciunt
					cum illo, distinctio eligendi? Similique esse porro alias inventore
					labore quo perferendis delectus et aperiam quis? In numquam harum quos
					error quisquam non, doloribus qui?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut autem
					maiores odit maxime voluptas rem eum odio reprehenderit nobis minima
					laudantium dicta quasi eaque esse, a quia optio excepturi mollitia
					commodi hic earum. Voluptates enim blanditiis fugit porro dolore vel
					recusandae, iste modi consequatur, eius fugiat nam quae necessitatibus
					voluptas dolorem, aliquid dicta exercitationem suscipit provident.
					Corporis autem consectetur esse consequuntur libero optio quos dolore
					pariatur nisi quia sunt voluptate tenetur tempora amet, quas, nesciunt
					cum illo, distinctio eligendi? Similique esse porro alias inventore
					labore quo perferendis delectus et aperiam quis? In numquam harum quos
					error quisquam non, doloribus qui?
				</p>
			</div>
		</div>
	);
}
