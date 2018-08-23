function enterdata(e) 
{ 
   
    var names = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya"]; 
    names=names.sort(); 
    var data = document.getElementById("name").value; 
    var DropBox = document.getElementById("drop"); 
    var str = "<ul>"; 
    var count = 0;   
    names.forEach(element => { 
        if (element.toUpperCase().includes(data.toUpperCase())) { 
            str += "<li id='" + element + "'  onkeydown='selectdata(event,this.innerHTML)' onclick='dataSelect(this.id)'>" + element + "</li>"; 
            console.log(str); 
            count = 1; 
    } 
    }); 
    if (count == 1) 
        str += "</ul>"; 
    else
    { 
        str = "<li>Data Not Found</li></ul>"; 

    } 
    if (data == "") 
        DropBox.innerHTML = ""; 
    else 
        DropBox.innerHTML = str; 

} 
function dataSelect(data) 
{ 
    document.getElementById("name").value = data; 
    document.getElementById("drop").innerHTML = ""; 
} 

function selectdata(evt,data) 
{  
   /* var x = document.getElementById(this.id);
    if (x) x = x.getElementsByTagName("ul"); 
    if(evt.keyCode==40)
    {
        focus++;
        addActive(x);
    }
   */
    console.log(data); 
} 
function addActive()
{
     if (!x) return false;
    
}
function OnBodyClick()
{ 
   
    document.getElementById("drop").innerHTML = ""; 

}
function clearText() 
{ 
    document.getElementById("name").value = ""; 
    document.getElementById("drop").innerHTML = ""; 

} 

