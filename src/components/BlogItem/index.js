import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogData
  console.log(imageUrl)

  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="blog-item-container">
        <img src={imageUrl} alt={`items${id}`} className="item-image" />
        <div className="item-info">
          <p className="item-topic">{topic}</p>
          <h1 className="item-title">{title}</h1>
          <div className="author-info">
            <img src={avatarUrl} alt={`avatar${id}`} className="author-image" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
