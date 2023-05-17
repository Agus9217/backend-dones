import questionsModels from "../models/questions.models.js"

const initialSetup = async () => {
  try {
    const count = await questionsModels.estimatedDocumentCount()
    if (count > 0) {
      return
    } else {
      const values = await Promise.all([
        new questionsModels({ name: 'Disfruto...' }).save(),
        new questionsModels({ name: 'Me gustaria mas que hasta ahora...'}).save(),
        new questionsModels({ name: 'Me resulta...' }).save(),
        new questionsModels({ name: 'Estoy dispuesto a...' }).save(),
        new questionsModels({ name: 'He tenido la experiencia...' }).save()
      ])
      console.log(values)
    }
  } catch (err) {
    console.log(`### ${err.message} ###`)
  }
}

initialSetup()
