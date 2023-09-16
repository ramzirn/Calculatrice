const touches = [...document.querySelectorAll('.btn')]
console.log(touches )

const listcodes = touches.map(touches =>touches.dataset.key)
const ecran =document.querySelector('.screen')

document.addEventListener('keydown',(e)=>{
    const value = e.keyCode.toString()
    console.log(value,typeof(value))
    calculer(value)
})


document.addEventListener('click',e=>{
    const value = e.target.dataset.key
    console.log(value)
    calculer(value)
})

const calculer = (value)=>{
    if (listcodes.includes(value)){
        switch(value){
            case '8' :
                ecran.textContent=""
                break
            
            case '61':
                const resultat = eval(ecran.textContent)
                ecran.textContent= resultat
                break
            
            default:
                const index = listcodes.indexOf(value)
                const touche = touches[index]
                ecran.textContent= ecran.textContent + touche.innerHTML
                break

        }
    }
}