import directoryTree from 'directory-tree'
import path from 'path'

const collectDirs = (children = []) => {
	return children.filter(child => {
		return child.type === 'directory'
	})
}

const collectPaths = (dirs = []) => {
	return dirs.map(dir => dir.path)
}

const createOption = (rootDir: string) => {
	return (dirPath: string) => {
		return {
			label: `  ${dirPath.replace(rootDir, '')}`,
			value: dirPath
		}
	}
}

export default (rootDir, templatesDir) => {
	const tree = directoryTree(rootDir)
	const templatesTree = directoryTree(templatesDir)

	const state = {
		inputOptions: [],
		outputOptions: []
	}

	const getOutputOptions = _tree => {
		const childDirs = collectDirs(_tree.children)
		const dirPaths = collectPaths(childDirs)
		const options = dirPaths.map(createOption(rootDir))
		state.outputOptions = state.outputOptions.concat(options)
		childDirs.forEach(dir => getOutputOptions(dir))
	}

	const getInputOptions = _tree => {
		const childDirs = collectDirs(_tree.children)
		const dirPaths = collectPaths(childDirs)
		const options = dirPaths.map(createOption(templatesDir))
		state.inputOptions = state.inputOptions.concat(options)
	}

	getOutputOptions(tree)
	getInputOptions(templatesTree)

	return state
}
