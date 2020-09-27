import shell from 'shelljs'
import fs from 'fs'

export function prepareFolder(fullPath: string) {
    let pieces: string[] = fullPath.split('/')

    pieces.pop() // let fileName = pieces.pop() 
    let destPath = pieces.join('/')
    if (fs.existsSync(destPath)) {
        return
    }
   shell.mkdir('-p', destPath)
}