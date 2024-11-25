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
const toggleButton = document.getElementById('toggle') as HTMLButtonElement;
const visibility = document.getElementById('skills') as HTMLFormElement;


toggleButton.addEventListener('click', () => {

    if (visibility.style.display === 'none') {
        visibility.style.display = 'block'; 
    } else {
        visibility.style.display = 'none';
    }
});

window.onload = function () {
    let toggleButton2 = document.getElementById('toggle2') as HTMLButtonElement
    let visibility2 = document.getElementById('experience') as HTMLFormElement
    toggleButton2.addEventListener('click', function () {
  


        if (visibility2.style.display === 'none') {
            visibility2.style.display = 'block';
        }
        else {
            visibility2.style.display = 'none';
        }
    });
};




const toggleButton3 = document.getElementById('toggle3') as HTMLButtonElement;
const visibility3 = document.getElementById('education') as HTMLFormElement;


toggleButton3.addEventListener('click', () => {

    if (visibility3.style.display === 'none') {
        visibility3.style.display = 'block'; 
    } else {
        visibility3.style.display = 'none';
    }
});


