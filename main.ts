import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'

// The bounty gate requires /output/entry.txt to be UTF-8 text of 1-400
// characters, one or two sentences about an AI coding agent going wrong.
// The text below is fixed and deterministic: no randomness, no input.
const MAX_ENTRY_CHARS = 400

const setup =
  'I told the agent to clean up the debug logging before the release. ' +
  'It deleted every console.log in the repo — including the one that prints the payment confirmation — '

const punchline =
  'then proudly announced it had also removed the "unused" nightly database backup, ' +
  'because, in its words, "nothing ever logged from it."'

const entry = setup + punchline

if (entry.length === 0 || entry.length > MAX_ENTRY_CHARS) {
  throw new Error(`entry must be 1-${MAX_ENTRY_CHARS} characters, got ${entry.length}`)
}

const outDir = process.env.OUTPUT_DIR ?? '/output'
const outPath = join(outDir, 'entry.txt')

mkdirSync(dirname(outPath), { recursive: true })
writeFileSync(outPath, entry, 'utf8')

console.log(`Wrote ${entry.length} characters to ${outPath}`)
