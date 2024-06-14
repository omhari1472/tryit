"use client";
import React, { useState } from "react";
import Link from "next/link";
import { nav_text } from "@/app/utils/fonts";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const [currentPage, setCurrentPage] = useState(usePathname());
	const [showNav, setShowNav] = useState(false);

	return (
		<>
			<div className={showNav ? "hamburger hide" : "hamburger"} onClick={() => setShowNav(true)}><Icon icon="mingcute:menu-fill" /></div>

			<div className={showNav ? "navbar active"+" "+nav_text.className : "navbar" + " "+nav_text.className}>
				<div className={showNav ? "navbar_close_btn" : "navbar_close_btn hide"} onClick={()=> setShowNav(false)}><Icon icon="ep:close-bold" /></div>

				<div className="portfolio_navbar_text">
					Portfolio
				</div>
				<div class="navbar_links">
					<li><Link href="/" className={currentPage == "/" ? "current" : ""} onClick={() => {
					setShowNav(false)
					setCurrentPage("/")}}>Home</Link></li>
					<li><Link href="/about" className={currentPage == "/about" ? "current" : ""} onClick={() => {
					setShowNav(false)
					setCurrentPage("/about")}}>About</Link></li>
					<li><Link href="/projects" className={currentPage == "/projects" ? "current" : ""} onClick={() => {
					setShowNav(false)
					setCurrentPage("/projects")}}>Projects</Link></li>
					<li><Link href="/achievements" className={currentPage == "/achievements" ? "current" : ""} onClick={() => {
					setShowNav(false)
					setCurrentPage("/achievements")}}>Achievements</Link></li>
				</div>
			</div>
		</>
	)
}