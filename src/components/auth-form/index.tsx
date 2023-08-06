import { TouchableOpacity, View } from 'react-native'
import { StateType } from 'src/screens/auth'

import { styles } from './styles'
import FormInput from '../form-input'
import Typography from '../typography'

type Props = {
  isLogin: boolean
  setIsLogin: (arg: boolean) => void
  formState: StateType
  handleInputChange: (args: { name: string; value: string }) => void
  handleSubmit: () => void
  authError: string
  handleFormChange: () => void
}

const AuthForm = ({
  isLogin,
  setIsLogin,
  formState,
  handleInputChange,
  handleSubmit,
  authError,
  handleFormChange,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {authError && (
          <Typography color="error">
            {isLogin
              ? 'Email o contraseña incorrectos'
              : authError === 'EMAIL_EXISTS'
              ? 'El email ya está en uso'
              : 'Ha ocurrido un error'}
          </Typography>
        )}
        <View style={styles.formContainer}>
          {!isLogin && formState.name && (
            <FormInput
              error={formState.name.error}
              touched={formState.name.touched}
              hasError={formState.name.hasError}
              label="Nombre"
              onChangeText={(text) => handleInputChange({ value: text, name: 'name' })}
              value={formState.name.value}
              placeholder="Juan Martínez"
            />
          )}
          <FormInput
            error={formState.email.error}
            touched={formState.email.touched}
            hasError={formState.email.hasError}
            label="Email"
            onChangeText={(text) => handleInputChange({ value: text, name: 'email' })}
            value={formState.email.value}
            placeholder="juanm@gmail.com"
          />
          <FormInput
            error={formState.password.error}
            touched={formState.password.touched}
            hasError={formState.password.hasError}
            label="Contraseña"
            onChangeText={(text) => handleInputChange({ value: text, name: 'password' })}
            value={formState.password.value}
            placeholder="********"
            isSecure
          />
          <TouchableOpacity
            disabled={!formState.isFormValid}
            onPress={handleSubmit}
            style={formState.isFormValid ? styles.button : [styles.button, styles.disabledButton]}>
            <Typography size={16} variant="medium" centered color="white">
              {isLogin ? 'Iniciar sesión' : 'Registrarse'}
            </Typography>
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          <Typography variant="light" centered>
            {isLogin ? 'No tienes cuenta?' : '¿Ya tienes cuenta?'}
          </Typography>
          <TouchableOpacity onPress={handleFormChange}>
            <Typography variant="medium" centered color="primary">
              {isLogin ? 'Registrate' : 'Inicia sesión'}
            </Typography>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default AuthForm
