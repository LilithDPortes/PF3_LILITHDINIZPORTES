const Calcular = document.getElementById('CalcularMontante');
let Resultado = 0;
let tempo = 0;
let taxaJuros = 0;
let parcelaMensal = 0;
let nome = "";
const divResultado = document.getElementById('divResultado');

function CalculoMontante() {
    parcelaMensal = parseFloat(document.getElementById('ParcelaMensal').value);
    taxaJuros = parseFloat(document.getElementById('TaxaJuros').value);
    tempo = parseFloat(document.getElementById('Tempo').value);
    nome = document.getElementById('Nome').value;

    if (parcelaMensal != "" && tempo != "" && taxaJuros != "" && nome != "") {
        parcelaMensal = parcelaMensal.toFixed(2);
        taxaJuros = taxaJuros / 100;
        let futureValue = (parcelaMensal * ((1 + taxaJuros)**tempo - 1)) / taxaJuros;
        Resultado = parseFloat(futureValue.toFixed(2));
        Resultado = Resultado.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        
        divResultado.textContent = `${nome}, se você aplicar R$ ${parcelaMensal}, à taxa de juros de ${taxaJuros * 100}% ao mês e durante ${tempo} mês(es), acumulará um montante de ${Resultado}.`;
    }else {
        divResultado.textContent = `Preencha os campos corretamente.`;
    }
}

Calcular.addEventListener('click', CalculoMontante);

const Limpar = document.getElementById('Limpar');

function LimparCampos() {
    divResultado.textContent = `O resultado aparecerá aqui.`;
    document.getElementById('Nome').value = "";
    document.getElementById('ParcelaMensal').value = "";
    document.getElementById('TaxaJuros').value = "";
    document.getElementById('Tempo').value = "";
}

Limpar.addEventListener('click', LimparCampos);