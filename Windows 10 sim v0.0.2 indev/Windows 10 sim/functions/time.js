const Day = document.getElementById("Day");
const Month = document.getElementById("Month");
const Year = document.getElementById("Year");
const Hour = document.getElementById("hour");
const Minutes = document.getElementById("minutes");
const AMPM = document.getElementById("AMPM");

const Luni = [
    "Ianuarie",
    "Februarie",
    "Martie",
    "Aprilie",
    "Mai",
    "Iunie",
    "Iulie",
    "August",
    "Septembrie",
    "Octombrie",
    "Noiembrie",
    "Decembrie"
];
const Luni_Data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
];
const Data_per_luna = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
];

function UpdateTime()
{
    const d = new Date();

    Day.textContent = `${d.getDay() + 30}`;
    Month.textContent = `${Luni_Data[d.getMonth()]}`;
    Year.textContent = `${d.getFullYear()}`;
    Hour.textContent = `${d.getHours()}`;
    Minutes.textContent = `${d.getMinutes()}`;

    if(d.getHours() >= 12 && d.getHours() <= 24)
    {
        AMPM.textContent = "PM";
    }
    else
    {
        AMPM.textContent = "AM";
    }

    setTimeout(UpdateTime, 1000);
}

UpdateTime();
