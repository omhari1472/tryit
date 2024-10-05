"use client";
import React from "react";
import { InlineIcon } from "@iconify/react";
import { motion } from "framer-motion";

export default function Footer() {
	const github = "https://github.com/devaanshi15";
	const leetcode = "https://leetcode.com/u/dc1509/";
	const linkedin = "https://www.linkedin.com/in/devaanshi-chaturvedi/";
	const instagram = "https://www.instagram.com/riturajpaul18/";

	return (
		<div className="footer">
			<div className="just_a_line"></div>
			<div className="social_icons">
				<motion.div
					whileHover={{ scale: 1.5 }}
					transition={{ duration: 0.1 }}
				>
					<InlineIcon icon="bi:github" className="icons" onClick={() => open(github, "_blank")} />
				</motion.div>

				<motion.div
					whileHover={{ scale: 1.5 }}
					transition={{ duration: 0.1 }}
				>
					<InlineIcon icon="cib:leetcode" className="icons" onClick={() => open(leetcode, "_blank")} />
				</motion.div>

				<motion.div
					whileHover={{ scale: 1.5 }}
					transition={{ duration: 0.1 }}
				>
					<InlineIcon icon="bi:linkedin" className="icons" onClick={() => open(linkedin, "_blank")} />
				</motion.div>

				{/* <motion.div
					whileHover={{ scale: 1.5 }}
					transition={{ duration: 0.1 }}
				>
					<InlineIcon icon="bi:instagram" className="icons" onClick={() => open(instagram, "_blank")} />
				</motion.div> */}


			</div>


		</div>
	)
}