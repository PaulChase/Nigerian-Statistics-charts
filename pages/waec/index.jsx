import Link from "next/link";
import React from "react";
import MaxWidth from "../../components/MaxWidth";
import MainLayout from "../../layouts/MainLayout";

export default function index() {
	return (
		<MainLayout>
			<div className=" px-4 py-16 text-center">
				<h3 className=" text-4xl font-semibold text-green-600 text-center">Welcome to WAEC Stats</h3>
				<p className=" mt-8 font-medium text-lg ">Select the Year from Below</p>

				<MaxWidth>
					<div className=" grid grid-cols-3 gap-12 text-left mt-16">
						<Link href={"waec/2019"}>
							<div className=" px-4 py-6 rounded shadow-sm border bg-white flex items-center space-x-4 cursor-pointer hover:shadow-green-500">
								<div>
									<h3 className=" text-3xl font-semibold text-gray-700  mb-6">WAEC 2019</h3>
									<p className=" text-lg">WAEC stats and charts for the year 2019</p>
								</div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-12 h-12"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
								</svg>
							</div>
						</Link>

						<Link href={"waec/2020"}>
							<div className=" px-4 py-6 rounded shadow-sm border bg-white flex items-center space-x-4 cursor-pointer hover:shadow-green-500">
								<div>
									<h3 className=" text-3xl font-semibold text-gray-700  mb-6">WAEC 2020</h3>
									<p className=" text-lg">WAEC stats and charts for the year 2020 </p>
								</div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-12 h-12"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
								</svg>
							</div>
						</Link>

						<Link href={"waec/2021"}>
							<div className=" px-4 py-6 rounded shadow-sm border bg-white flex items-center space-x-4 cursor-pointer hover:shadow-green-500">
								<div>
									<h3 className=" text-3xl font-semibold text-gray-700  mb-6">WAEC 2021</h3>
									<p className=" text-lg">WAEC stats and charts for the year 2021 </p>
								</div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-12 h-12"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
								</svg>
							</div>
						</Link>
					</div>
				</MaxWidth>
			</div>
		</MainLayout>
	);
}
