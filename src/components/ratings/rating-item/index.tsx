import { Image, View } from 'react-native'
import Typography from 'src/components/common/typography'
import ProfileCircle from 'src/components/profile/profile-circle'
import RecipeRating from 'src/components/recipes/recipe-rating'
import { useGetUserByIdQuery } from 'src/store/users/api'
import { Review, User } from 'src/types'

import { styles } from './styles'

const RatingItem = ({ id, rating, image, review, userId, createdAt, recipeId }: Review) => {
  const { data, isLoading } = useGetUserByIdQuery(userId)

  if (isLoading) return

  const user: User = data

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.user}>
          <ProfileCircle picture={user?.image} size={40} />
          <View>
            <Typography variant="medium">{user?.name}</Typography>
            {createdAt && (
              <Typography variant="light">
                {new Date(createdAt)?.toLocaleDateString('en-GB')}
              </Typography>
            )}
          </View>
        </View>
        <RecipeRating reviews={[{ id, rating, image, review, userId, createdAt, recipeId }]} />
      </View>
      <View style={styles.body}>
        {image && <Image source={{ uri: image }} style={styles.image} />}
        {review && <Typography>{review}</Typography>}
      </View>
    </View>
  )
}

export default RatingItem
