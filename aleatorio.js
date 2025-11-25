const nomes = ["Carlos","Miguel","Mateus","Vinicius","João","Maria"];


export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
