import React from 'react';
import '../css/Chatbot.css';

const Chatbot = () => {
	
	const f = document.createElement('iframe');
	f.src = './HNN-quizbot/quizbot.html';
	f.className = "chat-iframe";
	
	const b = document.createElement("div");
	b.className = "chat-exit-button";

	b.addEventListener("click", (event) => {
	
	  let chat_exp = document.getElementsByClassName("expanded")[0];
	
	  chat_exp.removeChild(chat_exp.children[0]);
	  chat_exp.removeChild(chat_exp.children[0]); // linked list
	
	  chat_exp.classList.add("chat-entry");
	  chat_exp.classList.remove("expanded");
	
	  console.log("exit butoon div clicked")
	});
	
	const Expand = () => {
		const chat_entry = document.getElementById("div_0");
		chat_entry.appendChild(f);
	  	chat_entry.appendChild(b);
		chat_entry.classList.add("expanded");
	}
	
	return (
		<div className="chat-entry" id="div_0" onClick={Expand}> 
		</div>
		);
};

export default Chatbot;
