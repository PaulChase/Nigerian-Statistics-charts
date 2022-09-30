import Link from "next/link";
import React from "react";
import MaxWidth from "./MaxWidth";

export default function NavBar() {
	return (
		<nav className="  py-4 bg-green-700 text-white">
			<MaxWidth>
				<div className=" flex justify-between items-center">
					<Link href={"/"}>
						<h1 className=" text-4xl font-bold cursor-pointer">Stats Hub</h1>
					</Link>
					<ul className=" font-semibold cursor-pointer">
						<li>About</li>
					</ul>
				</div>
			</MaxWidth>
		</nav>
	);
}
