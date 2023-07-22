import React from "react";
import { FaEllipsisV, FaRegCalendarMinus } from "react-icons/fa";
import { BiStats } from "react-icons/bi";
import PieComponent from "./PieComponent";
import RestPageContainer from "../../components/RestPage.container";

const Dashboard = () => {
	return (
		<RestPageContainer>
			<div className="pt-[25px] px-[25px] bg-[#F8F9FC]">
				<div className="flex items-center justify-between">
					<h1 className="text-[#5a5c69] text-[25px] leading-[34px] font-medium cursor-pointer">
						Dashboard
					</h1>
					{/* <button className="bg-[#7D1E6A] h-[32px]  rounded-md text-white flex items-center justify-center px-[20px] cursor-pointer">
                            Generate Report
                        </button> */}
				</div>

				<div className="grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]">
					<div className="h-[90px] rounded-[8px] bg-white border-l-[4px] border-[#7D1E6A] flex items-center justify-between px-8 cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
						<div>
							<h2 className="text-[#7D1E6A] text-[11px] leading-[17px] font-bold">
								Pending Orders
							</h2>
							<h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
								5
							</h1>
						</div>
						<BiStats fontSize={25} color="" />
					</div>

					<div className="h-[90px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-8 cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
						<div>
							<h2 className="text-[#4E73DF] text-[11px] leading-[17px] font-bold">
								Total Orders
							</h2>
							<h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
								50
							</h1>
						</div>
						<BiStats fontSize={25} color="" />
					</div>

					<div className="h-[90px] rounded-[8px] bg-white border-l-[4px] border-[#FDFF00] flex items-center justify-between px-8 cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
						<div>
							<h2 className="text-[#5a5c69] text-[11px] leading-[17px] font-bold">
								Placed Orders
							</h2>
							<h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
								30
							</h1>
						</div>
						<BiStats fontSize={25} color="" />
					</div>

					<div className="h-[90px] rounded-[8px] bg-white border-l-[4px] border-[#F2921D] flex items-center justify-between px-8 cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
						<div>
							<h2 className="text-[#7D1E6A] text-[11px] leading-[17px] font-bold">
								Cancelled Orders
							</h2>
							<h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
								20
							</h1>
						</div>
						<BiStats fontSize={25} color="" />
					</div>
				</div>

				<div className="flex mt-[22px] w-full gap-[20px]">
					<div className="basis-[70%] border bg-white shadow-md cursor-pointer rounded-sm">
						<div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[2px] border-[#EDEDED mb-[20px]">
							<h2 className="font-medium">New Orders</h2>
						</div>
						<div>
							<table class="items-center bg-transparent w-full border-collapse ">
								<thead>
									<tr>
										<th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
											User Name
										</th>
										<th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
											No. Of Items
										</th>
										<th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
											Order Price
										</th>
										<th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
											Address
										</th>
									</tr>
								</thead>

								<tbody>
									<tr>
										<th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
											Johm Doe
										</th>
										<td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
											2
										</td>
										<td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
											&#8377; 340
										</td>
										<td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
											<i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
											lorem ipsum
										</td>
									</tr>
									<tr>
										<th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
											Johm Doe
										</th>
										<td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
											5
										</td>
										<td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
											&#8377; 319
										</td>
										<td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
											<i class="fas fa-arrow-down text-orange-500 mr-4"></i>
											lorem ipsum
										</td>
									</tr>
									<tr>
										<th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
											Johm Doe
										</th>
										<td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
											6
										</td>
										<td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
											&#8377; 294
										</td>
										<td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
											<i class="fas fa-arrow-down text-orange-500 mr-4"></i>
											lorem ipsum
										</td>
									</tr>
									<tr>
										<th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
											Johm Doe
										</th>
										<td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
											10
										</td>
										<td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
											&#8377; 147
										</td>
										<td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
											<i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
											lorem ipsum
										</td>
									</tr>
									<tr>
										<th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
											Johm Doe
										</th>
										<td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
											1
										</td>
										<td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
											&#8377; 190
										</td>
										<td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
											<i class="fas fa-arrow-down text-red-500 mr-4"></i>
											lorem ipsum
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div className="basis-[30%] border bg-white shadow-md cursor-pointer rounded-sm">
						<div className="bg-[#F8F9FC] flex items-center justify-between font-medium py-[15px] px-[20px] border-b-[2px] border-[#EDEDED]">
							<h2>Revenue Resources</h2>
							<FaEllipsisV color="grey" className="cursor-pointer" />
						</div>

						<div className="flex items-center justify-center">
							<PieComponent />
						</div>
					</div>
				</div>
			</div>
		</RestPageContainer>
	);
};

export default Dashboard;
