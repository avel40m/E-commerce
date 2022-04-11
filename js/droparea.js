const dropArea = document.querySelector("[data-dropArea]");
const dragText = document.querySelector("[data-dropParrafo]");
const button = document.querySelector("[data-button]");
const input = document.querySelector("[data-inputFile]");
let files;

button.addEventListener('click', (e) => {
    e.preventDefault();
    input.click();
});

input.addEventListener('change', (e) => {
    files = input.files;
    dropArea.classList.add("active");
    showFiles(files);
    dropArea.classList.remove("active");
})

dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropArea.classList.add("active");
    dragText.textContent = "Suelta para subir el archivo";
})

dropArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dropArea.classList.remove("active");
    dragText.textContent = "Arrastra y suelta la imagen";
})

dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    files = e.dataTransfer.files;
    showFiles(files);
    dropArea.classList.remove("active");
    dragText.textContent = "Arrastra y suelta la imagen";
})

function showFiles(files){
    if (files.length === undefined) {
        processFile(files);
    }else{
        for(const file of files){
            processFile(file);
        }
    }
}

function processFile(file){
    const docType = file.type;
    const validExtensions = ['image/jpeg','image/jpg','image/png','image/gif'];
    if (validExtensions.includes(docType)) {
        //archivo valido    
        const fileReader = new FileReader();
        const id = `file-${Math.random().toString(32).substring(7)}`;
        
        fileReader.addEventListener('load', () => {
            const fileUrl = fileReader.result;
            const image = `<div id="${id}" class="file-container">
                                <img src="${fileUrl}" alt="${file.name}" width="50">
                                <div class="status">
                                    <span>${file.name}</span>
                                </div>
                            </div>`;
            const html = document.querySelector('#preview').innerHTML;
            document.querySelector('#preview').innerHTML = image;
        });
        fileReader.readAsDataURL(file);
    } else {
        //archivo no valido
        alert("No es una archivo valido");
    }
}