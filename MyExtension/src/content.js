browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
  console.log("Received response: ", response);
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Received request: ", request);
});

browser.runtime.sendNativeMessage(
  "group.co.uk.vouchercodes.playground",
  "Hello from web content runtime"
);
