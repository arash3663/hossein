<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Care Cost Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f7f7f7;
        }
        form {
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 400px;
        }
        label {
            font-weight: bold;
        }
        select, input {
            width: 100%;
            margin-bottom: 15px;
            padding: 8px;
        }
        button {
            padding: 10px;
            background-color: #83B63E;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            width: 100%;
        }
        h2 {
            color: #333;
        }
    </style>
</head>
<body>
    <h1>Pflegerrechner</h1>
    <form>
        <label for="package">Paket:</label>
        <select id="package">
            <option value="2800">24h Diplomierte Pflege</option>
            <option value="2200">24h Pflege</option>
            <option value="1500">Teilzeit Pflege</option>
        </select><br>
        <label for="origin">Personalherkunft:</label>
        <select id="origin">
            <option value="400">Slowakisch</option>
            <option value="500">Ungarisch</option>
            <option value="600">Rumänisch</option>
        </select><br>
        <label for="careLevel">Pflegestufe:</label>
        <select id="careLevel">
            <option value="-827">Stufe 4</option>
            <option value="-900">Stufe 5</option>
            <option value="-1000">Stufe 6</option>
        </select><br>
        <label for="travel">Reisekosten:</label>
        <select id="travel">
            <option value="400">Salzburg</option>
            <option value="300">Wien</option>
            <option value="500">Graz</option>
        </select><br>
        <label for="turnus">Turnus:</label>
        <select id="turnus">
            <option value="14">14 Tage</option>
            <option value="28">28 Tage</option>
        </select><br>
        <button type="button" onclick="calculate()">Berechnen</button>
    </form>
    <h2>Pflegekosten: <span id="careCost">0</span> EUR</h2>
    <h2>Sozialversicherung: <span id="insurance">0</span> EUR</h2>
    <h2>Pflegegeld: <span id="careMoney">0</span> EUR</h2>
    <h2>Pflegeförderung: <span id="subsidy">0</span> EUR</h2>
    <h2>Anreise: <span id="travelCost">0</span> EUR</h2>
    <h2>Kosten pro 4 Wochen: <span id="totalCost">0</span> EUR</h2>
    <h2>Kosten pro Tag: <span id="dailyCost">0</span> EUR</h2>
    <script>
        function calculate() {
            var packageCost = parseFloat(document.getElementById('package').value);
            var originCost = parseFloat(document.getElementById('origin').value);
            var careLevel = parseFloat(document.getElementById('careLevel').value);
            var travelCost = parseFloat(document.getElementById('travel').value);
            var turnus = parseInt(document.getElementById('turnus').value);
            var insurance = 400;
            var careSubsidy = -800;
            var totalCost = (packageCost + originCost + travelCost + careLevel + careSubsidy + insurance) / (28 / turnus);
            var dailyCost = totalCost / turnus;
            document.getElementById('careCost').textContent = packageCost.toFixed(2);
            document.getElementById('insurance').textContent = insurance.toFixed(2);
            document.getElementById('careMoney').textContent = careLevel.toFixed(2);
            document.getElementById('subsidy').textContent = careSubsidy.toFixed(2);
            document.getElementById('travelCost').textContent = travelCost.toFixed(2);
            document.getElementById('totalCost').textContent = totalCost.toFixed(2);
            document.getElementById('dailyCost').textContent = dailyCost.toFixed(2);
        }
    </script>
</body>
</html>