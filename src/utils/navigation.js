export function goTo(anchor){
    var url = location.href;               //Save down the URL without hash.
    location.href = "#" + anchor;                 //Go to the target element.
    history.replaceState(null,null,url);
  }

export function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}