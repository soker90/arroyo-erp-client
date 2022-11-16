import { faker } from '@faker-js/faker'
import { rangeFill } from 'utils'

const generateReminder = () => ({
  _id: faker.database.mongodbObjectId(),
  message: faker.lorem.lines(1)
})

export const remindersResponse = (reminder) => {
  const reminders = rangeFill(faker.datatype.number({
    max: 40,
    min: 2
  }), generateReminder)

  if (reminder) {
    reminders.push({ _id: faker.database.mongodbObjectId(), message: reminder })
  }

  return { reminders }
}

export const dashboardResponse = () => ({
  cash: {
    1: faker.datatype.float(),
    2: faker.datatype.float(),
    3: faker.datatype.float(),
    4: faker.datatype.float(),
    total: faker.datatype.float()
  },
  reminders: rangeFill(faker.datatype.number({
    max: 40,
    min: 2
  }), generateReminder)
})
