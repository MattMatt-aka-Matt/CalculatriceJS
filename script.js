// Sélectionnez le bouton et le formulaire
const toggleCalculatorButton = document.getElementById("toggle-calculator-button");
const hideCalculatorButton = document.getElementById("hide-calculator-button");
const calculatorForm = document.getElementById("calculator-form");

// Fonction pour afficher la calculatrice
function showCalculator() {
    calculatorForm.style.display = "block";
    toggleCalculatorButton.style.display = "none";
    hideCalculatorButton.style.display = "inline";
}

// Fonction pour masquer la calculatrice
function hideCalculator() {
    calculatorForm.style.display = "none";
    toggleCalculatorButton.style.display = "inline";
    hideCalculatorButton.style.display = "none";
}

// Ajoutez des gestionnaires d'événements pour les boutons
toggleCalculatorButton.addEventListener("click", showCalculator);
hideCalculatorButton.addEventListener("click", hideCalculator);

// Sélectionnez les champs et le bouton de calcul
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operation = document.getElementById("operation");
const calculateButton = document.getElementById("calculate-button");

//selection du message de survole 
const messageElement = document.getElementById("message");

// Gestionnaire d'événement pour l'input num1
num1.addEventListener("mouseenter", () => {
    messageElement.textContent = "saisir le premier nombre";
});


// Gestionnaire d'événement pour l'input num2
num2.addEventListener("mouseenter", () => {
    messageElement.textContent = "saisir le deuxième nombre";
});

// Gestionnaire d'événement pour la sélection d'opérateur
operation.addEventListener("mouseenter", () => {
    messageElement.textContent = "sélectionner l'opérateur";
});



// systeme de calcul
calculateButton.addEventListener("click", () => {
    const value1 = parseFloat(num1.value);
    const value2 = parseFloat(num2.value);
    const selectedOperation = operation.value;
    let result;

    switch (selectedOperation) {
        case "+":
            result = value1 + value2;
            break;
        case "-":
            result = value1 - value2;
            break;
        case "x":
            result = value1 * value2;
            break;
        case "/":
            if (value2 !== 0) {
                result = value1 / value2;
            } else {
                alert("Division par zéro non autorisée !");
                return; // Arrêtez l'exécution en cas de division par zéro
            }
            break;
        default:
            alert("Opération invalide");
            return; // Arrêtez l'exécution en cas d'opération invalide
    }

    // Affichez le résultat dans un popup
    alert(` ${value1} ${selectedOperation} ${value2} = ${result}`);
});

