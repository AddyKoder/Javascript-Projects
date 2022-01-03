function get(selector) {
    return document.querySelector(selector)
}

function send_request() {
    console.log('send_request');
    
}

function add_query_entry() {
    console.log('add_query_entry');
    
}

function add_header_entry() {
    console.log('add_header_entry');
    
}

function change_method() {
    console.log('change_method');
    
}

function switch_tab(tab) {
    if(tab == 'q'){
        
        get('#q_nav').style.borderColor = 'rgb(255, 108, 55)';
        get('#b_nav').style.borderCidth = 'white';
        get('#h_nav').style.borderColor = 'white';

        get('#queries').style.display = 'block';
        get('#headers').style.display = 'none';
        get('#body').style.display = 'none';

    }    

    else if(tab == 'b'){

        get('#b_nav').style.borderColor = 'rgb(255, 108, 55)';
        get('#q_nav').style.borderColor = 'white';
        get('#h_nav').style.borderColor = 'white';
        
        get('#body').style.display = 'block';
        get('#headers').style.display = 'none';
        get('#queries').style.display = 'none';

    }

    else if(tab == 'h'){

        get('#h_nav').style.borderColor = 'rgb(255, 108, 55)';
        get('#b_nav').style.borderColor = 'white';
        get('#q_nav').style.borderColor = 'white';

        get('#headers').style.display = 'block';
        get('#queries').style.display = 'none';
        get('#body').style.display = 'none';

    }
    
}