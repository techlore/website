// TextScramble effect
// Modified version of Justin Windle's Text Scramble Effect. Thank you!
// https://codepen.io/soulwire/pen/mEMPrK
class TextScramble {
	constructor(el) {
		this.el = el
		this.chars = '!\\/[]{}+*^?#________abcdefghijklmnopqrstuvwxyz'
		this.update = this.update.bind(this)
	}

	setText(newText) {
		const oldText = this.el.innerText
		const length = Math.max(oldText.length, newText.length)
		const promise = new Promise((resolve) => this.resolve = resolve)
		this.queue = []
		for (let i = 0; i < length; i++) {
			const from = oldText[i] || ''
			const to = newText[i] || ''
			const start = Math.floor(Math.random() * 40)
			const end = start + Math.floor(Math.random() * 140)
			this.queue.push({from, to, start, end})
		}
		cancelAnimationFrame(this.frameRequest)
		this.frame = 0
		this.update()
		return promise
	}

	update() {
		let output = ''
		let complete = 0
		for (let i = 0, n = this.queue.length; i < n; i++) {
			let {from, to, start, end, char} = this.queue[i]
			if (this.frame >= end) {
				complete++
				output += to
			} else if (this.frame >= start) {
				if (!char || Math.random() < 0.28) {
					char = this.randomChar()
					this.queue[i].char = char
				}
				output += `<span class="js-scrambled-char">${char}</span>`
			} else {
				output += from
			}
		}
		this.el.innerHTML = output
		if (complete === this.queue.length) {
			this.resolve()
		} else {
			this.frameRequest = requestAnimationFrame(this.update)
			this.frame++
		}
	}

	randomChar() {
		return this.chars[Math.floor(Math.random() * this.chars.length)]
	}
}

const textToScramble = document.querySelectorAll('.js-scramble-me')
const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)')

if ((textToScramble.length > 0) && !motionReduced.matches) {
	const fxArray = Array.from(textToScramble).map(el => new TextScramble(el))

	const setTexts = (index) => {
		if (index < fxArray.length) {
			const phrase = textToScramble[index].dataset.text
			fxArray[index].setText(phrase)

			// Generate a random delay
			const randomDelay = Math.floor(Math.random() * 2000)

			// Set a timeout for the next element with a random delay
			setTimeout(() => setTexts(index + 1), randomDelay)

		} else {
			setTimeout(() => setTexts(0), Math.floor(Math.random() * 10000)); // Random delay for restart

		}
	}

	setTexts(0)
}
