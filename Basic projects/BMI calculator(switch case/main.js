<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <p>Please enter your height (cm):</p>
   <input type="text" id="inp1"><br>
   <p>Please enter your weight (kg):</p>
   <input type="text" id="inp2"><br>
   <button onclick="bmi()">Calculate</button> 
   <h2 id="bm"></h2>

   <script>
       function bmi() {
           let heightCm = Number(document.getElementById('inp1').value);
           let weight = Number(document.getElementById('inp2').value);

           function convertCmToM(cm) {
               return cm / 100;
           }

           let heightM = convertCmToM(heightCm);
           let kotla = weight / (heightM ** 2); // Corrected the formula

           if (isNaN(heightCm) || isNaN(weight) || heightM <= 0 || weight <= 0) {
               alert('Les valeurs ne sont pas valides');
               return;
           }

           let state = '';

           switch (true) {
               case (kotla < 18.5):
                   state = 'underweight';
                   break;
               case (kotla >= 18.5 && kotla < 24.9):
                   state = 'normal weight';
                   break;
               case (kotla >= 24.9 && kotla < 29.9):
                   state = 'overweight';
                   break;
               case (kotla >= 29.9):
                   state = 'obese';
                   break;
               default:
                   state = 'out of range';
                   break;
           }

           document.getElementById('bm').textContent = `BMI: ${kotla.toFixed(2)}, State: ${state}`;
       }
   </script>
</body>
</html>
