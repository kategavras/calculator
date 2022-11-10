let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','X','/'];

const out = document.querySelector('.calc-screen p')

function clearALL () {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearALL;

document.querySelector('.buttons').onclick = (Event) => {
    if(!Event.target.classList.contains('btn')) return;
    if(Event.target.classList.contains('ac')) return;


    out.textContent = '';
    const key = Event.target.textContent;

    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
        
            out.textContent = a;
        }
        else if (a!== '' && b!=='' && finish){
            b = key;
            finish = false;
            out.textContent = b;
        }
        else{
            b += key;
            out.textContent = b;
        }
        console.table(a, b, sign);
        return;
    }

    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.table(a, b, sign);
        return;
    }

    if (key === '=') {
        if (b === '') b=a;
        switch (sign) {
            case "+":
                    a = (+a) + (+b);
                    break;
            case "-":
                    a = a - b;
                    break;
            case "X":
                    a = a * b;
                    break;
            case "/":
                if (b === '0') {
                    out.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                    }
                    a = a / b;
                    break;
        }
        finish = true;
        out.textContent = a;
        console.table(a, b, sign); 
    }

}