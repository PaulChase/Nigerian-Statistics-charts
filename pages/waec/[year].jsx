import React, { useEffect, useState } from "react";
import "chart.js/auto";
import { Line, Bar, Pie } from "react-chartjs-2";
import MainLayout from "../../layouts/MainLayout";
import MaxWidth from "../../components/MaxWidth";
import { useRouter } from "next/router";
import WaecChart from "../../components/WaecChart";

export default function WaecStats() {
	const [states, setStates] = useState(null);
	const [data, setData] = useState(null);

	useEffect(() => {
		async function getUsers() {
			const res = await fetch(
				"https://script.google.com/macros/s/AKfycbwB_UvBAaSnahZDziH8haMM9K41T6ROfNfZ5sDxbmbbfx58AX2FEbRN_dJKEgWQdKbn/exec"
			);
			const data = await res.json();

			setStates(data.allStates);

			setData(data);
		}

		getUsers();
	}, []);

	const router = useRouter();

	const { year } = router.query;

	return (
		<MainLayout>
			<section className=" px-4 py-6">
				<h2 className=" text-4xl font-semibold text-green-600 text-center">{year} WAEC Data</h2>
			</section>

			{states && data && (
				<div>
					<WaecChart
						title="Private Schools: Total Students that sat for Exam"
						states={states}
						data={data.totalSatForPrivateSchools}
					/>

					<WaecChart
						title="Private Schools: Total Students with 5 credits including English"
						states={states}
						data={data.fiveCreditsPlusEnglishPrivateSchools}
					/>

					<WaecChart
						title="Private Schools: Total Students with 5 credits including Mathematics"
						states={states}
						data={data.fiveCreditsPlusMathsPrivateSchools}
					/>

					<WaecChart
						title="Private Schools: Total Students with 5 credits including both English & Mathematics"
						states={states}
						data={data.fiveCreditsBothEnglishAndMathsPrivateSchools}
					/>
				</div>
			)}
		</MainLayout>
	);
}