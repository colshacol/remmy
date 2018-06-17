import meow from 'meow'

const docs = `
	Usage
		remmy
`

// TODO: Make options
const options = {
	flags: {
		yolo: {
			type: 'boolean',
			alias: 'y'
		}
	}
}

export default meow(docs, options)
