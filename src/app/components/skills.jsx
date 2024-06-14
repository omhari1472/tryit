import React from "react";
import Image from "next/image";
import styles from "@/app/(PAGES)/about/page.module.css";

export default function Skills() {
	return (
		<ul className={styles.honeycomb}>
			<div className={styles.row1}>
				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/cpp.webp"
						alt="Skill Image"
						width={220}
						height={220}
					/>
				</li>
				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/python.webp"
						alt="Skill Image"
						width={220}
						height={220}
					/>
				</li>
				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/html5.webp"
						alt="Skill Image"
						width={220}
						height={220}
					/>
				</li>
				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/css3.webp"
						alt="Skill Image"
						width={220}
						height={220}
					/>
				</li>
			</div>

			<div className={styles.row2}>
				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/js.webp"
						alt="Skill Image"
						width={220}
						height={220}l
					/>
				</li>
				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/mongodb.webp"
						alt="Skill Image"
						width={220}
						height={220}
					/>
				</li>
				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/express.webp"
						alt="Skill Image"
						width={220}
						height={220}
					/>
				</li>
			</div>

			<div className={styles.row1}>
				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/react.webp"
						alt="Skill Image"
						width={220}
						height={220}
					/>
				</li>
				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/next.webp"
						alt="Skill Image"
						width={220}
						height={220}
					/>
				</li>

				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/node.webp"
						alt="Skill Image"
						width={220}
						height={220}
					/>
				</li>
				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/linux.webp"
						alt="Skill Image"
						width={220}
						height={220}
					/>
				</li>
			</div>
			<div className={styles.row2}>
				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/docker.webp"
						alt="Skill Image"
						width={220}
						height={220}
					/>
				</li>

				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/git.webp"
						alt="Skill Image"
						width={220}
						height={220}
					/>
				</li>
				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/github.webp"
						alt="Skill Image"
						width={220}
						height={220}
					/>
				</li>
			</div>

			<li className={styles.honeycomb_hidden}></li>
		</ul>
	);
}