// TODO: Individual files compilation!

// Theme Switcher
//! Thanks to https://dev.to/whitep4nth3r/the-best-lightdark-mode-theme-toggle-in-javascript-368f
function settingsThemeHandler({localStorageTheme, systemSettingDark}) {
	if (localStorageTheme !== null) {
		return localStorageTheme
	}

	if (systemSettingDark.matches) {
		return "dark"
	}

	return "light"
}

function updateButton({buttonEl, isDark}) {
	const newCta = isDark ? "Change to light theme" : "Change to dark theme"
	const themeStatus = isDark ? "js-dark-is-active" : "js-light-is-active"
	buttonEl.setAttribute("aria-label", newCta)
	buttonEl.setAttribute("data-active-theme", themeStatus)
}

function updateThemeOnHtmlEl({theme}) {
	document.querySelector("html").setAttribute("data-theme", theme)
}

const buttonSwitcher = document.querySelector("[data-theme-toggle]")
const localStorageTheme = localStorage.getItem("theme")
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)")

let currentThemeSetting = settingsThemeHandler({localStorageTheme, systemSettingDark})

updateButton({buttonEl: buttonSwitcher, isDark: currentThemeSetting === "dark"})
updateThemeOnHtmlEl({theme: currentThemeSetting})

buttonSwitcher.addEventListener("click", (e) => {
	const newTheme = currentThemeSetting === "dark" ? "light" : "dark"

	localStorage.setItem("theme", newTheme)
	updateButton({buttonEl: buttonSwitcher, isDark: newTheme === "dark"})
	updateThemeOnHtmlEl({theme: newTheme})

	currentThemeSetting = newTheme
})
