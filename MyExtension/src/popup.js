console.log("Hello World!!");

browser.runtime.sendNativeMessage(
  "group.co.uk.vouchercodes.playground",
  "Hello from web popup runtime"
);
