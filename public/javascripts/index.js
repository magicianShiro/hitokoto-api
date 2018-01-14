let declareArr = document.querySelectorAll('.introduce')
window.addEventListener('DOMContentLoaded', function () {
  document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
      declareArr.forEach(element => {
        element.classList.add('active')
      })
    }
  }
})
