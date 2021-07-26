'use strict'

const formataDigito = (digito) => `0${digito}`.slice(-2)

const atualizarTempo = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const quantidadeMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const quantidadeSegundos = tempo % 60
    const quantidadeHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const quantidadeDias = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formataDigito(quantidadeSegundos);
    minutos.textContent = formataDigito(quantidadeMinutos);
    horas.textContent = formataDigito(quantidadeHoras);
    dias.textContent = formataDigito(quantidadeDias);
}
const contagemRegressiva = (tempo) => {
    const pararContagem = () => { clearInterval(id) }

    const contar = () => {
        if (tempo == 0) {
            pararContagem();
        }
        atualizarTempo(tempo)
        tempo--;
    }
    const id = setInterval(contar, 1000)

}

const tempoRestante = () => {
    // 1 de janeiro de 1970 
    const dataEvento = new Date( '2021-10-13 20:00:00') //Dia e hora do evento
    const hoje = Date.now()
    return Math.floor((dataEvento - hoje) /1000)

}




contagemRegressiva(tempoRestante())