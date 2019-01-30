function demo(callback = () => {}) {
	callback('hello client')
}

demo((text) => {
	console.log(text)
})
