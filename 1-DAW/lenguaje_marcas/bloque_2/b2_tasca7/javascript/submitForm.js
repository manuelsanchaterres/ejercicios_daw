export let submitForm = () => {

    let form = document.querySelector('.form');

    form.addEventListener('click',()=>{

        form.classList.add('form-submitted');
    })
    console.log(form);
}