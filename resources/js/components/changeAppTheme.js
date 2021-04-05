export default function changeAppTheme() {
    document.querySelector(".dark").addEventListener('click', event => {
        darkTheme();
    });
    document.querySelector(".light").addEventListener('click', event => {
        lightTheme();
    });
    document.querySelector(".default").addEventListener('click', event => {
        defaultTheme();
    });
}

function darkTheme() {
    document.querySelector(".header-content").classList.remove("defaultThemeHeader");
    document.querySelector(".body-content").classList.remove("lightThemeBody");
    document.querySelector(".header-content").classList.remove("lightThemeHead");
    document.querySelector(".body-content").classList.add("darkThemeBody");
    document.querySelector(".header-content").classList.add("darkThemeHead");
}

function lightTheme() {
    document.querySelector(".header-content").classList.remove("defaultThemeHeader");
    document.querySelector(".body-content").classList.remove("darkThemeBody");
    document.querySelector(".header-content").classList.remove("darkThemeHead");
    document.querySelector(".body-content").classList.add("lightThemeBody");
    document.querySelector(".header-content").classList.add("lightThemeHead");
}

function defaultTheme() {
    document.querySelector(".body-content").classList.remove("darkThemeBody");
    document.querySelector(".header-content").classList.remove("darkThemeHead");
    document.querySelector(".body-content").classList.remove("lightThemeBody");
    document.querySelector(".header-content").classList.remove("lightThemeHead");
    document.querySelector(".header-content").classList.add("defaultThemeHeader");
}