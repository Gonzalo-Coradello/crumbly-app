import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('sessions.db')

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL);',
        [],
        (_, result) => resolve(result),
        (_, error) => {
          reject(error)
          return true
        }
      )
    })
  })
  return promise
}

type Props = {
  email: string
  localId: string
  token: string
}

export const insertSession = ({ email, localId, token }: Props) => {
  // eslint-disable-next-line
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO sessions (email, localId, token) VALUES (?, ?, ?);',
        [email, localId, token],
        (_, result) => resolve(result),
        (_, error) => {
          reject(error)
          return true
        }
      )
    })
  })
  return promise
}

export const fetchSession = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM sessions;',
        [],
        (_, result) => resolve(result),
        (_, error) => {
          reject(error)
          return true
        }
      )
    })
  })
  return promise
}

export const deleteSession = (localId: string) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM sessions WHERE localId = ?;',
        [localId],
        (_, result) => resolve(result),
        (_, error) => {
          reject(error)
          return true
        }
      )
    })
  })
  return promise
}
