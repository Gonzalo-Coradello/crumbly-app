import { View } from 'react-native'
import { Review } from 'src/types'

import { styles } from './styles'
import Typography from '../../common/typography'
import RatingItem from '../rating-item'

type Props = {
  reviews?: Review[]
}

const Ratings = ({ reviews }: Props) => {
  return (
    <View>
      {reviews?.length ? (
        reviews.map((review) => <RatingItem key={review.id} {...review} />)
      ) : (
        <View style={styles.emptyReviews}>
          <Typography variant="light" size={15}>
            Esta receta aún no tiene valoraciones.
          </Typography>
        </View>
      )}
    </View>
  )
}

export default Ratings
