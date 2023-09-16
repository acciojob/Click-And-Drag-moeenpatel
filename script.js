const container=document.getElementsByClassName("items")[0];
const items=document.querySelectorAll(".item");
items.forEach((item)=>{
	item.setAttribute("draggable","true")
	
})

items.forEach((item)=>{
	item.addEventListener("dragover",(e)=>{
		e.preventDefault();
		let target=e.target;
		
	})
})