import { api } from '../lib/axios'

type CreateGoalRequest = {
  title: string
  desiredWeeklyFrequency: number
}

export async function createGoal({
  title,
  desiredWeeklyFrequency,
}: CreateGoalRequest) {
  await api.post('/goals', {
    title,
    desiredWeeklyFrequency,
  })
}
