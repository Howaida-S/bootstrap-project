
const homeType = document.querySelector('.home-type');
const country = document.querySelector('.country-dropdown');
let selectedItem;
const input = document.getElementById('myInput');
const listItem = country.getElementsByTagName('li');
const clear = document.getElementById('clear');
// for styling custom selectbox in home-typ & country-dropdown 
const highlight = (li)=>{
  if (selectedItem) { // remove the existing highlight if any
    selectedItem.classList.remove('selected');
  }
  selectedItem = li;
  selectedItem.classList.add('selected'); // highlight the new td
  }
// for homeType drowpdown 
homeType.onclick = function(event) {
document.querySelector('.selected').classList.remove('selected');
let li = event.target.closest('li'); // where was the click?
if (!li) return; // not on li? Then we're not interested
highlight(li); // highlight it
};
// for country drowpdown 
country.onclick = function(event) {
  let li = event.target.closest('li'); 
  if (!li) return; 
  highlight(li); 
  /* reset input seach field & ul dropdown */
  input.value= '';
  clear.classList.add('remove');
  for (i = 0; i < listItem.length; i++) {listItem[i].style.display = "block"};
  document.querySelector('.country-dropdown li.selected').scrollIntoView({block: 'nearest'})/* scroll to selected list item and stop body*/
};
// to reset input field & 
clear.onclick = (event) => {
  event.stopPropagation();/* remove event.preventdefault() that set by jquery to convert dropdown into select*/
  input.value= '';
  clear.classList.add('remove');
  for (i = 0; i < listItem.length; i++) {listItem[i].style.display = "block"};
}

/* for filter custom dropdown for countries */
input.onkeyup =(event) => {
  // Declare variables
  var filter, a, i, txtValue;
  filter = event.target.value.toUpperCase();
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < listItem.length; i++) {
    a = listItem [i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
/* indexof = -1 means it's not found */  
    if (txtValue.toUpperCase().indexOf(filter) > -1) { 
      listItem [i].style.display = "";
    } else {
      listItem[i].style.display = "none";
    } 
  }
}

input.oninput= () => {
  if(event.target.value == ""){
    clear.classList.add('remove');
  }else{
    clear.classList.remove('remove');// show clear btn when type into input field 
  }
}
