const $toggleMenuBar = document.querySelectorAll('.toggle-menu > div');
const $sideBar = document.getElementById('side-bar');

const menu = () =>{
    document.addEventListener('click', (e) => {
        if (e.target.closest('#toggle-menu')){
            $sideBar.classList.toggle('active');
            $toggleMenuBar.forEach(item => item.classList.toggle(`active`));
        }
    })

}
export {menu}