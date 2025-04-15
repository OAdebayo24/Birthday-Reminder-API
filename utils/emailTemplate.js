const createEmailTemplate = (name) => {
  return `
    <h2>Happy Birthday, ${name}!</h2>
    <p>Best wishes, and have a fun filled day</p>
  `
}

module.exports = createEmailTemplate