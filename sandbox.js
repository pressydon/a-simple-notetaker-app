// const openModalButtons = document.querySelectorAll('[data-modal-target]');
// const closeModalButtons = document.querySelectorAll('[data-close-button]');
// const overlay = document.getElementById('overlay');


// openModalButtons.forEach(button=>{
//   button.addEventListener('click',()=>{
//   const modal = document.getElementById('modal');
  
//   openModal(modal);
  
//   });
// });

// closeModalButtons.forEach(button=>{
//   button.addEventListener('click',()=>{
//   const modal = document.querySelector('.close-button')
//   closeModal(modal);
//   console.log(modal)
//   });
// });



// function openModal(modal){
//   if(modal == null) return
//   modal.classList.add('active')
//   overlay.classList.add('active')
// };
// function closeModal(modal){
//   if(modal== null) return
//   modal.classList.remove('active')
//   overlay.classList.remove('active')
// }


const form = document.querySelector('.note-form'),
      table = document.querySelector('table'),
      viewMore = document.querySelectorAll('.view-more-button');
let overlay = document.getElementById('overlay');
let changePara = document.querySelector('.modal-body');
const close = document.querySelector('.close-button');
let note = document.querySelector('.note');





form.addEventListener('submit', updateUI);

function updateUI(e){
    e.preventDefault();
    const noteValue = form.note.value.trim();
    // console.log(noteValue)
    if(noteValue.length){
        noteOutput();
        form.reset();
        
    }
 

}
function noteOutput(){

    
    const noteValue = form.note.value.trim();
    table.innerHTML += `
    <tr>
    <td class="delete">&times;</td>
    <td>Note <span class="note">${table.childElementCount}</span></td>
    <td class="para"><div> ${noteValue} </div></td>
    <td> <button class="view-more-button">View Details</button></td>
  </tr>
    `;
}
const viewMoreButtons = Array.from(viewMore);

// console.log(viewMore,viewMoreButtons)
table.addEventListener('click', function(e){
    if(e.target.classList.contains('view-more-button')){

        overlay.style.display = 'flex';
    
        let paragraph= e.target.parentElement.previousElementSibling.children;
        for(let i =0; i < paragraph.length; i++){
            changePara.textContent = paragraph[0].textContent;
        }
        note.textContent = table.childElementCount - 1;
        // console.log(e.target.classList.contains('para'))
    }
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});
close.addEventListener('click',()=>{
    overlay.style.display = 'none';
})
