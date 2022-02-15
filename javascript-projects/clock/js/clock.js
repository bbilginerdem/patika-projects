const clock = document.querySelector(".clock");
let element = document.getElementById("myName");
let firstName = prompt("Adini gir: ");
element.textContent = firstName;

function showTime() {
	setInterval(() => {
		let date = new Date();
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();
		let day = date.getDay();
		let dayName;
		switch (day) {
			case 1:
				dayName = "Pazartesi";
				break;
			case 2:
				dayName = "Salı";
				break;
			case 3:
				dayName = "Çarşamba";
				break;
			case 4:
				dayName = "Perşembe";
				break;
			case 5:
				dayName = "Cuma";
				break;
			case 6:
				dayName = "Cumartesi";
				break;
			case 7:
				dayName = "Pazar";
				break;
		}
		clock.innerText = `${hours} : ${minutes} : ${seconds} ${dayName}`;
	}, 1000);
}
console.log(clock);
showTime();
