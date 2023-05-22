import { fakerES as faker } from '@faker-js/faker'
import { rangeFill } from 'utils'

const generateReminder = () => ({
  _id: faker.database.mongodbObjectId(),
  message: faker.lorem.lines(1)
})

export const remindersResponse = (reminder) => {
  const reminders = rangeFill(faker.number.int({
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
    1: faker.number.float(),
    2: faker.number.float(),
    3: faker.number.float(),
    4: faker.number.float(),
    total: faker.number.float()
  },
  reminders: rangeFill(faker.number.int({
    max: 40,
    min: 2
  }), generateReminder)
})
