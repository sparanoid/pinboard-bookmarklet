// Import needed modules
import './pinboard.js';

// Listen for commands
chrome.commands.onCommand.addListener(function (command) {
  'use strict';

  switch (command) {
    case 'save_to_pinboard':
      pinboard.saveToPinboard();
      break;
    case 'read_later':
      pinboard.readLater();
      break;
    case 'unread_bookmarks':
      pinboard.unreadBookmarks();
      break;
    case 'all_bookmarks':
      pinboard.allBookmarks();
      break;
  }
});

// Listen for tab updates
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  'use strict';
  if (changeInfo.status === 'loading') {
    if (tab.url === 'https://pinboard.in/add') {
      chrome.tabs.remove(tabId);
    }
  }
});

// Listen for messages from popup
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.action === "saveToPinboard") {
      pinboard.saveToPinboard();
    } else if (request.action === "readLater") {
      pinboard.readLater();
    } else if (request.action === "unreadBookmarks") {
      pinboard.unreadBookmarks();
    } else if (request.action === "allBookmarks") {
      pinboard.allBookmarks();
    }
    return true;
  }
);
