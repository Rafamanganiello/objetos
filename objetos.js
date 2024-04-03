let carro = {
    Nome: `Relampago marquinhos`,
    potencia: `780cv`,
    copasPistao: 8,
    patrocinadores: [`Rust-easy`,`Dinoco`,`Bar do cuza1`],
    Copa(c=0){
        console.log('Marquinhos venceu!')
        this.copasPistao += c
    }
}


console.log(carro.copasPistao)
carro.Copa(1)
console.log(carro.copasPistao)