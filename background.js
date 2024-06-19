const emojis = ["😀", "😂", "😅", "😍", "🤔", "🙄", "😎", "🥳", "🤯", "🤠", "😷", "🤡", "👻", "💀", "👽", "👾", "🤖", "🎃", "😺", "🙈", "🐶", "🐱", "🦊", "🐸"];

chrome.action.onClicked.addListener((tab) => {
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: setCursor,
    args: [randomEmoji]
  });
});

function setCursor(emoji) {
  document.body.style.cursor = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><text y="32" font-size="32">${emoji}</text></svg>') 16 16, auto`;
}
