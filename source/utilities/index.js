import path from 'path'
import dir from 'node-dir'
import util from 'util'

export const trimPathToRootDir = dirPath => {
	const fixedPath = dirPath.replace(process.cwd(), '')
	return fixedPath.startsWith('/') ? `.${fixedPath}` : `./${fixedPath}`
}

export const getDirectoryNames = (pathOfDir, recursive = false) => {
	const options = { sync: true, recursive }
	return dir.files(getAbsolutePath(pathOfDir), 'dir', ds => ds, options)
}

export const getMatchingFileNames = (dirPath, match) => {
	return dir
		.files(dirPath, 'file', d => d, { sync: true, recursive: true })
		.filter(filePath => {
			return filePath.includes(match)
		})
}

export const getAbsolutePath = pathOfDir => {
	return path.isAbsolute(pathOfDir)
		? pathOfDir
		: path.resolve(process.cwd(), pathOfDir)
}

export const firstObject = (array: any[]): Object | void => {
	return array.find(item => {
		return typeof item === 'object'
	})
}

export const lastObject = (array: any[]): Object | void => {
	return firstObject(array.reverse())
}
