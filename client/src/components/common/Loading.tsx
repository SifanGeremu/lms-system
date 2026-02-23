import React from 'react'

interface LoadingProps {
  message?: string
  fullScreen?: boolean
}

const Loading: React.FC<LoadingProps> = ({ message = 'Loading...', fullScreen = false }) => {
  const content = (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="inline-flex h-12 w-12 animate-spin rounded-full border-4 border-primary border-r-transparent"></div>
      {message && <p className="text-muted-foreground">{message}</p>}
    </div>
  )

  if (fullScreen) {
    return <div className="min-h-screen flex items-center justify-center">{content}</div>
  }

  return <div className="flex items-center justify-center py-12">{content}</div>
}

export default Loading
