
// tablica opcji:
var choiceArray = ['Rock', 'Spock', 'Paper', 'Lizard', 'Scissors'];





// mechanizm gry:
var game = function(userChoice, computerChoice) {

	//zamiana wyboru użytkownika (stringa) na liczbę:
	var userChoiceNum;
	for (i = 0; i < choiceArray.length; i++) {
		if (userChoice === choiceArray[i]) {
			userChoiceNum = i;
		}
	}

	var result = document.getElementById('result');

	var compare = ((userChoiceNum - computerChoice) + 5) % 5;

	if (computerChoice === userChoiceNum) {
		result.innerHTML = 'REMIS!';
	}
	else {
		if (compare === 3 || compare === 4) {
			result.innerHTML = 'Wygrał KOMPUTER!';
		}
		else {
			result.innerHTML = 'Wygrałeś!';
		}
	}

}

// dodajemy klasę w celu ładnego ostylowania wyników gry:
	var addClass = function(choice) {
		switch(choice.innerHTML) {
			case 'Rock':
			choice.className = "";
			choice.classList.add('fake-btn', 'btn-primary');
			break;
			case 'Paper':
			choice.className = "";
			choice.classList.add('fake-btn', 'btn-success');
			break;s
			case 'Scissors':
			choice.className = "";
			choice.classList.add('fake-btn', 'btn-info');
			break;
			case 'Lizard':
			choice.className = "";
			choice.classList.add('fake-btn', 'btn-warning');
			break;
			case 'Spock':
			choice.className = "";
			choice.classList.add('fake-btn', 'btn-danger');
			break;
			default:
			choice.className = "";
		}
	}


// tu pobieramy od użytkownika jego wybór
  var buttons = document.getElementsByTagName('button');
  var buttonsCount = buttons.length;
  var userChoice;
  for (var i = 0; i < buttonsCount; i += 1) {
    buttons[i].onclick = function(e) {
    	// pobieramy wybór komputera:
        var computerChoice = Math.floor(Math.random() * 5);
        var computerChoiceString = choiceArray[computerChoice]; // zamiana wyboru komputera (liczby) na string

        // wyświetlenie wyboru komputera:
        var computer = document.getElementById('computer');
		computer.innerHTML = computerChoiceString;
		addClass(computer); // ostylowanie wyboru


		// wyświetlenie wyboru użytkownika:
        userChoice = this.innerHTML;
        var user = document.getElementById('user');
        user.innerHTML = userChoice;
        addClass(user); // ostylowanie wyboru

        e.preventDefault();
        game(userChoice, computerChoice);
    };
  }