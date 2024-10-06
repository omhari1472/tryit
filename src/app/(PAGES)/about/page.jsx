"use client";
import React from "react";
import { regular_text } from "@/app/utils/fonts";
import { education } from "@/app/Data/education-data";
import { InlineIcon } from "@iconify/react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "./page.module.css";
import Image from "next/image";
import Skills from "@/app/components/skills";
import { motion } from "framer-motion";

export default function About() {
	const iconTimelineStyle = {
		backgroundColor: "#393a47",
	};
	const contentTimelineStyle = {
		backgroundColor: "#393a47",
		background:
			"linear-gradient(45deg, rgba(19,20,36,1) 0%, rgba(50,50,50,1) 35%, rgba(72,78,79,1) 100%)",
	};
	const showTimeline = (education) => {
		return (
			<>
				<VerticalTimelineElement
					key={education.id}
					date={education.date}
					iconStyle={iconTimelineStyle}
					contentStyle={contentTimelineStyle}
					icon={<InlineIcon icon={education.icon_style} />}
				>
					<div className={styles.institution}>{education.institution}</div>
					<div className={styles.location}>
						<InlineIcon icon="ion:location" />
						{education.location}
					</div>
					<div className={styles.qualification}>{education.qualification}</div>
					<div className={styles.score}>{education.score}</div>
				</VerticalTimelineElement>
			</>
		);
	};

	return (
		<motion.div
			className={styles.main + " " + regular_text.className}
			initial={{ y: 20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -20, opacity: 0 }}
			transition={{ delay: 0.1 }}
		>
			<div className={styles.first}>
				<div className={styles.hi}>Hi there! 👋</div>
				<div className={styles.about}>
					I am Devaanshi Chaturvedi, a tech-savvy 4th-year Information
					Technology Engineering student from Netaji Subhash Engineering
					College. With a burning passion about coding in JAVA and exploring app
					development using DART. I have a keen interest in AI/ML and IoT
					technology. I actively engage in tech communities, explore
					opportunities, participate in hackathons, attend conferences, and
					contribute to progressive community building. Eager for teamwork and
					driven by the desire to seize golden opportunities.
				</div>
			</div>

			<div className={styles.second}>
				<div className={styles.education}>
					<InlineIcon icon="mdi:book-education" /> Education
				</div>
				<div>
					<VerticalTimeline>{education.map(showTimeline)}</VerticalTimeline>
				</div>
			</div>

			<div className={styles.third}>
				<div className={styles.skills}>
					<InlineIcon icon="nimbus:tools" /> Skills
				</div>
				<Skills />
			</div>
		</motion.div>
	);
}
