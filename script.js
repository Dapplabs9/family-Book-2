var images = ["dhruv.jpeg","soubhya.jpeg","deepak.jpeg","dasan.jpeg","mini.jpeg"];
var names = ["Dhruv","Soubya","Deepak","Dasan","Mini"];

var i = 0;
function update(){
    i++;
    var family_members = 4;
    if (i > family_members) {
        i = 0;
    }
    var updatedImage = images[i];
    var updated_names = names[i];
    document.getElementById("image1").src = updatedImage;
    document.getElementById("name").innerHTML = updated_names;
}
