const chatBox = document.getElementById("chat-box");
const input = document.getElementById("message");

function aiReply(text){

text = text.toLowerCase();

if(text.includes("hello"))
return "Hello! How can I help you?";

if(text.includes("your name"))
return "I am an AI Chatbot.";

if(text.includes("how are you"))
return "I'm doing great!";

return "Sorry, I don't understand that yet.";
}

function sendMessage(){

const text = input.value.trim();

if(text==="") return;

chatBox.innerHTML += `
<div class="message user">
${text}
</div>
`;

const reply = aiReply(text);

chatBox.innerHTML += `
<div class="message bot">
${reply}
</div>
`;

input.value="";

chatBox.scrollTop = chatBox.scrollHeight;

}

input.addEventListener("keypress",function(e){

if(e.key==="Enter"){
sendMessage();
}

});
