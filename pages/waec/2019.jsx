import React, { useEffect, useState } from "react";

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
			allStates: states,
			schoolData: data,
		},
	};
}

export default function WaecStats({ allStates, schoolData }) {
	const [states, setStates] = useState(null);
	const [waecData, setWaecData] = useState(null);

	useEffect(() => {
		setStates(allStates);
		setWaecData(schoolData);
	}, []);
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
						{states && waecData && (
							<div>
								<WaecChart
									title="Private Schools: Total Students that sat for Exam"
									states={states}
									data={waecData.totalSatForPrivateSchools}
								/>

								<WaecChart
									title="Private Schools: Total Students with 5 credits including English"
									states={states}
									data={waecData.fiveCreditsPlusEnglishPrivateSchools}
								/>

								<WaecChart
									title="Private Schools: Total Students with 5 credits including Mathematics"
									states={states}
									data={waecData.fiveCreditsPlusMathsPrivateSchools}
								/>

								<WaecChart
									title="Private Schools: Total Students with 5 credits including both English & Mathematics"
									states={states}
									data={waecData.fiveCreditsBothEnglishAndMathsPrivateSchools}
								/>
							</div>
						)}
					</Tab.Panel>
					<Tab.Panel>
						{states && waecData && (
							<div>
								<WaecChart
									title="Public Schools: Total Students that sat for Exam"
									states={states}
									data={waecData.totalSatForPublicSchools}
								/>

								<WaecChart
									title="Public Schools: Total Students with 5 credits including English"
									states={states}
									data={waecData.fiveCreditsPlusEnglishPublicSchools}
								/>

								<WaecChart
									title="Public Schools: Total Students with 5 credits including Mathematics"
									states={states}
									data={waecData.fiveCreditsPlusMathsPublicSchools}
								/>

								<WaecChart
									title="Public Schools: Total Students with 5 credits including both English & Mathematics"
									states={states}
									data={waecData.fiveCreditsBothEnglishAndMathsPublicSchools}
								/>
							</div>
						)}
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</>
	);
}
