import { api } from '../lib/axios'

type GetSummaryResponse = {
  summary: {
    completed: number
    total: number
    goalsPerDay: Record<
      string,
      {
        id: string
        title: string
        completedAt: string
      }[]
    >
  }
}

export async function getSummary(): Promise<GetSummaryResponse> {
  const { data } = await api.get('/summary')

  return data
}
