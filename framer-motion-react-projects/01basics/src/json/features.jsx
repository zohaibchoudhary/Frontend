import React from 'react'
import { 
	ClipboardList , 
	Sparkles, 
	MessageCircleCode 
} from "lucide-react";
import ListItem from '@/components/list-item';

export const features = [
{
	"title": "Link-in-bio",
	"to": "/",
	"icon": <ClipboardList className="h-5 w-6" />,
	"description":
		"Curate and track links and content for social media profiles"
},
{
	"title": "Branded Links",
	"to": "/",
	"icon": <Sparkles className="h-5 w-6" />,
	"description":
		"Customize links with your brand's URL"
},
{
	"title": "Mobile Links",
	"to": "/",
	"icon": <MessageCircleCode  className="h-5 w-6" />,
	"description":
		"Short links for SMS messages"
}
]

export default function Features() {
	return (
		<>
			<ul className="grid grid-cols-1 w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
				{
					features.map((feature) => (
						<ListItem
						key={feature.title}
						title={feature.title}
						to={feature.to}
						icon={feature.icon}
						>
							{feature.description}
						</ListItem>
					))
				}
			</ul>
		</>
	)
}
