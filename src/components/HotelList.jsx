import React from "react";

import HotelCard from "./HotelCard";

import hotel_list from "../data/hotel_list";

const HotelList = () => {
	return (
		<div className="container mx-auto">
			<div className="flex flex-wrap -mx-4">
				{hotel_list.map((v, i) => (
					<HotelCard
						key={i}
						id={v.id}
						title={v.title}
						desc={v.desc}
						category={v.category}
						headerImgUrl={v.header_img_url}
					/>
				))}
			</div>
		</div>
	);
};

export default HotelList;
