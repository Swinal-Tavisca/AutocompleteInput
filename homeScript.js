var names = ["Ragul","Rajpreet","Pallvi","Neha","Ankita","Raja","Shreea","Smriti","Shrijeet","Ayush","Swapnil","Nihit","Bhargavi", "Anushka","Swinal","Utkarsh","Saurabh","Paarth","Vishwas","Mohit","Gurbaksh","Ashwarya"];
names = names.sort();
var scrollme = 0;
var reset = 0;
var array1 = [];
var p=5;
var index1 = 0;
var index2 = 0;
var Up = 0;
var Down = 0;
function selectdata(data) 
{
   index1 = 0;
    index2 = 0;
    document.getElementById("name").value = data;
    document.getElementById("drop").innerHTML = "";    
    Up = 0;
    Down = 0;
}
function cleardata() {
    index1 = 0;
    index2 = 0;
    document.getElementById("name").value = "";
    Up = 0;
    Down = 0;
    document.getElementById("drop").innerHTML = ""; 
}
function click()
{
    document.getElementById("drop").innerHTML = "";
}
function enter(eve)
{
    if (reset == 0) 
    {
        array1 = [];
        reset = 1;
    }
        var data = document.getElementById("name").value;
        var dropBox = document.getElementById("drop");
        var str = "<ul>";
        var count = 0;
        var flagFirstElementHover = 0;
        var index2 = 0;
        array1=[];
        for (var index1 = 0; index1 < names.length; index1++) {
            if (names[index1].toUpperCase().includes(data.toUpperCase())) {
                str += "<li id='" + index1 + "' onclick='selectdata(this.innerHTML)' onmouseover='over(this.id)'>" + names[index1] + "</li>";
                array1[index2] = index1;
                count = 1;
                index2++;
            }
        }
        if (count == 1) {
            str += "</ul>";
        }
        else {
            str = "<li>Data Not present</li></ul>";
        }
        if (data == "") {
            dropBox.innerHTML = "";
            index1 = 0;
            scrollme = 0;
            reset = 0;
        }
        else {
            dropBox.innerHTML = str;
            document.getElementById(array1[0]).style.backgroundColor = "white";
        }

}

function over(id) 
{
    document.getElementById(id).style.backgroundColor="white";
    index2=id;
    for(var index1=0;index1<array1.length;index1++){
        if(array1[index1]!=id)
        {
            document.getElementById(array1[index1]).style.backgroundColor="blanchedalmond";
        }
    }
}
function selectItem(evt)
{
    
    if (scrollme == 0) 
    {
        index1 = 0;
        index2 = 0;
        Up = 0;
        Down = 0;
        scrollme = 1;
    }

    index1 = array1[index2];
    if (evt.keyCode == 13) {
        selectdata(names[index1]);
    }
    else if (evt.keyCode == 38) {
        if (index2 > 0) {
            document.getElementById(index1).style.backgroundColor = "blanchedalmond";
            index2--;
            if (Up < 5)
                Up++;
            index1 = array1[index2];
            document.getElementById(index1).style.backgroundColor = "white";
            if (Up == Down)
                document.getElementById("drop").scrollBy(0, -22);
        }

    }
    else if (evt.keyCode == 40) {
        if (index2 < array1.length - 1) {
            Up = 0;
            if (Down < 5)
                Down++;
            document.getElementById(index1).style.backgroundColor = "blanchedalmond";
            index2++;
            index1 = array1[index2];
            document.getElementById(index1).style.backgroundColor = "white";
            if (index2 >= 5)
                document.getElementById("drop").scrollBy(0, 22);
        }
    }
}
