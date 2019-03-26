let number = 0;

function takeANumber(line) {
  number ++;
  line.push(number);
  return number;
}

function nowServing(line) {
  if(line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

// function currentLine(line) {
// 	if(line.length === 0) {
// 		return "The line is currently empty.";
// 	}
// 	let string = "The line is currently: "
// 	let i = 0;
// 	for (i = 0; i < line.length; i++) {
// 		string += `${i + 1}. `;
// 		string += `${line[i]}, `
// 	}
// 	return string;
// }

// currentLine(katzDeliLine);

function currentLine(line) {
	if(line.length === 0) {
		return "The line is currently empty.";
	}
	return `The line is currently: ${line.join(", ")}`;
}

takeANumber(katzDeliLine, "Ada");
nowServing(katzDeliLine);
currentLine(katzDeliLine);