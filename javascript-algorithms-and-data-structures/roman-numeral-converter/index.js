
document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('number');
    const convertBtn = document.getElementById('convert-btn');
    const output = document.getElementById('output');
    
    convertBtn.addEventListener('click', function() {
        const inputValue = numberInput.value.trim();
        
        // Check if input is empty
        if (inputValue === '') {
            output.textContent = 'Please enter a valid number';
            output.className = 'error';
            return;
        }
        
        const number = parseInt(inputValue, 10);
        
        // Check if number is less than 1
        if (number < 1) {
            output.textContent = 'Please enter a number greater than or equal to 1';
            output.className = 'error';
            return;
        }
        
        // Check if number is 4000 or greater
        if (number >= 4000) {
            output.textContent = 'Please enter a number less than or equal to 3999';
            output.className = 'error';
            return;
        }
        
        // Convert to Roman numeral
        const romanNumeral = convertToRoman(number);
        output.textContent = romanNumeral;
        output.className = 'success';
    });
    
    function convertToRoman(num) {
        const romanNumerals = [
            { value: 1000, symbol: 'M' },
            { value: 900, symbol: 'CM' },
            { value: 500, symbol: 'D' },
            { value: 400, symbol: 'CD' },
            { value: 100, symbol: 'C' },
            { value: 90, symbol: 'XC' },
            { value: 50, symbol: 'L' },
            { value: 40, symbol: 'XL' },
            { value: 10, symbol: 'X' },
            { value: 9, symbol: 'IX' },
            { value: 5, symbol: 'V' },
            { value: 4, symbol: 'IV' },
            { value: 1, symbol: 'I' }
        ];
        
        let result = '';
        
        for (let i = 0; i < romanNumerals.length; i++) {
            while (num >= romanNumerals[i].value) {
                result += romanNumerals[i].symbol;
                num -= romanNumerals[i].value;
            }
        }
        
        return result;
    }
});
