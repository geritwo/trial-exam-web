// Wrote loading while request pending

var counter = 0;

var form = document.querySelector('form');
var button = form.submit;
button.addEventListener('click', postTextToDecypher);

function postTextToDecypher () {
  var text = form.text.value;
  var shift = form.shift.value;

  var requestObj = {
    "shift": shift,
    "text": text
  }

  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/decode', true);

  xhr.setRequestHeader("Content-type", "application/json");

  xhr.send(JSON.stringify(requestObj));
    xhr.onreadystatechange = getDeciphered;

    function getDeciphered(rsp) {
      if (xhr.readyState === XMLHttpRequest.DONE) {

        console.log(JSON.parse(xhr.response))
        toggleJC(); // NOTE: for debug
      };
    };
  };


// Toggle JC image
var jcHimSelf = document.getElementById('jc');
jcHimSelf.addEventListener('click', toggleJC);

var jcImages = {
  0 : "./images/JC_thumbsup.png",
  1 : "./images/JC_thumbsdown.png"
}

function toggleJC() {
  counter++;
  var imgID = counter % 2;
  console.log(imgID)
  jcHimSelf.src = jcImages[imgID];
  return counter;
};
