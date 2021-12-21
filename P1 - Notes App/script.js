// By Aditya Tripathi

clear.addEventListener('click', clear_notes)
create.addEventListener('click',create_note)


function create_note(){ 

    if (create.value === "Create"){

        noteValue.style.display = "block";
        create.value = "Save";

        document.querySelector(".editor#heading2").innerHTML = "Edit Note"
    }

    else if (create.value === "Save"){
        if (title.value != ""){
        noteValue.style.display = "none";
        create.value = "Create";
        document.querySelector(".editor#heading2").innerHTML = "New Note"
        save_note(title.value, noteValue.value);
        title.value = "";
        noteValue.value = "";
        plot_notes()
        }
    }

}

function save_note(title, content){
    localStorage.setItem(title.replaceAll("_"," "),content)
}

function plot_notes(){
    notesList.innerHTML = ""
    keys = Object.keys(localStorage);
    for(key of keys){
        
        notesList.innerHTML = notesList.innerHTML + 
            `
            <div class="notes">
                            <span class="noteTitle" id=${String(key).replaceAll(" ","_")}>
                                ${String(key).replaceAll("_"," ")}
                            </span>
                            <input type="button" value="Delete" class="delete" id="${String(key).replaceAll(" ","_")}">
                        </div>
            `
    add_del_listener()
    add_edit_listener()
        
    }
}

function clear_notes(){
    if(confirm("Do you really want to DELETE all Notes")){
        localStorage.clear();
        plot_notes()

    }
}

function ret_func(id){
    
    return function(){
        if(confirm(`Are you Sure You Want to delete note "${String(id).replace("_"," ")}"`)){
        localStorage.removeItem(String(id).replaceAll("_"," "));
        plot_notes()
        }
    }
    
}

function add_del_listener(){
    for (obj of document.querySelectorAll(".delete")){
        obj.addEventListener('click',ret_func(obj.id))
    }
}

function ret_func2(id){
    return function(){
        plot_notes()
        title.value = String(id).replaceAll("_"," ");
        
        noteValue.value = localStorage.getItem(String(id).replaceAll("_"," "));
        noteValue.style.display = "block";
        create.value = "Save"
        document.querySelector(".editor#heading2").innerHTML = "Edit Note"
        

        document.getElementById(id).style.backgroundColor = "rgb(0, 177, 201)";
        document.getElementById(id).style.color = "white";

    }
}

function add_edit_listener(){
    for (obj of document.querySelectorAll(".noteTitle")){
        obj.addEventListener('click',ret_func2(obj.id))
    }
}

function magic_notes(){
        plot_notes()
        title.value = "About Magic Notes";
        
        noteValue.value = 
`Created By : Aditya Tripathi
Github     : https://github.com/AddyKoder
YouTube    : https://www.youtube.com/c/AddyKoder

[   Magic Notes is a simple Web App that helps you create and save your notes.
    It uses your Browser's local storage to save your notes. This app is written
    in Only HTML, CSS and vanilla JavaScript. You can see the source code of the   ]
    Web App here : 
    
Source-Code Github :  https://github.com/AddyKoder/DemoWebsite/tree/main/Notes%20App`;

        noteValue.style.display = "block";
        create.value = "Save"
        document.querySelector(".editor#heading2").innerHTML = "Edit Note"

}

plot_notes()


