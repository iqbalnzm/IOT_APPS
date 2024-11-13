document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            document.getElementById('suhumax').textContent = data.suhumax;
            document.getElementById('suhumin').textContent = data.suhumin;
            document.getElementById('suhurata').textContent = data.suhurata;

            const nilaiSuhuMaxHumidMax = document.getElementById('nilai-suhu-max-humid-max');
            data.nilai_suhu_max_humid_max.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('data-item');
                div.innerHTML = `
                    <p><strong>ID:</strong> ${item.idx}</p>
                    <p><strong>Suhu:</strong> ${item.suhu}°C</p>
                    <p><strong>Humidity:</strong> ${item.humid}%</p>
                    <p><strong>Kecerahan:</strong> ${item.kecerahan}</p>
                    <p><strong>Timestamp:</strong> ${item.timestamp}</p>
                `;
                nilaiSuhuMaxHumidMax.appendChild(div);
            });

            const monthYearMax = document.getElementById('month-year-max');
            data.month_year_max.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('data-item');
                div.innerHTML = `<p><strong>Month-Year:</strong> ${item.month_year}</p>`;
                monthYearMax.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});