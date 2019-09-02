//Show Search value in input field 
function getUrlParams() {
  var paramMap = {};
  if (location.search.length == 0) {
    return paramMap;}
  var parts = location.search.substring(1).split("&");
  for (var i = 0; i < parts.length; i ++) {
    var component = parts[i].split("=");
    paramMap [decodeURIComponent(component[0])] = decodeURIComponent(component[1]);}
  return paramMap;}
var params = getUrlParams();
var xxparams = params.q;
var replaced = xxparams.replace('+',' ');
document.getElementById('myTextFieldId').value = replaced;
</script>

//Youtube player
document.addEventListener("DOMContentLoaded",function(){var div,n,v=document.getElementsByClassName("youtube-player");for(n=0;n<v.length;n++){div=document.createElement("div");div.setAttribute("data-id",v[n].dataset.id);div.innerHTML=labnolThumb(v[n].dataset.id);div.onclick=labnolIframe;v[n].appendChild(div)}});function labnolThumb(id){var thumb='<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',play='<div class="play"></div>';return thumb.replace("ID",id)+play}
function labnolIframe(){var iframe=document.createElement("iframe");var embed="https://www.youtube.com/embed/ID?controls=0&autoplay=1&mute=1&rel=0";iframe.setAttribute("src",embed.replace("ID",this.dataset.id));iframe.setAttribute("frameborder","0");iframe.setAttribute("allowfullscreen","1");this.parentNode.replaceChild(iframe,this)}
</script>

//Tabs
function openCity(evt,cityName){var i,tabcontent,tablinks;tabcontent=document.getElementsByClassName("v5-tabcontent");for(i=0;i<tabcontent.length;i++){tabcontent[i].style.display="none"}
tablinks=document.getElementsByClassName("tablinks");for(i=0;i<tablinks.length;i++){tablinks[i].className=tablinks[i].className.replace(" active","")}
document.getElementById(cityName).style.display="block";evt.currentTarget.className+=" active"}
document.getElementById("defaultOpen").click()

