student_array = []
function submit(){
    for(var i=1; i<=4; i++){
        var name1=document.getElementById("name"+i).value;
        student_array.push(name1)
    }
 var display_array=[]
 for(var i=0; i<student_array.length;i++){
     display_array.push("<h4> NAME-"+student_array[i]+"</h4>")
 }
document.getElementById("display_output").innerHTML=display_array;
document.getElementById("display_output2").innerHTML=display_array.join("");
document.getElementById("submit-id").style.display="none"
for (var i=1; i<=4; i++){
    document.getElementById("name"+i).value=""
}

document.getElementById("sorting-id").style.display='inline-block'

}

function sorting(){
    
    student_array.sort()
    var display_array1=[]
    for(j=0; j<student_array.length; j++){
        display_array1.push("<h4> NAME-"+student_array[j]+"</h4>")
    }

    document.getElementById("display_output").innerHTML=display_array1
    document.getElementById("submit-id").style.display="inline-block"
    document.getElementById("sorting-id").style.display="none"
    
}

