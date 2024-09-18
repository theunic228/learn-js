const inputEl = document.getElementById('title');
const createBtn = document.getElementById('create');
const listEl = document.getElementById('list');

// const notes = ['tosi', 'bosi'];

// function render (){
//     // for(let i = 0; i < notes.length; i++){
//     //     listEl.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]));
//     // }
//
//     for(let note of notes){
//         listEl.insertAdjacentHTML('beforeend', getNoteTemplate(note));
//     }
// }
// render()

// createBtn.onclick = function () {
//     if(inputEl.value == '') {
//         return;
//     }
//
//     // listEl.innerHTML = `
//     //     <li
//     //       class="list-group-item d-flex justify-content-between align-items-center">
//     //       <span>${inputEl.value}</span>
//     //       <span>
//     //         <span class="btn btn-small btn-success">&check;</span>
//     //         <span class="btn btn-small btn-danger">&times;</span>
//     //       </span>
//     //     </li>`;
//
//     listEl.insertAdjacentHTML('beforeend', getNoteTemplate(inputEl.value))
//     inputEl.value = '';
// }

// function getNoteTemplate(title) {
//     return `<li
//           class="list-group-item d-flex justify-content-between align-items-center"
//         >
//           <span>${title}</span>
//           <span>
//             <span class="btn btn-small btn-success">&check;</span>
//             <span class="btn btn-small btn-danger">&times;</span>
//           </span>
//         </li>`
// }

const notes = [
    {
        title: 'tosi',
        isCompleted: true,
    },
    {
        title: 'bosi',
        isCompleted: false,
    },
]

function render (){
    listEl.innerHTML = '';
    if(notes.length == 0){
        listEl.innerHTML = '<p>Нет элементов.</p>';
    }
    for(let i = 0; i < notes.length; i++){
        listEl.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i));
    }
}
render()

listEl.onclick = function(event){
    if(event.target.dataset.index){
        const index = Number(event.target.dataset.index);
        const type = event.target.dataset.type;

        if(type == 'toggle'){
            notes[index].isCompleted = !notes[index].isCompleted;
        } else if (type == 'remove'){
            notes.splice(index, 1);
        }
        render()
    }
}

function getNoteTemplate(note, index) {
    return `<li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span class="${note.isCompleted ? 'text-decoration-line-through' : ''}">${note.title}</span>
          <span>
            <span class="btn btn-small btn-${note.isCompleted ? 'warning' : 'success'} " data-index="${index}" data-type="toggle">&check;</span>
            <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
          </span>
        </li>`
}

createBtn.onclick = function () {
    if(inputEl.value == '') {
        return;
    }

    const newNote = {
        title: inputEl.value,
        isCompleted: false,
    }

    notes.push(newNote);
    render();

    inputEl.value = '';
}