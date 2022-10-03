import React, { useEffect, useState } from "react";

import WaecChart from "../../components/WaecChart";
import { Tab } from "@headlessui/react";

export async function getStaticProps(context) {
	const res = await fetch(
		"https://script.google.com/macros/s/AKfycbz9NxxY1289_QagpC69n9_fn9e1DKQS46hiCg9s90jBbogRIU3F3tBg3OQ8ATYZ0N4aBQ/exec"
	);
	const data = await res.json();

	const states = data.allStates;
	return {
		props: {
			states,
			waecData: data,
		},
	};
}

export default function WaecStats2020({ states, waecData }) {
	return (
		<>
			<section className=" px-4 py-6">
				<h2 className=" text-4xl font-semibold text-green-600 text-center">2020 WAEC Data</h2>
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
