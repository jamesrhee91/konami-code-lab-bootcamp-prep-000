const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  const body = document.querySelector('body')
  var i = 0

  body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which)

    if (key === code[i]) {
        i++
        if (i === code.length-1) {
          alert("Cheat enabled.")
          i = 0
        }
      }
    else
      {i = 0}
  })
}
