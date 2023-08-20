'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import '@mdxeditor/editor/style.css'

import { headingsPlugin, 
  listsPlugin, 
  quotePlugin, 
  thematicBreakPlugin, 
  UndoRedo, 
  BoldItalicUnderlineToggles, 
  toolbarPlugin,
  DiffSourceToggleWrapper,
  diffSourcePlugin,
  tablePlugin,
  InsertTable,
  linkPlugin,
  linkDialogPlugin,
  imagePlugin,
  codeMirrorPlugin,
  codeBlockPlugin,
  InsertImage,
  InsertAdmonition,
  ListsToggle,
  BlockTypeSelect
} from '@mdxeditor/editor'

const MDXEditor = dynamic(
  () => import('@mdxeditor/editor').then((mod) => mod.MDXEditor), 
  { ssr: false }
)


const imageDirectiveMarkdown = `
Content

# hello world

inline images =  :img[alt text]{src="https://via.placeholder.com/150"} :img[alt text]{src="https://via.placeholder.com/150"} :img[alt text]{src="https://via.placeholder.com/150"}

:img[alt text]{src="https://via.placeholder.com/150"}

more
`


export default function Editor() {
  
  return <MDXEditor  onChange={console.log} markdown={imageDirectiveMarkdown} contentEditableClassName="prose"
          plugins={[
            listsPlugin(),
            quotePlugin(),
            headingsPlugin(),
            linkPlugin(),
            linkDialogPlugin(),
            imagePlugin(),
            tablePlugin(),
            thematicBreakPlugin(),
           // frontmatterPlugin(),<InsertFrontmatter />
            codeBlockPlugin({ defaultCodeBlockLanguage: 'txt' }),
            codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', css: 'CSS', txt: 'text', tsx: 'TypeScript' } }),
            diffSourcePlugin({ viewMode: 'rich-text', diffMarkdown: 'boo' }),
            toolbarPlugin({
              toolbarContents: () => ( <>  <DiffSourceToggleWrapper><UndoRedo /><BoldItalicUnderlineToggles /><InsertTable /><InsertImage /><BlockTypeSelect /><InsertAdmonition /><ListsToggle />  </DiffSourceToggleWrapper> </>)
            }),
          ]} 
          />
}
