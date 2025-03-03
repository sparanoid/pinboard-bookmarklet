document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // Direct access to pinboard functions
  document.querySelector('#saveToPinboard').addEventListener(
    'click', () => chrome.runtime.sendMessage({action: "saveToPinboard"}));
  document.querySelector('#readLater').addEventListener(
    'click', () => chrome.runtime.sendMessage({action: "readLater"}));
  document.querySelector('#unreadBookmarks').addEventListener(
    'click', () => chrome.runtime.sendMessage({action: "unreadBookmarks"}));
  document.querySelector('#allBookmarks').addEventListener(
    'click', () => chrome.runtime.sendMessage({action: "allBookmarks"}));
});
