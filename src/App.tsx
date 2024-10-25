import { UserInfo } from './components/UserInfoFC'
import { UserInfoCC } from './components/UserInfoCC'


function App() {

    const userInfo = {
        name: 'USER1',
        status: 'STATUS1',
        avatar: 'https://dummyimage.com/200x100',
    };

  return (
      <>
        <UserInfo info={ userInfo } />
        <UserInfoCC info={ userInfo }/>
      </>
  )
}

export default App
