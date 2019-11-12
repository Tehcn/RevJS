/* 
  RevJS is an OPEN SOURCE JavaScript Library
  If you're a js programmer you should take some time to review my code, you might learn something from it!
  Notice: This JavaScript Library Uses jQuery and simplifies it so credit to jquery
  Add jQuery as src in script tag to make it work for this version ex: <script src = https://code.jquery.com/jquery-3.1.1.js>
  In a later version I will update probably at least :)
*/
//Start RevJS

//Replaces console.log
function log(x) {
	console.log(x);
}
//Writes Text To An Element
function write(element, x) {
	$(element).html(x);
}
//Appends Text To An Element
function append(element, x) {
	$(element).append(x);
}
//Prepends Text To An Element
function prepend(element, x) {
	$(element).prepend(x);
}
