import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/app/page.module.css";
import { Icon } from "@iconify/react";
import { handleSubmit } from "@/app/utils/actions";

export default function Modal({ close }) {
	const dropVariants = {
		hidden: {
			y: "-100vh",
			opacity: 0,
		},
		visible: {
			opacity: 1,
			y: 0,
		},
		exit: {
			y: "100vh",
			opacity: 0,
		},
	};
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	
	return (
		<motion.div
			className={styles.backdrop}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<motion.div
				className={styles.modal_content}
				onClick={(e) => e.stopPropagation()}
				initial="hidden"
				animate="visible"
				exit="exit"
				variants={dropVariants}
			>
				<div className={styles.close_btn} onClick={close}>
					<Icon icon="ep:close-bold" />
				</div>

				<form action={handleSubmit} className={styles.form_div}>
					<div className={styles.inputBox}>
						<input type="text" name="username" required="required" onChange={(e)=>setUsername(e.target.value)}/>
						<span>Name</span>
					</div>
					<div className={styles.inputBox}>
						<input type="text" name="email" required="required" onChange={(e)=>setEmail(e.target.value)}/>
						<span>Email</span>
					</div>
					<div className={styles.inputBox}>
						<textarea name="subject" required="required"  onChange={(e)=>setSubject(e.target.value)}/>
						<span>Subject</span>
					</div>

					<button className={styles.send} onClick={close} disabled={ (username.trim()=="" || email.trim()=="" || subject.trim()=="") ? true : false}>
						<div>Send</div>
						<div className={styles.send_icon}>
							<Icon icon="zondicons:send" />
						</div>
					</button>
				</form>

			</motion.div>
		</motion.div>
	);
}