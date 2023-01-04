import { Loader } from '#components/common/Loader'
import { Strong } from '#components/common/Strong'
import { useColorContext } from '#components/templates/Providers/ColorProvider'
import React from 'react'
import { useGetNotion } from '../../hooks/useGetNotion'

export type NotionResponse = {
  questions: Array<{ question: string; createdAt: string }>
}

export const OldQuestions = () => {
  const { colors } = useColorContext()
  const { data, isLoading, error } = useGetNotion<NotionResponse>('ask')

  if (isLoading) return <Loader />
  if (error) {
    console.error(error)
    return (
      <div className="text-red">
        <p>
          There should be a nice question list here, but apparently some weird
          error happened.
        </p>
        <p>Please try again later</p>
      </div>
    )
  }

  if (!data?.questions.length) {
    return null
  }

  return (
    <div>
      <h2>
        Últimas perguntas <Strong color={colors.textColor}>respondidas</Strong>
      </h2>
      <ul className="flex flex-col gap-2 mt-4">
        {data.questions.map(({ question, createdAt }, index) => {
          const date = new Intl.DateTimeFormat('pt-BR', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
          }).format(new Date(createdAt))

          // const date = TimestampToDate(new Date(createdAt).getTime())
          if (!question) return null

          return (
            <div key={index}>
              <small className="text-gray-500">{date}</small>
              <p>{question}</p>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
