import alt from '../../alt'

import FormActions from '../../actions/common-actions/FormActions'
import UserActions from '../../actions/user-actions/UserActions'

class FormStore {
  constructor () {
    this.bindActions(FormActions)
    this.bindListeners({
      onRegisterUserFail: UserActions.registerUserFail,
      onRegisterUserSuccess: UserActions.registerUserSuccess,
      onLoginUserSuccess: UserActions.loginUserSuccess,
      onLoginUserFail: UserActions.loginUserFail,
      onLogoutUserSuccess: UserActions.logoutUserSuccess
    })

    this.username = ''
    this.password = ''
    this.confirmedPassword = ''
    this.firstName = ''
    this.lastName = ''
    this.age = ''
    this.gender = ''
    this.formSubmitState = ''
    this.usernameValidationState = ''
    this.passwordValidationState = ''
    this.message = ''
  }

  onRegisterUserSuccess () {
    console.log('FormStore register success')

    this.formSubmitState = 'has-success'
    this.username = ''
    this.password = ''
    this.confirmedPassword = ''
    this.firstName = ''
    this.lastName = ''
    this.age = ''
    this.gender = ''
    this.usernameValidationState = ''
    this.passwordValidationState = ''
    this.message = 'User register success'
  }

  onRegisterUserFail (err) {
    console.log('FormStore register fail', err)
    if (err.code === 11000) {
      this.usernameValidationState = 'has-error'
      this.message = 'Username already in use'
      return
    }

    this.formSubmitState = 'has-error'
    this.message = err.errmsg
  }

  onUsernameValidatonFail () {
    this.usernameValidationState = 'has-error'
    this.passwordValidationState = ''
    this.formSubmitState = ''
    this.message = 'Enter username'
  }

  onPasswordValidationFail () {
    this.passwordValidationState = 'has-error'
    this.usernameValidationState = ''
    this.formSubmitState = ''
    this.message = 'Invalid password, or password doest not match'
  }

  onHandleUsernameChange (e) {
    this.username = e.target.value
  }

  onHandlePasswordChange (e) {
    this.password = e.target.value
  }

  onHandleConfirmedPasswordChange (e) {
    this.confirmedPassword = e.target.value
  }

  onHandleFirstNameChange (e) {
    this.firstName = e.target.value
  }

  onHandleLastNameChange (e) {
    this.lastName = e.target.value
  }

  onHandleAgeChange (e) {
    this.age = e.target.value
  }

  onHandleGenderChange (e) {
    this.gender = e.target.value
  }

  onLoginUserSuccess () {
    this.username = ''
    this.password = ''
    this.confirmedPassword = ''
    this.firstName = ''
    this.lastName = ''
    this.age = ''
    this.gender = ''
    this.formSubmitState = 'has-success'
    this.usernameValidationState = ''
    this.passwordValidationState = ''
    this.message = 'User login successful'
  }

  onLoginUserFail (err) {
    this.formSubmitState = 'has-error'
    this.usernameValidationState = 'has-error'
    this.passwordValidationState = 'has-error'
    this.message = err.message
  }

  onUnauthorizedAccessAttempt () {
    this.formSubmitState = 'has-error'
    this.usernameValidationState = ''
    this.passwordValidationState = ''
    this.message = 'Please login'
  }

  onLogoutUserSuccess () {
    this.username = ''
    this.password = ''
    this.confirmedPassword = ''
    this.firstName = ''
    this.lastName = ''
    this.age = ''
    this.gender = ''
    this.formSubmitState = ''
    this.usernameValidationState = ''
    this.passwordValidationState = ''
    this.message = ''
  }

  onClearFields () {
    this.username = ''
    this.password = ''
    this.confirmedPassword = ''
    this.firstName = ''
    this.lastName = ''
    this.age = ''
    this.gender = ''
    this.formSubmitState = ''
    this.usernameValidationState = ''
    this.passwordValidationState = ''
    this.message = ''
  }
}

export default alt.createStore(FormStore)
