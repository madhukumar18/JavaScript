async function myLogic() {
    await new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("printed madhui")
            res()

    },2000)

    })

}
async function main(){
console.log("a")
await myLogic()
console.log("b")
}
main()
// here we consoled a and mylogic and b first it will execuate a and b because it has callback funcxtion setTieoUt so we assigned a async and await function that make first a will execuated then mylogic will execuated and than b will execuated
// if we not used async function them first and last will execuate and promise will execuated