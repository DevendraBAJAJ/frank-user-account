// function show(dynamic_class, dynamic_tr_class) {
//     const hidden = document.getElementsByClassName(dynamic_class);
//     Array.from(hidden).forEach((x) => {
//         if (x.style.display === "none") {
//             x.style.display = "block";
//         } else {
//             x.style.display = "none";
//         }
//     })
//
//     const tr = document.getElementById(dynamic_tr_class);
//     if (tr.style.verticalAlign === "middle") {
//         tr.style.verticalAlign = "top";
//     } else {
//         tr.style.verticalAlign = "middle";
//     }
// }

function showSearch() {
    const hidden = document.getElementById('searchForm');
    if (hidden.style.display === "none") {
        hidden.style.display = "block";
    } else {
        hidden.style.display = "none";
    }
}

function backdrop() {
    const hidden = document.getElementById('backdrop_div');
    hidden.classList.add("backdrop");
    hidden.style.display = "block";
}


function removeBackdrop() {
    const hidden = document.getElementById('backdrop_div');
    hidden.classList.remove("backdrop");
}

document.getElementById('dropdown-export').addEventListener('click', function (e) { //say this is an anchor
    //do something
    e.stopPropagation();
});
