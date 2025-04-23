document.addEventListener('DOMContentLoaded', function() {
    const checkBtn = document.getElementById('check-btn');
    const textInput = document.getElementById('text-input');
    const result = document.getElementById('result');
    
    checkBtn.addEventListener('click', function() {
        const inputValue = textInput.value.trim();
        
        if (inputValue === '') {
            alert('Please input a value');
            return;
        }
        
        const isPalindrome = checkPalindrome(inputValue);
        displayResult(inputValue, isPalindrome);
    });
    
    function checkPalindrome(str) {
        // Remove all non-alphanumeric characters and convert to lowercase
        const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        // Reverse the cleaned string
        const reversedStr = cleanedStr.split('').reverse().join('');
        // Compare the cleaned string with its reversed version
        return cleanedStr === reversedStr;
    }
    
    function displayResult(input, isPalindrome) {
        result.textContent = `${input} ${isPalindrome ? 'is' : 'is not'} a palindrome`;
        result.className = isPalindrome ? 'palindrome' : 'not-palindrome';
    }
});