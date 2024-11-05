import ServicesList from '@/components/solutions-list';
import React from 'react'

export const services = [
	{
    to: "/",
		title: "Retail",
	},
	{
    to: "/",
		title: "Consumer packaged goods",
	},
	{
    to: "/",
		title: "Hospitality",
	},
	{
    to: "/",
		title: "Media & Entertainment",
	},
	{
    to: "/",
		title: "Technology software & hardware",
	},
	{
    to: "/",
		title: "Healthcare",
	},
	{
    to: "/",
		title: "Insurance",
	},
	{
    to: "/",
		title: "Financial services",
	},
	{
    to: "/",
		title: "Professional services",
	},
	{
    to: "/",
		title: "Education",
	},
];

function Solutions() {
  return (
    <div>
      <ul className="grid grid-cols-1 w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
				{services.map((service) => (
					<ServicesList
						key={service.title}
						to={service.to}
					>
						{service.title}
					</ServicesList>
				))}
			</ul>
    </div>
  )
}

export default Solutions
