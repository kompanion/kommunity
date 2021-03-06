import React from 'react'

import LayoutBasis from './src/layouts/LayoutBasis.tsx'
import PageMeta from './src/components/PageMeta.tsx'

import './src/globalStyles/colors.css'
import './src/globalStyles/media.css'
import './src/globalStyles/shadows.css'
import './src/globalStyles/transitions.css'
import './src/globalStyles/typography.css'

import './src/globalStyles/common.css'
import './src/globalStyles/helpers.css'

import './src/components/styles/commonComponents.css'

export const wrapPageElement = ({ element, props }) => (
  <>
    <PageMeta title="kommunity" />
    <LayoutBasis {...props}>{element}</LayoutBasis>
  </>
)
