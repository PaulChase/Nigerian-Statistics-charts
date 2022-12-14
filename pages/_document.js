import { Chart } from "chart.js";
import { Html, Head, Main, NextScript } from "next/document";

Chart.defaults.font.family = "'Nunito Sans', sans-serif";

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600;1,900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body className=" font-nunito">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
