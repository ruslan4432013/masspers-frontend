import { LexicalComposer } from '@lexical/react/LexicalComposer'

export const Editor = () => {
  const editorConfig = {
    namespace: 'Editor',
    onError(error: Error) {
      throw error
    },
  }

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div>some text</div>
    </LexicalComposer>
  )
}
