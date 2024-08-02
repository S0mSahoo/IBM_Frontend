import React from 'react';
import '../css/Chatbot.css';

const Chatbot = () => {

	const f = document.createElement('iframe');
	f.src = './HNN-quizbot/quizbot.html';
	f.className = "chat-iframe";

	const b = document.createElement("div");
	b.className = "chat-exit-button";
	b.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#023460" class="bi bi-x-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
</svg>`

	const c  = document.createElement("div");
	c.className = "chat-exit-button-filler1";

	let d = document.createElement("div");
	d.className = "chat-exit-button-filler2";
	b.appendChild(c);
	b.appendChild(d);

	b.addEventListener("click", (event) => {

		let chat_exp = document.getElementsByClassName("expanded")[0];

		chat_exp.removeChild(chat_exp.children[0]);
		chat_exp.removeChild(chat_exp.children[0]); // linked list

		chat_exp.classList.add("chat-entry");
		chat_exp.classList.remove("expanded");
		const chat_entry = document.getElementById("div_0");
		chat_entry.innerHTML = `<img src="HNN-quizbot/robot.png" alt="..." />`
		console.log("exit butoon div clicked")
	});

	const Expand = () => {
		const chat_entry = document.getElementById("div_0");
		chat_entry.innerHTML = ''
		chat_entry.appendChild(f);
		chat_entry.appendChild(b);
		chat_entry.classList.add("expanded");
	}

	return (
		<div className="chat-entry" id="div_0" onClick={Expand}>
			<img src="HNN-quizbot/robot.png" alt="..." />
		</div>
	);
};

export default Chatbot;
