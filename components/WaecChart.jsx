import React, { useEffect, useState } from "react";
import "chart.js/auto";
import { Line, Bar, Pie } from "react-chartjs-2";
import MaxWidth from "./MaxWidth";

export default function WaecChart({ states, data, title }) {
	const [waecData, setWaecData] = useState(null);

	const getColumns = () => {
		let males = [];
		let females = [];
		let total = [];

		data.forEach((row) => {
			males.push(row[0]);
			females.push(row[1]);
			total.push(row[2]);
		});

		setWaecData([
			{
				label: "Female",
				data: females,
				// you can set indiviual colors for each bar
				backgroundColor: "orange",
				borderWidth: 2,
				borderColor: "orange",
			},
			{
				label: "Males",
				data: males,
				// you can set indiviual colors for each bar
				backgroundColor: "blue",
				borderWidth: 2,
				borderColor: "blue",
			},
			{
				label: "Total",
				data: total,
				// you can set indiviual colors for each bar
				backgroundColor: "gray",
				borderWidth: 2,
				borderColor: "gray",
			},
		]);
	};

	useEffect(() => {
		getColumns();
	}, []);

	return (
		<section className=" mt-20">
			<div>
				<h3 className=" uppercase text-2xl font-semibold text-center mb-6">{title}</h3>
			</div>
			{waecData && (
				<div className=" ">
					<MaxWidth>
						<Line
							data={{
								labels: states,
								datasets: waecData,
								options: {
									plugins: {
										legend: {
											labels: {
												// This more specific font property overrides the global property
												font: {
													size: 22,
												},
											},
										},
									},
								},
							}}
						/>
					</MaxWidth>
				</div>
			)}
		</section>
	);
}
