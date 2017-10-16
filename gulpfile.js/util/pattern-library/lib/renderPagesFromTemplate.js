var path = require('path')

var relativeUrl = function (basedir, filePath) {
  return `/${path.relative(basedir, filePath)}`
}

var renderPagesFromTemplate = function (files, compiledTemplate, baseDirectory) {
  var data = {}
  var homepage = 'about'

  baseDirectory = baseDirectory || ''

  data.sections = files
    .filter((file) => file.type === 'section')
    .map((file) => ({
      url: relativeUrl(baseDirectory, file.relative),
      title: path.relative(baseDirectory, path.parse(file.relative).dir) || homepage
    }))

  return files
    .map((file) => {
      var currentSection = homepage

      data.sections.forEach((section) => {
        if (file.relative.includes(section.title)) {
          currentSection = section.title
        }
      })

      data.nav = files
        .filter((file) => file.relative.includes(currentSection))
        .filter((file) => file.type === 'page')
        .map((file) => ({
          url: relativeUrl(baseDirectory, file.relative),
          title: path.parse(path.parse(file.relative).dir).name
        }))

      data.documentation = file.contents.toString()
      data.homepage = currentSection === homepage

      file.contents = Buffer.from(compiledTemplate(data))

      return file
    })
}

module.exports = renderPagesFromTemplate
