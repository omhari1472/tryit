"use client";
import React from "react";
import Image from "next/image";
import { InlineIcon } from "@iconify/react";
import { motion } from "framer-motion";

export default function Card(props) {
	const styles = props.styles;
	const data = props.data;

	return (
		<div className={styles.card_div}>
			<div className={styles.card_image}>
				<Image
					src={props.data.thumbnail}
					alt="Project Image"
					layout="instrinsic"
					fill
					// width={618}
					// height={662}
				/>
			</div>

			<div className={styles.card_content}>
				<div className={styles.project_title}>{data.title}</div>
				<div className={styles.project_description}>{data.description}</div>
				<div className={styles.project_links}>
					{data.website ? <motion.div whileHover={{ scale: 1.5 }} transition={{ duration: 0.1 }} onClick={() => open(data.website, '_blank')}> <InlineIcon icon="streamline:programming-web-server-world-internet-earth-www-globe-worldwide-web-network" className={styles.icon_project} /></motion.div> : null}
					{data.github ? <motion.div whileHover={{ scale: 1.5 }} transition={{ duration: 0.1 }} onClick={() => open(data.github, '_blank')}><InlineIcon icon="mdi:github" className={styles.icon_project} /></motion.div> : null}
				</div>
			</div>
		</div>
	)
}