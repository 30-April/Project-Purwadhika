let arrAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// soal 1 remove vowels (huruf vocal)
function excercise1(input){
    input = input.toLowerCase()
    let vowels = "aiueo"
    const arrInput = input.split("");
    const arrVowels = vowels.split("");
    arrInput.forEach((val, index) => {   
        let check = arrVowels.includes(val);
        if (check){
            arrInput.splice(index,1)
        }
    }); 
    console.log(arrInput)
}

// soal 2 menghitung sesuai dengan jumlah angka alphabet
function excercise2(input){
    input = input.toLowerCase() // biar semua inputan stringnya jadi huruf kecil semua
    const arrInput = input.split(""); // ini ngubah string ke array
    let output = 0
    arrInput.forEach((val) =>{ //jadi gua disini pake semua isi dari arrInput
        if (arrAlphabet.includes(val)){ // kalo di arrAlphabet ada value dari arrInput, maka gua pake
            let indexAlphabet = arrAlphabet.indexOf(val) // buat nentuin index value yang ada, di index alphabetnya, kemudian gua + 1 karena index mulai dari Nol
            output += indexAlphabet+1 // terus gua += ke dalam variable output, yang kemudian gua konsole
        }
    })
    console.log(output)
}

// soal 3 sama kek nomor 2 cuman ngitung yang bilangan ganjil doang
function excercise3(input){
    input = input.toLowerCase()
    const arrInput = input.split("")
    let output = 0
    arrInput.forEach((val, index) =>{
        if(arrAlphabet.includes(val)){
            let indexAlphabet = arrAlphabet.indexOf(val) + 1
            if (indexAlphabet % 2 != 0){
                output += indexAlphabet
            }
        }
    })
    console.log(output)
}

// soal 4 ada 2 arr, dikedua arr ada beberapa value yang sama, dan ada yang berbeda, output hanya berupa arr yang valuenya berbeda
function excercise4(){
    const arrInput1 = [3,5,4,1,2]
    const arrInput2 = [3,4,5,6,7]
    const arrOutput = []

    //nyari angka yang sama di arrInput1 dengan arrInput2
    arrInput2.forEach((val) =>{
        if(!arrInput1.includes(val)){
            arrInput1.forEach((val) =>{
                if(!arrInput2.includes(val) && !arrOutput.includes(val)){
                    arrOutput.push(val)
                }  
            })
            arrOutput.push(val)
        }
    })
    console.log(arrOutput)
}

// soal nomor 5, remove duplicates number, jadi buat sebuah array yang putputnya adalah kumpulan-kumpulan angka-angka kembar yang sudah tidak ada duplikasi

function excercise5(){
    const arrInput1 = [1,2,3,4,5,6,7]
    const arrInput2 = [4,5,6,7,8,9,10]
    const arrOutput = []

    arrInput1.forEach((val) =>{
        if (arrInput2.includes(val)){
           arrOutput.push(val)
        }

        if (!arrInput2.includes(val)){
            arrInput2.forEach((val) =>{
                if(!arrInput1.includes(val) && !arrOutput.includes(val)){
                    arrOutput.push(val)
                }
            })
            arrOutput.push(val)
        }
    })
    console.log(arrOutput)

}

// tempat buat manggil function

// excercise1("Anjas")
// excercise2("Anjas")
// excercise3("Anjas")
excercise4()
excercise5()