import { resolve } from 'node:path'
import { execa } from 'execa'
import fg from 'fast-glob'
import prompts from 'prompts'

const dir = resolve(__dirname, '../packages')

async function main() {
  const files = await fg('*', {
    onlyDirectories: true,
    cwd: dir,
    ignore: [
      '_*',
      'dist',
      'node_modules',
    ],
  })
  files.sort()
  const promptsProps = {
    type: 'select',
    name: 'project',
    message: '请选要运行的project',
    choices: files.map((item) => {
      return {
        title: item,
        value: item,
      }
    }),
    initial: 0,
  }

  const { project } = await prompts(promptsProps)
  const microMainDirPath = resolve(dir, project)
  const microDirs = await fg('*', {
    onlyDirectories: true,
    cwd: microMainDirPath,
    ignore: [
      '_*',
      'dist',
      'node_modules',
    ],
  })

  for (const dir of microDirs) {
    const targetDir = resolve(microMainDirPath, dir)
    process.env.QIANKUN = 'true'
    execa('pnpm', ['-C', targetDir, 'dev'], {
      stdio: 'inherit',
    })
  }
}

main()
