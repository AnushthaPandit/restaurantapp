import React from "react";

import RestPage from "../../components/RestPage.container";

const ProfileDetails = () => {
	return (
		<RestPage name={"Profile Details"}>
			<div className="pt-[25px] px-[25px]">
				<div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
					<div class="-mx-3 md:flex mb-6">
						<div class="md:w-1/2 px-3 mb-6 md:mb-0">
							<label
								class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
								for="grid-first-name">
								Title
							</label>
							<input
								class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
								id="grid-first-name"
								type="text"
								placeholder="Jane"
							/>
							<p class="text-red text-xs italic">Please fill out this field.</p>
						</div>
						{/* <div class="md:w-1/2 px-3">
							<label
								class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
								for="grid-last-name">
								Description
							</label>
							<input
								class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
								id="grid-last-name"
								type="text"
								placeholder="Doe"
							/>
						</div> */}
					</div>
					<div class="-mx-3 md:flex mb-6">
						<div class="md:w-full px-3">
							<label
								class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
								for="grid-password">
								Description
							</label>
							<input
								class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
								id="grid-password"
								type="text"
								placeholder="Write a description"
							/>
							<p class="text-grey-dark text-xs italic">
								Make it as long and as crazy as you'd like
							</p>
						</div>
					</div>
					<div class="-mx-3 md:flex mb-2">
						<div class="md:w-1/2 px-3 mb-6 md:mb-0">
							<label
								class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
								for="grid-city">
								City
							</label>
							<input
								class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
								id="grid-city"
								type="text"
								placeholder="Albuquerque"
							/>
						</div>
						<div class="md:w-1/2 px-3">
							<label
								class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
								for="grid-state">
								State
							</label>
							<div class="relative">
								<select
									class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
									id="grid-state">
									<option>New Mexico</option>
									<option>Missouri</option>
									<option>Texas</option>
								</select>
								<div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
									<svg
										class="h-4 w-4"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20">
										<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
									</svg>
								</div>
							</div>
						</div>
						<div class="md:w-1/2 px-3">
							<label
								class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
								for="grid-zip">
								Zip
							</label>
							<input
								class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
								id="grid-zip"
								type="text"
								placeholder="90210"
							/>
						</div>
					</div>
					<button
						type="button"
						class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
						Save
					</button>
				</div>
			</div>
		</RestPage>
	);
};

export default ProfileDetails;
