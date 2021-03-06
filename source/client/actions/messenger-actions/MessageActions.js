import alt from '../../alt'
import Data from '../../utilities/DataRequests'
import toastr from 'toastr'

class MessageActions {
  constructor () {
    this.generateActions(
      'sendMessageSuccess',
      'getThreadMessagesSuccess',
      'getThreadMessagesFail'
    )
  }

  getThreadMessages (otherUserUsername) {
    let req = Data.get(`/api/thread/${otherUserUsername}`, true)
    $.ajax(req)
      .done((thread) => {
        this.getThreadMessagesSuccess(thread)
      })
      .fail((err) => {
        this.getThreadMessagesFail()
        toastr.error(JSON.parse(err.responseText).message)
      })

    return true
  }

  sendMessage (content, threadId) {
    let req = Data.post(`/api/message/add/${threadId}`, content, true)

    $.ajax(req)
      .done((thread) => this.sendMessageSuccess(thread))

    return true
  }
}

export default alt.createActions(MessageActions)
