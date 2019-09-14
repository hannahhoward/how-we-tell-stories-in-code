import React from 'react'
import styled from 'react-emotion'
import {
  BlockQuote as BaseBlockQuote,
  Heading as BaseHeading,
  Quote as BaseQuote,
  Text as BaseText,
  Cite as BaseCite,
  Image as BaseImage,
  List as BaseList,
  ListItem as BaseListItem,
  Notes as BaseNotes
} from 'spectacle'
export { Appear } from 'spectacle'

// put component customizations here
export const Heading = styled(BaseHeading)``
export const BlockQuote = styled(BaseBlockQuote)``
export const Quote = styled(BaseQuote)``
export const Text = styled(BaseText)``
export const Cite = styled(BaseCite)``
export const Image = styled(BaseImage)``
export const List = styled(BaseList)``
export const ListItem = styled(BaseListItem)``
export const Notes = ({ children }) => {
  return (
    <BaseNotes>
      <div style={{ fontFamily: 'Helvetica', fontSize: '1.5rem' }}>
        {children}
      </div>
    </BaseNotes>
  )
}
