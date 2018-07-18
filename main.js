function getfile(file,callback)
{
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function()
  {
if(xhr.readyState === 4 && xhr.status == "200"){
   callback(xhr.responseText);
}
};
xhr.send(null);
}
getfile("data.json",function(text){
  var data = JSON.parse(text);
  console.log(data);
  details(data.basics);
  career(data.CareerObjective);
})
var child = document.querySelector(".childone")
function details(det)
{
  var img=document.createElement("img");
  img.src=det.image;
  child.appendChild(img);
  var name=document.createElement("h3");
  name.textContent =det.name;
  child.appendChild(name);
  var phoneno=document.createElement("phoneno");
  phoneno.textContent=det.phoneno;
  child.appendChild(phoneno);
  var email=document.createElement("a");
 email.href="mailto:archana11@gmail.com";
 email.textContent=det.email;
 child.appendChild(email);
var Address=document.createElement("h2");
Address.textContent="Address :";
child.appendChild(Address);
var hr=document.createElement("hr");
child.appendChild(hr);
var Address=document.createElement("p");
Address.textContent=det.Address;
child.appendChild(Address);
}
var child2=document.querySelector(".childtwo");
function career(careerinfo){
  var career1 =document.createElement("h3");
  career1.textContent="CareerObjective";
  child2.appendChild(career1);
  var hr=document.createElement("hr");
  child2.appendChild(hr);
  var career2=document.createElement("p");
  career2.textContent=careerinfo.info;
  child2.appendChild(career2);
  }
