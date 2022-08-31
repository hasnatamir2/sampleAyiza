import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

const TileCard = (props: any) => {
  const { title, icon, link, counter = null, color = 'darkblue' } = props
  const navigate = useNavigate()

  return (
    <div className="clr-item" onClick={() => navigate(link)}>
      <div className="conf-bx">
        <div className="global-boxlist__item">
          <div className="boxlist-item__heading--small">{title}</div>
          <div className="boxlist-item__iconbox">
            {' '}
            <FontAwesomeIcon icon={['fas', icon]} style={{ color }} />
          </div>
          <div className="boxlist-item__counter">
            <span style={{ fontSize: 12, color: 'gray' }}>{counter}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TileCard
