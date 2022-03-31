//menampilkan angka-angka pada layar
//disini querrySelector digunakan untuk memanggil dan mendapatkan element calculator-screen 
//updateScreen dideklarasikan agar mengubah angka terbaru pada layar
const calcScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
    calcScreen.value = number;
};

//disini querySelectorAll digunakan untuk mendapatkan semua element tombol atau button number
const numbers = document.querySelectorAll(".number");

//mengakses tombol angka pada kalkulator ketika ditekan
//click event telah ditetapkan ke setiap element tombol number 
numbers.forEach( (number) => {
    number.addEventListener("click", (event) =>{
        inputNumber(event.target.value);            //inputNumber mendapatkan nilai angka ketika ditekan
        updateScreen(currentNumber);                //updateScreen menjadikan currentNumber sebagai argumen
    });
}); 

//menyimpan value angka-angka dan mengeksekusi operator
//mendeklaeasikan angka sebelum, operator, dan angka saat ini
let prevNumber = ''
let calcOperator = ''
let currentNumber = '0'     //nilai awal pada layar tertampil 0

//mengeksekusi angka saat di klik
const inputNumber = (number) => {   
    if (currentNumber === '0'){
        currentNumber = number;     //memberikan angka ke currentNumber dan
    }
    else{
     currentNumber += number;       // + digunakan agar dapat meng-input lebih dari satu angka
    }
};                                   

//------------------------------------------------------------

//mendeklarasikan operators dan memanggil semua element operator
const operators = document.querySelectorAll(".operator")

//click event telah ditetapkan ke setiap element tombol operator (+ - / *)
operators.forEach( (operator) => {
    operator.addEventListener("click", (event) =>{
        inputOperator(event.target.value);
    });
});

const inputOperator = (operator) => {
    if(calcOperator === ''){
        prevNumber = currentNumber;     //memberikan angka saat ini ke prevNumber dan menyimpannya
    }
    calcOperator = operator;
    currentNumber = '0';                 //kosongkan currentNumber
};

//deklarasi equalSign untuk mengaktifkan tombol = (sama-dengan)
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener ('click', () => {
    calculate();                    //memanggil fungsi untuk melakukan operasi.
    updateScreen(currentNumber);        //menampilkan hasil operasi pada layar.
    clearAll();                     //memanggil fungsi clearAll untuk me-reset layar agar dapat digunakan kembali-
});                                 //ketika meng-input tombol angka baru.

 
const calculate = () => {
    let result = '';
    switch (calcOperator) {
        case "+":
            result = parseFloat (prevNumber) + parseFloat(currentNumber);
            break;      //parseFloat digunakan untuk mengubah angka string pada layar jadi angka 

        case "-":
            result = parseFloat (prevNumber) - parseFloat(currentNumber);
            break;

        case "/":
            result = parseFloat (prevNumber) / parseFloat(currentNumber);
            break;
        
        case "*":
            result = parseFloat (prevNumber) * parseFloat(currentNumber);
            break;
        
        case "%":
            result = parseFloat (prevNumber) / 100;     //operasi persen
            break;
        
        default:
            break;
    };
    currentNumber = result;     //memasukkan nilai result ke currentNumber
    calcOperator = '';          //operator tidak ditampilkan pada layar
};

//--------------------------------------------------

//menghapus isi layar saat tombol AC diklik

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
});

const clearAll = () => {
    prevNumber = '';
    calcOperator = '';
    currentNumber = '0';
};

//---------------------------------------------------

//mendeklarasikan decimal untuk tombol desimal
const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
    inputDecimal (event.target.value);
    updateScreen(currentNumber);
});

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return;
    };
    currentNumber += dot;
};

//-------------------------------------------------
