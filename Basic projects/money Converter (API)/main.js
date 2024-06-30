<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Converter</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .container {
            max-width: 300px;
            margin: auto;
        }
        input, select, button {
            margin: 5px 0;
            padding: 10px;
            width: 100%;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2> Converter</h2>
        <label for="amount">Amount in AED:</label>
        <input type="number" id="amount" placeholder="Enter amount in AED" />

        <label for="currency">Convert to:</label>
        <select id="currency">
            <option value="USD">USD - United States Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="JPY">JPY - Japanese Yen</option>
        </select>

        <button onclick="convertCurrency()">Convert</button>

        <h3 id="result"></h3>
    </div>

    <script>
        async function convertCurrency() {
            const amount = document.getElementById('amount').value;
            const currency = document.getElementById('currency').value;
            const apiKey = 'c840a45fc80f95dc8b99b4c8';
            const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/AED`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                const rate = data.conversion_rates[currency];
                const convertedAmount = (amount * rate).toFixed(2);

                document.getElementById('result').innerText = `${amount} AED is ${convertedAmount} ${currency}`;
            } catch (error) {
                document.getElementById('result').innerText = 'Error fetching exchange rates.';
                console.error('Error fetching exchange rates:', error);
            }
        }
    </script>
</body>
</html>
