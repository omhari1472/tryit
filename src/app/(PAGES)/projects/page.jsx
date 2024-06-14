"use client";
import styles from "./page.module.css";
import React from "react";
import Card from "@/app/components/card";
import { data } from "@/app/Data/card-data";
import { regular_text } from "@/app/utils/fonts";
import { motion } from "framer-motion";

export default function Projects() {
	const handleCards = (cardArray) => {
		return <Card styles={styles} data={cardArray} />;
	};

	return (
		<motion.div
			className={styles.main + " " + regular_text.className}
			initial={{ y: 20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -20, opacity: 0 }}
			transition={{ delay: 0.05 }}
		>
			{data.map(handleCards)}
		</motion.div>
	);
}