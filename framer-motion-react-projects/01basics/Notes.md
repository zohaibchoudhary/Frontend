
# Hover animation 1
<div className="text-5xl font-thin">
{
	"Zohaib Choudhary".split("").map((child, index) => (
		<span 
		key={index} 
		className="hoverText">
		{child}
		</span>
	))
}
</div>

# Hover animation 2
export default function Free() {
  return (
    <div className="bg-slate-900 text-gray-300 grid place-content-center gap-3 h-[90vh] font-poppins">
    	<FlipLink href="#">Twitter</FlipLink>
    	<FlipLink href="#">LinkedIn</FlipLink>
    	<FlipLink href="#">Facebook</FlipLink>
    	<FlipLink href="#">Instagram</FlipLink>
    </div>
  );
}

const duaration = 0.25
const stagger = 0.025

const FlipLink = ({ children, href }) => {
return (
<motion.a
initial="initial"
whileHover="hovered"
// transition={{
      //   staggerChildren: 0.2
      // }}
href={href}
className="relative block overflow-hidden uppercase whitespace-nowrap text-7xl font-black"
style={{
        lineHeight: '3.4rem'
      }} >
<div>
{children.split("").map((l, i) => (
<motion.span
className="inline-block"
variants={{
							initial: {
								y: 0,
							},
							hovered: {
								y: "-100%",
							},
						}}
transition={{
              duaration,
              ease: "easeInOut",
              delay: stagger * i
            }}
key={i} >
{l}
</motion.span>
))}
</div>
<div className="absolute inset-0">
{children.split("").map((l, i) => (
<motion.span
className="inline-block"
variants={{
							initial: {
								y: "100%",
							},
							hovered: {
								y: 0,
							},
						}}
transition={{
              duaration,
              ease: "easeInOut",
              delay: stagger * i
            }} >
{l}
</motion.span>
))}
</div>
</motion.a>
);
};
