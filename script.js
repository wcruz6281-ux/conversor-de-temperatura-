function converter() {

    const temperatura = Number(
        document.getElementById("temperatura").value
    );

    const origem = document.getElementById("origem").value;
    const destino = document.getElementById("destino").value;

    const resultado = document.getElementById("resultado");

    if (isNaN(temperatura)) {
        resultado.innerHTML = "Digite uma temperatura.";
        return;
    }

    let celsius;

    // Converte primeiro para Celsius
    if (origem === "celsius") {
        celsius = temperatura;
    }

    if (origem === "fahrenheit") {
        celsius = (temperatura - 32) * 5 / 9;
    }

    if (origem === "kelvin") {
        celsius = temperatura - 273.15;
    }

    // Converte Celsius para o destino
    let valorFinal;

    if (destino === "celsius") {
        valorFinal = celsius;
    }

    if (destino === "fahrenheit") {
        valorFinal = (celsius * 9 / 5) + 32;
    }

    if (destino === "kelvin") {
        valorFinal = celsius + 273.15;
    }

    resultado.innerHTML =
        `Resultado: ${valorFinal.toFixed(2)}`;
}