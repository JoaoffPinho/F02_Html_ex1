/*function MixUp(n1,n2){
    let lista = []
    lista.push(n1)
    lista.push(n2)

    let word = lista.shift()
    
    lista[1] = word
    return lista

}
console.log(MixUp("mid","pox"))
console.log(MixUp("dog","dinner"))*/



function mixUp(a, b) {
    return b.slice(0, 2) + a.slice(2) + ' ' + a.slice(0, 2) + b.slice(2)
  }
  
  console.log(mixUp('mix', 'pod'))
  console.log(mixUp('dog', 'dinner'))