import {
  InitialConfigType,
  LexicalComposer,
} from '@lexical/react/LexicalComposer'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary'

const theme = {}

function onError(error: Error) {
  console.error(error)
}

const initialConfig: InitialConfigType = {
  namespace: 'MyEditor',
  theme,
  onError,
}

export function Editor() {
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<div>Введите текст...</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
    </LexicalComposer>
  )
}
