import React, { useEffect, useState } from "react";
import "chart.js/auto";
import { Line, Bar, Pie } from "react-chartjs-2";
import MaxWidth from "./MaxWidth";

export default function WaecChart({ states, data, title }) {
	const [waecData, setWaecData] = useState(null);
	const [sum, setSum] = useState({
		totalStudents: "",
		totalFemales: "",
		totalMales: "",
	});

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

		setSum({
			...sum,
			totalStudents: getSums(total),
			totalMales: getSums(males),
			totalFemales: getSums(females),
		});
	};

	const getSums = (data = []) => {
		return formatNumberWithSpaces(data.reduce((total, value) => total + value));
	};

	useEffect(() => {
		getColumns();
	}, []);

	function formatNumberWithSpaces(number) {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	return (
		<section className=" mt-20">
			<div>
				<h3 className="  text-2xl font-semibold text-center mb-6">{title}</h3>
			</div>

			{waecData && (
				<div className=" ">
					<MaxWidth>
						<div className=" mb-6 grid grid-cols-3 gap-12">
							<div className=" py-4 px-8 space-y-3 rounded-md bg-white shadow border-l-8 border-orange-500 cursor-pointer hover:shadow-orange-500">
								<h3 className=" text-lg font-semibold text-gray-500 ">Total Female Students</h3>
								<h6 className=" text-3xl font-black text-gray-600">{sum.totalFemales}</h6>
							</div>

							<div className=" py-4 px-8 space-y-3 rounded-md bg-white shadow border-l-8 border-blue-500 cursor-pointer hover:shadow-blue-500">
								<h3 className=" text-lg font-semibold text-gray-500">Total Male Students</h3>
								<h6 className=" text-3xl font-black text-gray-600">{sum.totalMales}</h6>
							</div>

							<div className=" py-4 px-8 space-y-3 rounded-md bg-white shadow border-l-8 border-gray-500 cursor-pointer hover:shadow-gray-500">
								<h3 className=" text-lg font-semibold text-gray-500">Total Students</h3>
								<h6 className=" text-3xl font-black text-gray-600">{sum.totalStudents}</h6>
							</div>
						</div>
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
