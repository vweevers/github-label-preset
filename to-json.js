'use strict'

const labels = require('./labels')
const fs = require('fs')

fs.writeFileSync('labels.json', JSON.stringify(labels, null, 2))

const tpl = function (text, bgColor, fgColor) {
  return `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="200" height="32">
    <clipPath id="a">
      <rect width="200" height="32" rx="6" fill="#fff"/>
    </clipPath>
    <g clip-path="url(#a)">
      <path fill="#${bgColor}" d="M0 0h200v32H0z"/>
    </g>
    <g
      fill="#${fgColor}"
      font-family="Helvetica, arial, nimbussansl, liberationsans, freesans, clean, sans-serif"
      font-size="16"
      font-weight="600"
      text-anchor="middle"
      >
      <text x="100" y="21">${text}</text>
    </g>
  </svg>`
}

for (const k in labels.groups) {
  const group = labels.groups[k]

  for (const label of group.labels) {
    const svg = tpl(label.name, label.color, label.invert ? 'fff' : '000')
    const id = k.replace(/_/g, '-') + '-' + label.name.replace(/ /g, '-')
    const fp = `svg/${id}.svg`

    fs.writeFileSync(fp, svg)
    console.log(`![${id}](${fp})`)
  }

  console.log()
}
