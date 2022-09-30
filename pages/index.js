import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MaxWidth from "../components/MaxWidth";
import MainLayout from "../layouts/MainLayout";
import HeroImage from "../public/hero.svg";

export default function Home() {
	return (
		<MainLayout>
			<section className=" px-4 py-16 bg-green-100">
				<MaxWidth>
					<div className=" grid grid-cols-2 gap-16">
						<div className=" flex flex-col  justify-center">
							<h2 className=" text-6xl font-black text-green-600 ">Visualize Nigerian Statistics And Data</h2>
						</div>

						<Image src={HeroImage} alt="The Hero Image" />
					</div>
				</MaxWidth>
			</section>

			<section className=" px-4 py-16 bg-gray-50/50">
				<MaxWidth>
					<div>
						<Link href={"waec"}>
							<div className=" px-4 py-6 rounded shadow-sm border bg-white flex items-center space-x-4 cursor-pointer hover:shadow-green-500">
								<div>
									<h3 className=" text-3xl font-semibold text-gray-700  mb-6">WAEC Data</h3>
									<p className=" text-lg">visualize Nigerian WAEC exam statistics </p>
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
			</section>
		</MainLayout>
	);
}
