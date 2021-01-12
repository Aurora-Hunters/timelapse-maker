module.exports = function (file) {
  return Object({
    lastModified: parseInt(file.lastModified),
    lastModifiedDate: String(file.lastModifiedDate),
    name: String(file.name),
    path: String(file.path),
    size: parseInt(file.size),
    type: String(file.type)
  });
};
