"use client";
import React from "react";
import "./loader.css";
import { motion } from "framer-motion";
export default function Loader() {
	return (
		<div className="main_loader">
			<motion.div
				className="loader_div"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ delay: 0.05 }}
			></motion.div>
		</div>
	);
}