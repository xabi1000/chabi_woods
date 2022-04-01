const $toggleMenu = document.getElementById('toggle-menu');
const $toggleMenuBar = document.querySelectorAll('.toggle-menu > div');
const $sideBar = document.getElementById('side-bar');

const menu = () => {
	document.addEventListener('click', (e) => {
		if (e.target.closest('#toggle-menu')) {
			$toggleMenu.classList.toggle('active');
			$sideBar.classList.toggle('active');
		}
	});
};
export { menu };
