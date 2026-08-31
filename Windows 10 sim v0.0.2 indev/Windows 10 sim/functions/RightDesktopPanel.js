const CalendarPanel = document.getElementById("CP");
let CalendarPanel_ON = false;

const WidgetsPanel = document.getElementById("WD");
let WidgetPanel_ON = false;

document.getElementById("Cln").addEventListener("click", function(){
    if(!CalendarPanel_ON)
    {
        CalendarPanel.style.transition = "0.15s";
        CalendarPanel.style.animation = "GoLeft 0.25s linear";
        CalendarPanel.style.display = "flex";
        CalendarPanel_ON = true;

        if(WidgetPanel_ON)
        {
            WidgetsPanel.style.display = "none";
            WidgetPanel_ON = false;
        }
    }
    else
    {
        CalendarPanel.style.display = "none";
        CalendarPanel_ON = false;
    }
});

document.getElementById("Wdgs").addEventListener("click", function(){
    if(!WidgetPanel_ON)
    {
        WidgetsPanel.style.transition = "0.15s";
        WidgetsPanel.style.animation = "GoLeft 0.15s linear";
        WidgetsPanel.style.display = "flex";
        WidgetPanel_ON = true;

        if(CalendarPanel_ON)
        {
            CalendarPanel.style.display = "none";
            CalendarPanel_ON = false;
        }
    }
    else
    {
        WidgetsPanel.style.display = "none";
        WidgetPanel_ON = false;
    }
});
