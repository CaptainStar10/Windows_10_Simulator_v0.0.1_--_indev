

function CreateWindow(title, path)
{
    let Window_Resized = false;
    let StartX = 0, StartY = 0;
    let xPos = 0, yPos = 0;

    const WindowElement     = document.createElement("div");
    const TopBar            = document.createElement("div");
    const CollapseBtn       = document.createElement("div");
    const CloseBtn          = document.createElement("div");
    const ResizeBtn         = document.createElement("div");
    const Interface         = document.createElement("iframe");
    const TitleBar          = document.createElement("strong");

    const Desktop = document.getElementById("Desktop");

    WindowElement.className     = "Window";
    TopBar.className            = "TopBar";
    TitleBar.className          = "Title";
    CollapseBtn.className       = "Btn";
    CloseBtn.className          = "Btn";
    ResizeBtn.className         = "Btn";
    Interface.className         = "WindowInterface";

    TitleBar.textContent            = title;
    CollapseBtn.textContent         = "-";
    ResizeBtn.textContent           = "[]";
    CloseBtn.textContent            = "X";

    TitleBar.title          = title;
    CollapseBtn.title       = "collapse";
    ResizeBtn.title         = "resize";
    CloseBtn.title          = "close"

    Interface.src = path;

    TopBar.appendChild(TitleBar);
    TopBar.appendChild(CollapseBtn);
    TopBar.appendChild(ResizeBtn);
    TopBar.appendChild(CloseBtn);

    WindowElement.appendChild(TopBar);
    WindowElement.appendChild(Interface);

    Desktop.appendChild(WindowElement);

    TopBar.addEventListener("mousedown", Move);

    function Move(e)
    {
        if(!Window_Resized)
        {
            StartX = e.clientX;
            StartY = e.clientY;

            document.addEventListener("mousemove", MoveMouseEvent);
            document.addEventListener("mouseup", MouseUpEvent);
        }
    }

    function MoveMouseEvent(e)
    {
        if(!Window_Resized)
        {
            xPos = StartX - e.clientX;
            yPos = StartY - e.clientY;

            StartX = e.clientX;
            StartY = e.clientY;

            WindowElement.style.top = (WindowElement.offsetTop - yPos) + "px";
            WindowElement.style.left = (WindowElement.offsetLeft - xPos) + "px";
        }
    }
    function MouseUpEvent(e)
    {
        document.removeEventListener("mousemove", MoveMouseEvent);
    }
    {
        ResizeBtn.addEventListener("mouseover", function(){
            ResizeBtn.style.transition = "0.15s";
            ResizeBtn.style.backgroundColor = "silver";
        });
        ResizeBtn.addEventListener("mouseout", function(){
            ResizeBtn.style.transition = "0.15s";
            ResizeBtn.style.backgroundColor = "white";
        });
        ResizeBtn.addEventListener("click", function(){
            if(!Window_Resized)
            {
                WindowElement.style.transition = "0.15s";
                WindowElement.style.width = "100%";
                WindowElement.style.height = "100%";
                WindowElement.style.left = 0;
                WindowElement.style.top = 0;

                document.removeEventListener("mousemove", MoveMouseEvent);

                Window_Resized = true;
                xPos = 0;
                yPos = 0;
            }
            else
            {
                WindowElement.style.transition = "0.15s";
                WindowElement.style.width = "40%";
                WindowElement.style.height = "40%";
                WindowElement.style.left = (WindowElement.offsetLeft - 0) + "px";
                WindowElement.style.top = (WindowElement.offsetLeft - 0) + "px";

                Window_Resized = false;
            }
        });
    }
    {
        CloseBtn.addEventListener("mouseover", function(){
            CloseBtn.style.transition = "0.15s";
            CloseBtn.style.backgroundColor = "red";
            CloseBtn.style.color = "white";
        });
        CloseBtn.addEventListener("mouseout", function(){
            CloseBtn.style.transition = "0.15s";
            CloseBtn.style.backgroundColor = "white";
            CloseBtn.style.color = "black";
        });
        CloseBtn.addEventListener("click", function(){
            WindowElement.style.transition = "0.1s";
            WindowElement.style.opacity = 0;
            Desktop.removeChild(WindowElement);
        });
    }
    {
        CollapseBtn.addEventListener("mouseover", function(){
            CollapseBtn.style.transition = "0.15s";
            CollapseBtn.style.backgroundColor = "silver";
        });
        CollapseBtn.addEventListener("mouseout", function(){
            CollapseBtn.style.transition = "0.15s";
            CollapseBtn.style.backgroundColor = "white";
        });
    }
}
//Popup window
function WindowPrompt_Active(boolean)
{
    return boolean;
}