let TaskBar_Up = false;

{
    const Wallpapers = [
        "./assets/pictures/wallpaper/Default.jpeg"
    ];

    const Desktop = document.getElementById("Desktop");
    Desktop.style.backgroundImage = `url("${Wallpapers[0]}")`;
}
{
    const TaskBar = document.getElementById("Taskbar");
    let AddAnimation = true;
    if(AddAnimation)
    {
        TaskBar.addEventListener("mouseover", function(){
            TaskBar.style.animation = "Up 0.2s linear";
            TaskBar.style.transition = "0.15s";
            TaskBar.style.bottom = "0px";
            TaskBar_Up = true;

            document.getElementById("StartMenu").style.transition = "0.15s";
            document.getElementById("StartMenu").style.bottom = "60px";
        });
        TaskBar.addEventListener("mouseout", function(){
            TaskBar.style.animation = "Up 0.2s linear";
            TaskBar.style.transition = "0.15s";
            TaskBar.style.bottom = "-55px";
            TaskBar_Up = false;

            document.getElementById("StartMenu").style.transition = "0.15s";
            document.getElementById("StartMenu").style.bottom = "5px";
        });
    }
    else
    {
        TaskBar.style.bottom = "0px";
    }
}
{
    const StartBtn = document.getElementById("Start");
    const StartMenu = document.getElementById("StartMenu");
    let StartMenuOpen = false;

    StartBtn.className = "StartBtn";
    StartMenu.className = "StartMenu";

    const FrameBufferDetection = document.createElement("div");
    FrameBufferDetection.className = "FrameBuffer";

    FrameBufferDetection.addEventListener("click", function(){
        StartMenu.style.display = "none";
        document.getElementById("Desktop").removeChild(FrameBufferDetection);
        StartMenuOpen = false;
    });

    StartBtn.addEventListener("mouseover", function(){
        StartBtn.style.transition = "0.15s";
        StartBtn.style.backgroundColor = "whitesmoke";
    });
    StartBtn.addEventListener("mouseout", function(){
        StartBtn.style.transition = "0.15s";
        StartBtn.style.backgroundColor = "white";
    });
    StartBtn.addEventListener("click", function(){
        if(!StartMenuOpen)
        {
            StartMenu.style.display = "flex";
            document.getElementById("Desktop").appendChild(FrameBufferDetection);
            StartMenuOpen = true;
        }
        else
        {
            StartMenu.style.display = "none";
            document.getElementById("Desktop").removeChild(FrameBufferDetection);
            StartMenuOpen = false;
        }
    });
}