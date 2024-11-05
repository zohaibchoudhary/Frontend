import React, { useState } from "react";
import data from "../json/kanban.json";
import { Flame, Plus, Trash } from "lucide-react";
import { motion } from "framer-motion";

export default function Kanban() {
	return (
		<div className="h-screen w-full bg-neutral-900 text-white font-fredoka">
			<Board />
		</div>
	);
}

const Board = () => {
	const [cards, setCards] = useState(data);
	return (
		<div className="flex h-full w-full gap-3 p-12 overflow-scroll">
			<Column
				title="Backlog"
				column="backlog"
				headingColor="text-neutral-500"
				cards={cards}
				setCards={setCards}
			/>
			<Column
				title="Todo"
				column="todo"
				headingColor="text-yellow-200"
				cards={cards}
				setCards={setCards}
			/>
			<Column
				title="In Progress"
				column="doing"
				headingColor="text-blue-200"
				cards={cards}
				setCards={setCards}
			/>
			<Column
				title="Completed"
				column="done"
				headingColor="text-emerald-200"
				cards={cards}
				setCards={setCards}
			/>
			<BurnBarrel setCards={setCards} />
		</div>
	);
};

const Column = ({ title, headingColor, column, cards, setCards }) => {
	const [active, setActive] = useState(false);

	const filteredCards = cards.filter((card) => card.column === column);

	const handleDragStart = (e, card) => {
		e.dataTransfer.setData("cardId", card.id);
	};

	const handleDragOver = (e) => {
		e.preventDefault();
		highlightIndicator(e);
		setActive(true);
	};

	const highlightIndicator = (e) => {
		const indicators = getIndicators();
		// console.log(indicators);

		// clearHighlights(indicators);
		const el = getNearestIndicator(e, indicators);
		// el.element.style.opacity = "1";
	};

	const clearHighlights = (elements) => {
		const indicators = elements || getIndicators();
		
		indicators.forEach((i) => {
			i.style.opacity = "0";
		});
	};

	const getNearestIndicator = (e, indicators) => {
		const DISTANCE_OFFSET = 50;

		const el = indicators.reduce(
			(closest, child) => {
				
				const box = child.getBoundingClientRect();
				console.log(box);
				console.log(e.clientY);
				
				console.log(e.clientY - box.top);
				

				// const offset = e.clientY - (box.top + DISTANCE_OFFSET);

				// if (offset < 0 && offset > closest.offset) {
				// 	// console.log("IF", {offset, element: child});
				// 	return { offset, element: child };
				// } else {
				// 	// console.log("ELSE", closest);
				// 	return closest;
				// }
			},
			{
				offset: Number.NEGATIVE_INFINITY,
				element: indicators[indicators.length - 1],
			}
		);

		return el;
	};

	const getIndicators = () => {
		return Array.from(
			document.querySelectorAll(`[data-column="${column}"]`)
		);
	};

	const handleDragLeave = () => {
		setActive(false);
		// clearHighlights()
	};

	const handleDragEnd = (e) => {
		setActive(false);
		// clearHighlights()

		// const cardId = e.dataTransfer.getData("cardId")

		// const indicators = getIndicators()

		// const {element} = getNearestIndicator(e, indicators)

		// const before = element.dataset.before || "-1"
	};

	return (
		<div className="w-56 shrink-0">
			<div className="mb-3 flex items-center justify-between">
				<h4 className={`${headingColor} font-medium`}>{title}</h4>
				<span className="text-sm text-neutral-400">{filteredCards.length}</span>
			</div>

			<div
				onDrop={handleDragEnd}
				onDragOver={handleDragOver}
				onDragLeave={handleDragLeave}
				className={`w-full h-full transition-colors ${
					active ? "bg-neutral-800/50" : "bg-neutral-800/0"
				}`}
			>
				{filteredCards.map((card) => (
					<Card key={card.id} {...card} handleDragStart={handleDragStart} />
				))}
				<DropIndicater beforeId="-1" column={column} />
				<AddCard column={column} setCards={setCards} />
			</div>
		</div>
	);
};

const Card = ({ id, title, column, handleDragStart }) => {
	return (
		<>
			<DropIndicater beforeId={id} column={column} />
			<motion.div
				layout
				layoutId={id}
				onDragStart={(e) => handleDragStart(e, { id, column, title })}
				draggable="true"
				className="cursor-grab p-3 rounded bg-neutral-800 border border-neutral-700 active:cursor-grabbing"
			>
				<p className="text-sm text-neutral-100">{title}</p>
			</motion.div>
		</>
	);
};

const DropIndicater = ({ beforeId, column }) => {
	return (
		<div
			data-before={beforeId || "-1"}
			data-column={column}
			className="h-0.5 w-full my-0.5 opacity-0 transition-opacity bg-violet-400"
		/>
	);
};

const BurnBarrel = ({ setCards }) => {
	const [active, setActive] = useState(false);

	const handleDragOver = (e) => {
		e.preventDefault();
		setActive(true);
	};

	const handleCardDelete = (e) => {
		const cardId = e.dataTransfer.getData("cardId");
		setCards((prev) => prev.filter((card) => card.id !== cardId));
		setActive(false);
	};

	return (
		<div
			onDrop={handleCardDelete}
			onDragOver={handleDragOver}
			onDragLeave={() => setActive(false)}
			className={`mt-10 h-56 w-56 grid place-content-center shrink-0 border ${
				active
					? "border-red-800 bg-red-800/20 text-red-500"
					: "border-neutral-500 bg-neutral-500/20 text-neutral-500"
			}`}
		>
			{active ? <Flame className="animate-bounce" /> : <Trash />}
		</div>
	);
};

const AddCard = ({ column, setCards }) => {
	const [task, setTask] = useState("");
	const [adding, setAdding] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!task.trim().length) return;

		const newTask = {
			column,
			id: Math.random().toString(),
			title: task.trim(),
		};

		setCards((prev) => [...prev, newTask]);

		setTask('')
		setAdding(false);
	};
	return (
		<div>
			{adding ? (
				<motion.form layout onSubmit={handleSubmit}>
					<textarea
						value={task}
						onChange={(e) => setTask(e.target.value)}
						autoFocus
						placeholder="Add new task..."
						className="w-full rounded border p-3 text-sm text-neutral-50 border-violet-400 bg-violet-400/20 placeholder:via-violet-300 outline-none"
					/>
					<div className="mt-1.5 flex items-center justify-end gap-1.5">
						<button
							onClick={() => setAdding(false)}
							className="text-xs px-3 py-1.5 text-neutral-400 transition-colors hover:text-neutral-50"
						>
							Close
						</button>
						<button
							type="submit"
							className="text-xs rounded bg-neutral-50 transition-colors hover:bg-neutral-200 px-3 py-1.5 text-neutral-950"
						>
							Add
						</button>
					</div>
				</motion.form>
			) : (
				<motion.button
					layout
					onClick={() => setAdding(true)}
					className="flex items-center justify-center gap-1.5 rounded text-sm font-medium px-3 py-1.5 w-full text-neutral-950 bg-neutral-50 hover:bg-neutral-200"
				>
					<span>Add Card</span>
					<Plus className="h-4 w-4" />
				</motion.button>
			)}
		</div>
	);
};
