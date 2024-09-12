import { api } from '../lib/axios'

type GetPendingGoalsResponse = {
  pendingGoals: {
    id: string
    title: string
    desiredWeeklyFrequency: number
    completionCount: number
  }[]
}

export async function getPendingGoals(): Promise<GetPendingGoalsResponse> {
  const { data } = await api.get('/pending-goals')

  return data
}
