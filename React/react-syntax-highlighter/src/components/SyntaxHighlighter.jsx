import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Clipboard } from "lucide-react";
import { useState } from "react";

export default function ReactSyntaxHighlighter() {
	const codeString = `function generateRandomPassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log("Generated password:", randomPassword);`;

  const [isCopied, setIsCopied] = useState(false)

  const copyToClipBoard = async () => {
    setIsCopied(false)
    try {
      window.navigator.clipboard.writeText(codeString)
      setIsCopied(true)
    } catch (error) {
      console.log('Failed to copy');
    } 

    setTimeout(() => {
      setIsCopied(false)
    }, 700)
  }

	return (
		<div className="h-screen w-full flex items-center justify-center bg-neutral-900">
			<div className="w-full max-w-max px-3">
			<div className="w-full rounded-2xl max-w-xl">
				<div className="bg-[#1E1F20] h-10 w-full flex items-center justify-between px-4 rounded-tr-2xl rounded-tl-2xl">
					<div className="flex items-center gap-2">
						<span className="inline-block h-3 w-3 rounded-full bg-red-600" />
						<span className="inline-block h-3 w-3 rounded-full bg-yellow-500" />
						<span className="inline-block h-3 w-3 rounded-full bg-green-600" />
					</div>
					<div>
						<button
            onClick={copyToClipBoard}
            >
							<Clipboard 
              className={`h-4 w-4 ${isCopied ? "text-blue-400" : "text-white "}`} />
						</button>
					</div>
				</div>
				<SyntaxHighlighter
					language="javascript"
					style={monokaiSublime}
					showLineNumbers
					customStyle={{
						width: "100%",
						maxHeight: "24rem",
						overflow: "auto",
						paddingBottom: "0.5rem",
            backgroundColor: "#1E1F20",
						fontSize: "0.85rem"
					}}
				>
					{codeString}
				</SyntaxHighlighter>
			</div>
			</div>
		</div>
	);
}
