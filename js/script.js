let to_click_div = document.getElementById("to-click");
let to_reveal_div = document.getElementById('to-reveal');

// console.log(to_click_div);
to_click_div.onclick = my_func;
function my_func(){
    // console.log('I clicked!!');
    // console.log(to_reveal_div);
    // to_reveal_div.classList.remove('hidden');
    to_reveal_div.classList.toggle('hidden');
}