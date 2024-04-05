function toCase(text) {
  // write your code here
	let upper = text.toUpperCase();
	let lower = text.toLowerCase();
	return (lower + '-' + upper);
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
