import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
	{ name: "Veg Orders", value: 450 },
	{ name: "Non Veg Orders", value: 50 },
];

const COLORS = ["#00C49F", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
	index,
}) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text
			x={x}
			y={y}
			fill="white"
			textAnchor={x > cx ? "start" : "end"}
			dominantBaseline="central">
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	);
};

const PieComponent = () => {
	return (
		<div>
			<PieChart width={300} height={300}>
				<Pie
					data={data}
					cx="50%"
					cy="50%"
					labelLine={false}
					label={renderCustomizedLabel}
					outerRadius={100}
					fill="#8884d8"
					dataKey="value">
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
			</PieChart>

			<div className="grid grid-cols-2">
				{data.map((item, i) => (
					<p
						key={i}
						className="cursor-pointer font-bold flex items-center justify-center">
						{item.name}
					</p>
				))}
			</div>

			<div className="grid grid-cols-2 mt-1 mb-2">
				{COLORS.map((item, i) => (
					<div
						className=" h-[30px] w-[30px] ml-6"
						style={{ backgroundColor: item }}
						key={i}></div>
				))}
			</div>
		</div>
	);
};

export default PieComponent;
