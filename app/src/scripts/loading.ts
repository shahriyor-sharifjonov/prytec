function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 3000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'flex' : 'none';
}

onReady(function() {
  setVisible('.page', true);
  setVisible('#loading', false);
});

window.addEventListener("load", function(event) {
  console.log("All resources finished loading!");
});