// Converts the floral artwork in design/uploads/ to WebP in src/assets/flowers/.
// Run with `npm run images` after adding or replacing images in design/uploads/.
import { mkdir, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = path.resolve(import.meta.dirname, '..')
const srcDir = path.join(root, 'design', 'uploads')
const outDir = path.join(root, 'src', 'assets', 'flowers')

// The "ChatGPT Image …" files and bouquet-src.png are duplicates of floral-*.
const images = [
  'soft-1',
  'soft-2',
  'soft-3',
  'soft-4',
  'soft-5',
  'floral-1',
  'floral-2',
  'floral-3',
  'floral-4',
  'floral-5',
  'bouquet',
  'flowers_big',
  'flowers_small',
]

const kb = (bytes) => `${Math.round(bytes / 1024)} kB`

await mkdir(outDir, { recursive: true })

for (const name of images) {
  const input = path.join(srcDir, `${name}.png`)
  const output = path.join(outDir, `${name.replace('_', '-')}.webp`)
  await sharp(input).webp({ quality: 80, alphaQuality: 90 }).toFile(output)
  const [before, after] = await Promise.all([stat(input), stat(output)])
  console.log(`${name}: ${kb(before.size)} -> ${kb(after.size)}`)
}
