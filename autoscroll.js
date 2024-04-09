const amount = 100;

function scroller() {
	window.scrollTo(0, document.body.scrollHeight);
	return new Promise(resolve => { setTimeout(() => resolve(
		Array.from(document.querySelectorAll("button")).filter(x => x.innerText == "Connect").length
		// document.querySelectorAll("button[data-control-name='invite']").length
		)
		, 1200) });
}

let len;

do {
	len = await scroller();
	console.log(len);
} while (len < amount);

Array.from(document.querySelectorAll("button")).filter(x => x.innerText == "Connect").forEach(b => b.click());
