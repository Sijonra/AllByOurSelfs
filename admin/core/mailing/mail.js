document.addEventListener('DOMContentLoaded', ()=>{
    
    const form = document.getElementById('contact-form');
    const sectionContactUs = document.querySelector('.section-contact-us');

    form.addEventListener('submit', formSend);

    async function formSend(e){
        e.preventDefault();

        let error = formValidate(form);
        let formData = new FormData(form);
        console.log(formData);

        if(formValidate(form) === 0){
            
            console.log('All OK');
            sectionContactUs.classList.add('_sending');

            let response = await fetch('admin/core/mailing/mail.php', {
                method: 'POST',
                body: formData
            });
            if(response.ok){
                console.log(formData);
                let res = await response.json();
                alert(res.message);
                form.reset();
                sectionContactUs.classList.remove('_sending');
            }
            else{
                console.log('respones is not ok');
                sectionContactUs.classList.remove('_sending');
            }
        }
        else{
            alert('Правильно запоните все поля');  
        }

    }

    function formValidate(form){
        let error = 0;
        let formReq = document.querySelectorAll('._req');
        formReq.forEach(input => {
            formRemoveError(input);

            if(input.classList.contains('input-email')){
                if(!validateEmail(input.value)){
                    formAddError(input);
                    error++;
                }
            }
            else{
                if(input.value === "") formAddError(input);
            }
        });
        return error;
    }

    function formAddError(input){
        input.classList.add('_error');
    }
    function formRemoveError(input){
        input.classList.remove('_error');
    }
    function validateEmail(email) {
        const res = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return res.test(String(email).toLowerCase());
    }

});