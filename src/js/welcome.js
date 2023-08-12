document.addEventListener('DOMContentLoaded', () => {

    const passwordInput = document.getElementById('passwordInput'),
          eye = document.querySelector('.welcome-form__field-eye'),
          controlInputs = document.querySelectorAll('.control-input');

    function isEmpty(str) {
        if (str.trim() == '') 
            return true;
            
        return false;
    }

    eye.addEventListener('click', function(){
        this.classList.toggle('active');
        passwordInput.type = 'password' == passwordInput.type ? 'text' : 'password';
    });

    controlInputs.forEach(function(item) {
        const input = item.querySelector('input'),
           controls = item.querySelector('.welcome-form__field-control');

        input.addEventListener('focusout', (e) => {
            if(e.target.type === 'email') {
                controls.classList.remove('false', 'true');
                let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'),
                classAdd = regex.test(e.target.value) ? 'true' : 'false';
                controls.classList.add(classAdd);
            } else {
                controls.classList.remove('false', 'true');
               const classAdd = !isEmpty(e.target.value) ? 'true' : 'false';
               controls.classList.add(classAdd);
            }
        });
    });
});