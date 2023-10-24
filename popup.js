document.getElementById('replaceImages').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      let currentTab = tabs[0];
      if (chrome.scripting) {
        chrome.scripting.executeScript({
          target: {tabId: currentTab.id},
          func: function() {
            let images = document.getElementsByTagName('img');
            for (let img of images) {
              let div = document.createElement('div');
              div.textContent = 'Hello';
              img.replaceWith(div);
            }
          },
          args: []
        });
      } else {
        console.error("chrome.scripting API is not available.");
      }
    });
  });
  