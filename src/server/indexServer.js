function demo(callback = () => {}) {
	callback('hello server')
}

demo((text) => {
	console.log(text)
})