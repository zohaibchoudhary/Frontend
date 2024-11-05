import { useState } from "react";
import "./App.css";
import { FaceSmileIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Button from "./components/Button";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'



function App() {
	const [show, setShow] = useState(false);
	const [message, setMessage] = useState("");

	const handleEmojiClick = (emojiData) => {
		setMessage((prevMessage) => prevMessage + emojiData.native)
	};

	const handleFunction = (e) => {
		e.stopPropagation()
		setShow((prev) => !prev);
	};

	return (
		<div className="w-screen min-h-screen grid sm:grid-cols-12">
			<div className="border-r-2 border-secondary sm:col-span-4 shadow hidden sm:block"></div>
			<div className="w-full h-full sm:col-span-8 shadow relative flex">
				<div className="absolute sm:top-28">
				{show && (
				<div>
					<Picker
						data={data}
						onEmojiSelect={handleEmojiClick}
						previewPosition='none'
						autoFocus={true}
						onClickOutside={() => setShow(false)}
					/>
				</div>
			)}
					</div>
				<div className="w-full flex justify-between items-center gap-2 px-1 h-14 bg-secondary shadow bottom-0 absolute">
					<Button>
						<Paper
					</Button>
					<Button
						title="Add Emoji"
						className={show ? "bg-slate-500" : ""}
						handleFunction={handleFunction}
					>
						<FaceSmileIcon className="h-6 w-6 text-white-500" />
					</Button>
					<input
						type="text"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						placeholder="Message..."
						className="w-full h-full bg-secondary outline-none border-0 py-2 px-3 text-white font-light placeholder:text-white/70"
					/>
					<Button title="Send">
						<PaperAirplaneIcon className="h-6 w-6 text-white-500" />
					</Button>
				</div>
			</div>
		</div>
	);
}

export default App;
