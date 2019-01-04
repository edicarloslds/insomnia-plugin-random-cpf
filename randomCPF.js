const random = () => {
    const randomNumb = Math.floor(Math.random() * 999);
    return ("" + randomNumb).padStart(3, '0');
}
 
const digits = (n1, n2, n3, n4) => {
    let nums = n1.split("").concat(n2.split(""), n3.split(""));

    if (n4){
        nums[9] = n4;
    }
    
    let x = 0;
    for (let i = (n4 ? 11:10), j = 0; i >= 2; i--, j++) {
        x += parseInt(nums[j]) * i;
    }
    
    const y = x % 11;
    return y < 2 ? 0 : 11 - y;
}

module.exports.templateTags = [{
    name: 'randocpf',
    displayName: 'Random CPF',
    description: 'Generate a random cpf',
    args: [],
    async run (context) {        
        const numb1 = random();
        const numb2 = random();
        const numb3 = random();

        const dig1 = digits(numb1, numb2, numb3);
        const dig2 = digits(numb1, numb2, numb3, dig1);

        return `${numb1}.${numb2}.${numb3}-${dig1}${dig2}`;
    }
}];