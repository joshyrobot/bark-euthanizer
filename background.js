let blocking = true

chrome.webRequest.onBeforeRequest.addListener(
  () => ({ cancel: blocking }),
  { urls: ['https://www.bark.us/api/*'] },
  ['blocking']
)

chrome.browserAction.onClicked.addListener(() => {
  blocking = !blocking
  chrome.browserAction.setIcon({ path: `icons/icon_${blocking ? 'on' : 'off'}.png` })
})
