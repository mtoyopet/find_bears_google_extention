document.addEventListener('DOMContentLoaded', function () {
  const background = chrome.extension.getBackgroundPage()

  Object.keys(background.bears).forEach(function (url) {
    const div = document.createElement('div')
    div.textContent = `${url}: ${background.bears[url]}`
    document.body.appendChild(div)
  })

  // document.querySelector('button').addEventListener('click', onclick, false)

  // function onclick () {
  //   chrome.tabs.query({ currentWindow: true, active: true }, 
  //   function (tabs) {
  //     chrome.tabs.sendMessage(tabs[0].id, 'hi!!', setCount)
  //   })
  // }
}, false)

// function setCount (res) {
//   const div = document.createElement('div')
//   div.textContent = `${res.count} bears`
//   document.body.appendChild(div)
// }