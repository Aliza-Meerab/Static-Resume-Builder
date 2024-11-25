// window.onload = function () {
//  let toggleButton = document.getElementById('toggle3') as HTMLButtonElement
//  let visibility1 = document.getElementById('education') as HTMLFormElement
//   toggleButton.addEventListener('click', function () {
//       if (visibility1.style.display === 'none') {
//           visibility1.style.display = 'block';
//       }
//       else {
//           visibility1.style.display = 'none';
//       }
//   });
// }
// document.getElementById('toggle')?.addEventListener('click', () => {
//     const visibility1 = document.getElementById('skills');
//     if (visibility1) {
//         visibility1.classList.toggle('hidden');
//     }
// });
var toggleButton = document.getElementById('toggle');
var visibility = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    if (visibility.style.display === 'none') {
        visibility.style.display = 'block';
    }
    else {
        visibility.style.display = 'none';
    }
});
window.onload = function () {
    var toggleButton2 = document.getElementById('toggle2');
    var visibility2 = document.getElementById('experience');
    toggleButton2.addEventListener('click', function () {
        if (visibility2.style.display === 'none') {
            visibility2.style.display = 'block';
        }
        else {
            visibility2.style.display = 'none';
        }
    });
};
var toggleButton3 = document.getElementById('toggle3');
var visibility3 = document.getElementById('education');
toggleButton3.addEventListener('click', function () {
    if (visibility3.style.display === 'none') {
        visibility3.style.display = 'block';
    }
    else {
        visibility3.style.display = 'none';
    }
});
