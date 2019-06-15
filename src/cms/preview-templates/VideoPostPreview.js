import React from 'react'
import PropTypes from 'prop-types'
import { VideoPostTemplate } from '../../templates/video-post'

const VideoPostPreview = ({ entry, widgetFor }) => (
  <VideoPostTemplate
    content={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
  />
)

VideoPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default VideoPostPreview
