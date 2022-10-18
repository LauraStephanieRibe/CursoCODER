function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, rejec) =>{
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que Legal')
.then(frase => frase.concat('?!?'))
.then(outraFrase => console.log(outraFrase))
.catch(e => console.log(e))
