module.exports.templateTags = [{
    name: 'randocpf',
    displayName: 'Random CPF',
    description: 'Generate a random cpf',
    args: [],
    async run (context) {        
        const numb1 = self.random();
        const numb2 = self.random();
        const numb3 = self.random();

        const dig1 = self.digits(numb1, numb2, numb3);
        const dig2 = self.digits(numb1, numb2, numb3, dig1);

        console.log("OK! ✅");

        return `${numb1}.${numb2}.${numb3}-${dig1}${dig2}`;
    },
    random :function() {
        const randomNumb = Math.floor(Math.random() * 999);
        return ("" + randomNumb).padStart(3, '0');
    },
    digits :function(n1, n2, n3, n4) {
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
}];