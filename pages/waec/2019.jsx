import React, { useEffect, useState } from "react";
import "chart.js/auto";
import { Line, Bar, Pie } from "react-chartjs-2";
import MainLayout from "../../layouts/MainLayout";
import MaxWidth from "../../components/MaxWidth";
import { useRouter } from "next/router";
import WaecChart from "../../components/WaecChart";
import { Tab } from "@headlessui/react";

export async function getStaticProps(context) {
	const res = await fetch(
		"https://script.google.com/macros/s/AKfycbx30Vg7T_C5qcOCO22CwSoX9-IN4GqRDIXSPXbHlOWZ5LAT1oqGyd_dm0QxD-t2xrBx1g/exec"
	);
	const data = await res.json();

	const states = data.allStates;
	return {
		props: {
			states,
			schoolData: data,
		},
	};
}

export default function WaecStats({ states, schoolData }) {
	console.log(states.schoolData);
	return (
		<>
			<section className=" px-4 py-6">
				<h2 className=" text-4xl font-semibold text-green-600 text-center">2019 WAEC Data</h2>
			</section>

			<Tab.Group>
				<Tab.List>
					<div className=" max-w-xl mx-auto mb-6 space-x-6 sticky top-0">
						<Tab
							className={({ selected }) => {
								return selected
									? "text-green-700 border-b-4 border-green-600 p-2 font-bold text-lg outline-none focus:outline-none"
									: " text-gray-500 p-2 font-bold text-lg";
							}}
						>
							Private Schools
						</Tab>
						<Tab
							className={({ selected }) => {
								return selected
									? "text-green-700 border-b-4 border-green-600 p-2 font-bold text-lg outline-none focus:outline-none"
									: " text-gray-500 p-2 font-bold text-lg";
							}}
						>
							Public Schools
						</Tab>
					</div>
				</Tab.List>
				<Tab.Panels>
					<Tab.Panel>
						{states && schoolData && (
							<div>
								<WaecChart
									title="Private Schools: Total Students that sat for Exam"
									states={states}
									data={schoolData.totalSatForPrivateSchools}
								/>

								<WaecChart
									title="Private Schools: Total Students with 5 credits including English"
									states={states}
									data={schoolData.fiveCreditsPlusEnglishPrivateSchools}
								/>

								<WaecChart
									title="Private Schools: Total Students with 5 credits including Mathematics"
									states={states}
									data={schoolData.fiveCreditsPlusMathsPrivateSchools}
								/>

								<WaecChart
									title="Private Schools: Total Students with 5 credits including both English & Mathematics"
									states={states}
									data={schoolData.fiveCreditsBothEnglishAndMathsPrivateSchools}
								/>
							</div>
						)}
					</Tab.Panel>
					<Tab.Panel>
						{states && schoolData && (
							<div>
								<WaecChart
									title="Public Schools: Total Students that sat for Exam"
									states={states}
									data={schoolData.totalSatForPublicSchools}
								/>

								<WaecChart
									title="Public Schools: Total Students with 5 credits including English"
									states={states}
									data={schoolData.fiveCreditsPlusEnglishPublicSchools}
								/>

								<WaecChart
									title="Public Schools: Total Students with 5 credits including Mathematics"
									states={states}
									data={schoolData.fiveCreditsPlusMathsPublicSchools}
								/>

								<WaecChart
									title="Public Schools: Total Students with 5 credits including both English & Mathematics"
									states={states}
									data={schoolData.fiveCreditsBothEnglishAndMathsPublicSchools}
								/>
							</div>
						)}
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</>
	);
}