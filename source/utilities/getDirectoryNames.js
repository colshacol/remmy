import dir from 'node-dir'
import util from 'util'
import path from 'path'

const FILES_OPTIONS = { sync: true, recursive: false }

const getDirectoryNames = (pathOfDir, recursive) => {
	const options = { sync: true, recursive: !!recursive }
	return dir.files(getAbsolutePath(pathOfDir), 'dir', ds => ds, options)
}

const getAbsolutePath = pathOfDir => {
	return path.isAbsolute(pathOfDir)
		? pathOfDir
		: path.resolve(process.cwd(), pathOfDir)
}

export default getDirectoryNames
