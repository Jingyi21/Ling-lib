function styleHeaderSiblings(){
	if(!document.getElementByTagName) return false;
	var headers = document.getElementByTagName("h1");
	var elem;
	for(var i = 0;i < headers.length;i++){
		elem = getNextElement(headers[i].nextSibling);

		//CSS
		//elem.style.fontWidght = "bold";
	}
}

function getNextElement(node){
	if(node.nodeType == 1){
		return node;
	}
	if(node.nextSibling){
		return getNextElement(node.nextSibling);
	}
	return null;
}