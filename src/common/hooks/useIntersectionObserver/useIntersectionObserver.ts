import { useCallback, MutableRefObject } from 'react'

export type Params = {
  observer: MutableRefObject<IntersectionObserver | undefined>
  isLoading: boolean
  isFetching: boolean
  hasNextPage: boolean
  fetchNextPage: () => void
}

export const useIntersectionObserver = ({
  observer,
  isFetching,
  isLoading,
  hasNextPage,
  fetchNextPage
}: Params) => {
  const elementRef = useCallback(
    (element: HTMLDivElement) => {
      if (isLoading) return

      if (observer.current) {
        observer.current.disconnect()
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage()
        }
      })

      if (element) {
        observer.current.observe(element)
      }
    },
    [isLoading, hasNextPage, isFetching, fetchNextPage, observer]
  )

  return elementRef
}
