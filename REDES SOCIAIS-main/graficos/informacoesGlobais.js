const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    const pessoaCoonectadas = (dados.total_pessoas_conectadas) / 1e9;

    paragrafo.innerHTML = `Você sabia que o mundo tem
    <span>${dados.total_pessoas_mundo}</span> de pessoas e
    que aproximadamente <span>${pessoasConectadas} bilhões
    </span> estão conectadas em alguma rede social e passam
    em média
    <span>${dados.tempo_medio}</span> horas conectadas.`


    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()
