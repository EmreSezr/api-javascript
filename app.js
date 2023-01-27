//ilk açılışta otomatik post yükleniyor
var postArray = []
var albumArray = []
var photoArray = []
window.onload = function () {
  document.getElementById("a_post").style.fontWeight="bolder";
  document.getElementById("a_photo").style.fontWeight="normal";
  document.getElementById("a_album").style.fontWeight="normal";

  document.getElementById('post_section').style.display = "block";
  document.getElementById('album_section').style.display = "none";
  document.getElementById('photo_section').style.display = "none";
  //Search text area sadece ilgili searchi göstermek için
  document.getElementById('post_search').style.display = "block";
  document.getElementById('album_search').style.display = "none";
  document.getElementById('photo_search').style.display = "none";

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  xhr.onload = function () {

    let list = document.getElementById('post_section');

    const userId = JSON.parse(this.responseText);

    userId.forEach(
      function (postlistele) {
        postArray.push(postlistele.title);

      });
    for (var i = 0; i < 8; i++) {

            list.innerHTML += `
            <div class="data_result">
            <p><a class="a_data_post">`+ postArray[i] + `
            </a></p></div>
            `;}
  }
  xhr.send();
  document.getElementById('post_section').innerHTML = "";


  xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/albums", true);

  xhr.onload = function () {

    let list = document.getElementById('album_section');

    const userId = JSON.parse(this.responseText);

    userId.forEach(
      function (postlistele) {
        albumArray.push(postlistele.title);

      });
    for (var i = 0; i < 8; i++) {



      list.innerHTML += `
            <div class="data_result">
            <p><a class="a_data_post">`+ albumArray[i] + `
            </a></p></div>
            `;


    }

  }
  xhr.send();
  document.getElementById('post_section').innerHTML = "";


  xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/photos", true);

  xhr.onload = function () {

    let list = document.getElementById('photo_section');

    const userId = JSON.parse(this.responseText);

    userId.forEach(
      function (postlistele) {
        photoArray.push(postlistele.title);

      });
    for (var i = 0; i < 8; i++) {



      list.innerHTML += `
            <div class="data_result">
            <p><a class="a_data_post">`+ photoArray[i] + `
            </a></p></div>
            `;


    }

  }
  xhr.send();
  document.getElementById('post_section').innerHTML = "";
}





//POSTS
document.getElementById("a_post").addEventListener("click", function () {
  document.getElementById("a_post").style.fontWeight="bolder";
  document.getElementById("a_photo").style.fontWeight="normal";
  document.getElementById("a_album").style.fontWeight="normal";
  //Sekmeler ve gösterilecek content
  document.getElementById('post_section').style.display = "block";
  document.getElementById('album_section').style.display = "none";
  document.getElementById('photo_section').style.display = "none";
  //Search text area sadece ilgili searchi göstermek için
  document.getElementById('post_search').style.display = "block";
  document.getElementById('album_search').style.display = "none";
  document.getElementById('photo_search').style.display = "none";

  let list = document.getElementById('post_section');

  list.innerHTML = "";

  for (var i = 0; i < 8; i++) {



    list.innerHTML += `
          <div class="data_result">
          <p><a class="a_data_post">`+ postArray[i] + `
          </a></p></div>
          `;


  }

});


//ALBUMS
document.getElementById("a_album").addEventListener("click", function () {
  document.getElementById("a_photo").style.fontWeight="normal";
  document.getElementById("a_post").style.fontWeight="normal";
  document.getElementById("a_album").style.fontWeight="bolder";

  document.getElementById('album_section').value = '';
  document.getElementById('post_section').style.display = "none";
  document.getElementById('album_section').style.display = "block";
  document.getElementById('photo_section').style.display = "none";

  document.getElementById('post_search').style.display = "none";
  document.getElementById('album_search').style.display = "block";
  document.getElementById('photo_search').style.display = "none";

  let list = document.getElementById('album_section');
  list.innerHTML = "";
  for (var i = 0; i < 8; i++) {
    list.innerHTML += `
          <div class="data_result">
          <p><a class="a_data_post">`+ albumArray[i] + `
          </a></p></div>
          `;
  }
});


//PHOTOS
document.getElementById("a_photo").addEventListener("click", function () {
  document.getElementById("a_photo").style.fontWeight="bolder";
  document.getElementById("a_post").style.fontWeight="normal";
  document.getElementById("a_album").style.fontWeight="normal";

  document.getElementById('post_section').style.display = "none";
  document.getElementById('album_section').style.display = "none";
  document.getElementById('photo_section').style.display = "block";

  document.getElementById('post_search').style.display = "none";
  document.getElementById('album_search').style.display = "none";
  document.getElementById('photo_search').style.display = "block";


  let list = document.getElementById('photo_section');

  list.innerHTML = "";

  for (var i = 0; i < 8; i++) {

    list.innerHTML += `
          <div class="data_result">
          <p><a class="a_data_post">`+ photoArray[i] + `
          </a></p></div>
          `;

  }

});

//SEARCH POST

document.getElementById("post_search").addEventListener("keyup", function () {
  var input, filter, list,i, txtValue;
  input = document.getElementById("post_search");
  filter = input.value.toUpperCase();
  list = document.getElementById("post_section");
  list.innerHTML="";
  var counter =0;
  
  for (i=0;counter<8 && i<postArray.length;i++){
    txtValue=postArray[i].toUpperCase();
    if (txtValue.indexOf(filter) > -1){
      counter+=1;
      list.innerHTML += `
      <div class="data_result">
      <p><a class="a_data_post">`+ postArray[i] + `
      </a></p></div>
      `;

    } 
  }
  
});

// SEARCH ALBUM

document.getElementById("album_search").addEventListener("keyup", function () {
  var input, filter, list,i, txtValue;
  var counter =0;
  input = document.getElementById("album_search");
  filter = input.value.toUpperCase();
  list = document.getElementById("album_section");
  list.innerHTML="";
  
  
  for (i=0;counter<8 && i<albumArray.length;i++){
    txtValue=albumArray[i].toUpperCase();
    if (txtValue.indexOf(filter) > -1){
      counter+=1;
      list.innerHTML += `
      <div class="data_result">
      <p><a class="a_data_post">`+ albumArray[i] + `
      </a></p></div>
      `;

    } 
  }
});


// SEARCH PHOTO

document.getElementById("photo_search").addEventListener("keyup", function () {
  var input, filter, list, i, txtValue;
  input = document.getElementById("photo_search");
  filter = input.value.toUpperCase();
  list = document.getElementById("photo_section");
  list.innerHTML="";
  var counter =0;
  
  for (i=0;counter<8 && i<photoArray.length;i++){
    txtValue=photoArray[i].toUpperCase();
    if (txtValue.indexOf(filter) > -1){
      counter+=1;
      list.innerHTML += `
      <div class="data_result">
      <p><a class="a_data_post">`+ photoArray[i] + `
      </a></p></div>
      `;

    } 
  }
});


