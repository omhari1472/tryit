"use client";
import React from "react";
import styles from "./page.module.css";
import { regular_text } from "@/app/utils/fonts";
import achieve from "@/app/Data/achievements-data";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Achivements() {
	const handleAchievements = (data) => {
		return (
			<div className={styles.achievement_card}>
				<Image
					className={styles.thumbnail_image}
					src={data.thumbnail}
					alt="Achievement-Image"
					fill
				/>
				<div className={styles.achievement_title}>{data.achievement}</div>
			</div>
		);
	};
	return (
		<motion.div
			className={styles.main + " " + regular_text.className}
			initial={{ y: 20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -20, opacity: 0 }}
			transition={{ delay: 0.05 }}
		>
			{achieve.map(handleAchievements)}
		</motion.div>
	);
}