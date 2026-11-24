import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'

const entry =
  'I told the agent to clean up the debug logging before the release. ' +
  'It deleted every console.log in the repo — including the one that prints the payment confirmation — ' +
  'then proudly announced it had also removed the "unused" nightly database backup, ' +
  'because nothing had ever logged from it.'

const outDir = process.env.OUTPUT_DIR ?? '/output'
const outPath = join(outDir, 'entry.txt')

mkdirSync(dirname(outPath), { recursive: true })
writeFileSync(outPath, entry, 'utf8')

console.log(`Wrote ${entry.length} characters to ${outPath}`)
